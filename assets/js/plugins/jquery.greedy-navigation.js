/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');
var compactNavQuery = window.matchMedia('(max-width: 600px)');

var breaks = [];

function syncNavButton() {
  $btn.attr('aria-expanded', (!$hlinks.hasClass('hidden') && !$btn.hasClass('hidden')).toString());
}

function restoreHiddenLinks() {
  var $langLink = $vlinks.children('.masthead__menu-item--lang').first();

  if($langLink.length > 0) {
    $hlinks.children().insertAfter($langLink);
  } else {
    $hlinks.children().appendTo($vlinks);
  }
}

function updateNav() {

  if(compactNavQuery.matches) {
    $nav.addClass('greedy-nav--compact');
    $hlinks.prepend($vlinks.children('*:not(.masthead__menu-item--lg):not(.masthead__menu-item--lang)'));
    breaks = [];

    if($hlinks.children().length > 0) {
      $btn.removeClass('hidden');
    } else {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }

    syncNavButton();
    return;
  } else if($nav.hasClass('greedy-nav--compact')) {
    $nav.removeClass('greedy-nav--compact');
    restoreHiddenLinks();
    breaks = [];
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
  }

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children('*:not(.masthead__menu-item--lg)').length > 0) {

      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

      availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
      
      // Show the dropdown btn
      if($btn.hasClass('hidden')) {
        $btn.removeClass('hidden');
      }
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while(breaks.length > 0 && availableSpace > breaks[breaks.length-1]) {
      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);
  syncNavButton();

}

// Window listeners

$(window).on('resize', function() {
  updateNav();
});
screen.orientation.addEventListener("change", function(){
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
  syncNavButton();
});

$hlinks.on('click', 'a', function() {
  $hlinks.addClass('hidden');
  $btn.removeClass('close');
  syncNavButton();
});

$(document).on('keydown', function(event) {
  if(event.key === 'Escape' && !$hlinks.hasClass('hidden')) {
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
    syncNavButton();
    $btn.trigger('focus');
  }
});

$(document).on('click', function(event) {
  if(!$hlinks.hasClass('hidden') && !$nav.is(event.target) && $nav.has(event.target).length === 0) {
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
    syncNavButton();
  }
});

updateNav();
