/*
 * site.js — vanilla JS for this site (no jQuery).
 *
 * Replaces the academicpages main.min.js bundle (jQuery + greedy-nav +
 * smooth-scroll + magnific-popup + sticky-footer JS). Anchor scrolling is
 * handled by CSS (scroll-behavior + scroll-margin-top) and the sticky footer
 * by pure CSS, so only the pieces below are needed.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var isZh = (root.getAttribute('lang') || '').indexOf('zh') === 0;

  /* ------------------------------------------------------------------
   * Theme toggle (light default; choice persisted in localStorage)
   * ------------------------------------------------------------------ */
  var themeBtn = document.getElementById('theme-toggle');
  var themeMeta = document.getElementById('meta-theme-color');

  function syncThemeUI() {
    var dark = root.getAttribute('data-theme') === 'dark';
    if (themeBtn) themeBtn.setAttribute('aria-pressed', String(dark));
    if (themeMeta) themeMeta.setAttribute('content', dark ? '#12151c' : '#f7f8fa');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark';
      if (dark) {
        root.removeAttribute('data-theme');
        try { localStorage.setItem('theme', 'light'); } catch (e) {}
      } else {
        root.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('theme', 'dark'); } catch (e) {}
      }
      syncThemeUI();
    });
    syncThemeUI();
  }

  /* ------------------------------------------------------------------
   * Greedy navigation (vanilla port of the priority+ pattern).
   * Items marked --lg / --lang / --theme never move; everything else
   * folds into the hidden-links dropdown when it overflows.
   * ------------------------------------------------------------------ */
  var nav = document.getElementById('site-nav');
  if (nav) {
    var navBtn = nav.querySelector('button');
    var vlinks = nav.querySelector('.visible-links');
    var hlinks = nav.querySelector('.hidden-links');
    var compactQuery = window.matchMedia('(max-width: 600px)');
    var breaks = [];
    var keepSel = '.masthead__menu-item--lg, .masthead__menu-item--lang, .masthead__menu-item--theme';

    function isHidden() {
      return hlinks.classList.contains('hidden');
    }

    function syncNavButton() {
      var open = !isHidden() && !navBtn.classList.contains('hidden');
      navBtn.setAttribute('aria-expanded', String(open));
    }

    function updateNav() {
      if (compactQuery.matches) {
        nav.classList.add('greedy-nav--compact');
        var movable = [].filter.call(vlinks.children, function (li) {
          return !li.matches(keepSel);
        });
        movable.forEach(function (li) { hlinks.appendChild(li); });
        breaks = [];
        if (hlinks.children.length > 0) {
          navBtn.classList.remove('hidden');
        } else {
          navBtn.classList.add('hidden');
          navBtn.classList.remove('close');
          hlinks.classList.add('hidden');
        }
        syncNavButton();
        return;
      }

      if (nav.classList.contains('greedy-nav--compact')) {
        nav.classList.remove('greedy-nav--compact');
        var langItem = vlinks.querySelector('.masthead__menu-item--lang');
        var ref = langItem;
        var hiddenItems = [].slice.call(hlinks.children);
        hiddenItems.forEach(function (li) {
          if (ref) {
            ref.insertAdjacentElement('afterend', li);
          } else {
            vlinks.appendChild(li);
          }
          ref = li;
        });
        breaks = [];
        hlinks.classList.add('hidden');
        navBtn.classList.remove('close');
      }

      var btnWidth = navBtn.classList.contains('hidden') ? 0 : navBtn.offsetWidth + 30;
      var availableSpace = nav.offsetWidth - btnWidth;

      if (vlinks.offsetWidth > availableSpace) {
        while (vlinks.offsetWidth > availableSpace) {
          var items = [].filter.call(vlinks.children, function (li) {
            return !li.matches(keepSel);
          });
          if (items.length === 0) break;
          breaks.push(vlinks.offsetWidth);
          hlinks.insertBefore(items[items.length - 1], hlinks.firstChild);
          btnWidth = navBtn.classList.contains('hidden') ? 0 : navBtn.offsetWidth + 30;
          availableSpace = nav.offsetWidth - btnWidth;
          navBtn.classList.remove('hidden');
        }
      } else {
        while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
          // Restore in front of the protected theme item to keep DOM order.
          vlinks.insertBefore(hlinks.firstChild, vlinks.querySelector('.masthead__menu-item--theme'));
          breaks.pop();
          btnWidth = navBtn.classList.contains('hidden') ? 0 : navBtn.offsetWidth + 30;
          availableSpace = nav.offsetWidth - btnWidth;
        }
        if (breaks.length < 1) {
          navBtn.classList.add('hidden');
          navBtn.classList.remove('close');
          hlinks.classList.add('hidden');
        }
      }

      navBtn.setAttribute('count', String(breaks.length));
      syncNavButton();
    }

    var resizeRaf = 0;
    window.addEventListener('resize', function () {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(updateNav);
    });
    if (screen.orientation) {
      screen.orientation.addEventListener('change', updateNav);
    }

    navBtn.addEventListener('click', function () {
      hlinks.classList.toggle('hidden');
      navBtn.classList.toggle('close');
      syncNavButton();
    });

    hlinks.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        hlinks.classList.add('hidden');
        navBtn.classList.remove('close');
        syncNavButton();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !isHidden()) {
        hlinks.classList.add('hidden');
        navBtn.classList.remove('close');
        syncNavButton();
        navBtn.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (!isHidden() && !nav.contains(event.target)) {
        hlinks.classList.add('hidden');
        navBtn.classList.remove('close');
        syncNavButton();
      }
    });

    updateNav();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateNav);
    }
    window.addEventListener('load', updateNav);
  }

  /* ------------------------------------------------------------------
   * Click-to-copy on the contact-card email addresses
   * ------------------------------------------------------------------ */
  var toast = null;
  var toastTimer = 0;

  function showCopied(anchorRect, ok) {
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'copy-toast';
      toast.setAttribute('role', 'status');
      document.body.appendChild(toast);
    }
    toast.textContent = ok ? (isZh ? '已复制' : 'Copied') : (isZh ? '复制失败' : 'Copy failed');
    toast.classList.toggle('copy-toast--error', !ok);
    toast.style.left = (anchorRect.left + anchorRect.width / 2) + 'px';
    toast.style.top = (anchorRect.top - 8) + 'px';
    toast.classList.add('copy-toast--show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('copy-toast--show');
    }, 1400);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy') ? resolve() : reject(new Error('copy failed'));
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  document.querySelectorAll('.profile-card code').forEach(function (el) {
    var text = el.textContent || '';
    if (text.indexOf('@') === -1) return;
    el.classList.add('copyable');
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('title', isZh ? '点击复制' : 'Click to copy');

    function handler() {
      copyText(text).then(function () {
        showCopied(el.getBoundingClientRect(), true);
      }).catch(function () {
        showCopied(el.getBoundingClientRect(), false);
      });
    }
    el.addEventListener('click', handler);
    el.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handler();
      }
    });
  });

  /* ------------------------------------------------------------------
   * Scroll-in reveal for sections below the fold (reduced-motion safe)
   * ------------------------------------------------------------------ */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    document.querySelectorAll('.profile-section, .profile-masthead').forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.85) {
        el.classList.add('reveal');
        io.observe(el);
      }
    });
  }

  /* ------------------------------------------------------------------
   * Open images / PDFs in a new tab (award gallery, certificates, slides)
   * ------------------------------------------------------------------ */
  document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"], a[href$=".webp"], a[href$=".pdf"]').forEach(function (a) {
    a.target = '_blank';
    a.rel = 'noopener';
  });
})();
