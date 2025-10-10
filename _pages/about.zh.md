---
permalink: /zh/
title: "林鹏"
author_profile: true
locale: zh
author: peng_lin_zh
redirect_from:
  - /cn/
---

<style>
@import url("{{ '/assets/css/academicons.css' | relative_url }}");

.profile-lang-toggle{
  display:inline-flex;
  align-items:center;
  gap:0.45rem;
  padding:0.35rem;
  border-radius:999px;
  background:rgba(63,111,247,0.1);
  margin-bottom:1.5rem;
}
.profile-lang-toggle__link{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:0.45rem 1.2rem;
  border-radius:999px;
  font-size:0.85rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  text-decoration:none;
  color:#2b3a5c;
  transition:all 0.2s ease;
}
.profile-lang-toggle__link:hover{
  background:rgba(63,111,247,0.25);
  color:#1f2a44;
}
.profile-lang-toggle__link--active{
  background:#3f6ff7;
  color:#ffffff;
  box-shadow:0 10px 20px rgba(63,111,247,0.35);
}
.profile-nav{
  position:relative;
  display:flex;
  flex-wrap:wrap;
  gap:0.7rem;
  padding:0.75rem 1rem;
  margin-bottom:1.8rem;
  border-radius:18px;
  border:1px solid rgba(63,111,247,0.25);
  background:linear-gradient(135deg,rgba(63,111,247,0.12) 0%,rgba(111,84,255,0.18) 100%);
  box-shadow:0 25px 40px rgba(30,45,92,0.18);
  overflow:hidden;
}
.profile-nav::before{
  content:"";
  position:absolute;
  inset:-40% auto auto -20%;
  width:160%;
  height:160%;
  background:radial-gradient(circle at top,rgba(255,255,255,0.35) 0%,rgba(255,255,255,0) 55%);
  opacity:0.85;
  pointer-events:none;
  transform:rotate(-8deg);
}
.profile-nav__link{
  position:relative;
  display:inline-flex;
  align-items:center;
  gap:0.45rem;
  padding:0.5rem 1.1rem;
  border-radius:999px;
  font-size:0.88rem;
  font-weight:600;
  letter-spacing:0.14em;
  text-transform:uppercase;
  color:#213052;
  text-decoration:none;
  background:linear-gradient(135deg,rgba(255,255,255,0.92) 0%,rgba(222,229,255,0.85) 100%);
  box-shadow:0 10px 22px rgba(28,44,94,0.14);
  transition:transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
  backdrop-filter:blur(6px);
}
.profile-nav__link::after{
  content:"";
  position:absolute;
  left:18%;
  right:18%;
  bottom:0.25rem;
  height:3px;
  border-radius:999px;
  background:linear-gradient(90deg,rgba(63,111,247,0.6) 0%,rgba(111,84,255,0.8) 100%);
  opacity:0;
  transition:opacity 0.25s ease, transform 0.25s ease;
  transform:scaleX(0.6);
}
.profile-nav__link:hover,
.profile-nav__link:focus-visible{
  transform:translateY(-2px);
  box-shadow:0 18px 32px rgba(28,44,94,0.28);
  color:#101a33;
  background:linear-gradient(135deg,rgba(255,255,255,0.95) 0%,rgba(168,182,255,0.92) 100%);
}
.profile-nav__link:hover::after,
.profile-nav__link:focus-visible::after{
  opacity:1;
  transform:scaleX(1);
}
.profile-hero{
  background:linear-gradient(135deg,#f8fbff 0%,#f2f0ff 100%);
  border-radius:22px;
  padding:2.1rem;
  box-shadow:0 22px 45px rgba(36,56,99,0.16);
  margin-bottom:2.5rem;
}
.profile-hero__quote{
  font-size:1.05rem;
  color:#3a4a67;
  margin:0 0 1.4rem;
}
.profile-hero__grid{
  display:flex;
  flex-wrap:wrap;
  gap:1.25rem;
  align-items:stretch;
}
.profile-card{
  background:rgba(255,255,255,0.93);
  border-radius:18px;
  padding:1.3rem 1.4rem;
  box-shadow:0 14px 28px rgba(18,33,68,0.12);
  flex:0 0 auto;
  width:auto;
  min-width:220px;
}
.profile-card h3{
  margin-top:0;
  margin-bottom:0.6rem;
  font-size:1.05rem;
  font-weight:600;
  color:#253354;
}
.profile-card p{
  margin:0;
  color:#4a5875;
  line-height:1.55;
}
.profile-card__list{
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  gap:0.38rem;
}
.profile-card__item{
  display:flex;
  align-items:center;
  gap:0.55rem;
  font-size:0.92rem;
  color:#32405e;
}
.profile-card__icon{
  width:1.6rem;
  height:1.6rem;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  background:rgba(63,111,247,0.16);
  color:#3f6ff7;
  font-size:0.86rem;
  flex-shrink:0;
  box-shadow:0 6px 12px rgba(35,52,109,0.18);
}
.profile-card__item a{
  color:inherit;
  text-decoration:none;
  font-weight:600;
}
.profile-card__item a:hover{
  color:#3f6ff7;
}
.profile-hero__lead{
  margin:1.8rem 0 0;
  font-size:1.02rem;
  color:#27354f;
}
.profile-hero__lead a{
  color:#3f6ff7;
}
.profile-hero__lead--secondary{
  margin-top:0.7rem;
  font-size:0.95rem;
  color:#3a4866;
}
.profile-section{
  margin-bottom:2.6rem;
}
.profile-section h2{
  font-size:1.35rem;
  color:#23304d;
  margin-bottom:1.2rem;
}
.profile-subsection h3{
  font-size:1.05rem;
  color:#334161;
  margin-bottom:1rem;
  text-transform:uppercase;
  letter-spacing:0.08em;
}
.profile-paper{
  background:#ffffff;
  border-radius:10px;
  padding:0.38rem 0.75rem;
  border:1px solid rgba(63,111,247,0.15);
  box-shadow:0 14px 24px rgba(35,52,109,0.14);
  margin-bottom:0.35rem;
}
.profile-paper__tag{
  display:inline-block;
  padding:0.18rem 0.62rem;
  border-radius:999px;
  background:rgba(63,111,247,0.15);
  color:#2a3b5f;
  font-size:0.88rem;
  font-weight:600;
  letter-spacing:0.08em;
  text-transform:uppercase;
  margin:0 0.35rem 0.22rem 0;
}
.profile-paper__title{
  margin:0 0 0.06rem;
  font-size:1.12rem;
  color:#1f2a3f;
  line-height:1.18;
}
.profile-paper__title a{
  color:inherit;
  text-decoration:none;
}
.profile-paper__title a:hover{
  color:#3f6ff7;
}
.profile-paper__authors,
.profile-paper__venue{
  margin:0;
  font-size:1.02rem;
  color:#4b5873;
  line-height:1.12;
}
.profile-paper__venue{
  margin-top:0.04rem;
}
.profile-timeline{
  list-style:none;
  margin:0;
  padding:0;
  border-left:3px solid rgba(63,111,247,0.18);
}
.profile-timeline li{
  position:relative;
  padding-left:1.6rem;
  margin-bottom:0.9rem;
}
.profile-timeline li:last-child{
  margin-bottom:0;
}
.profile-timeline li::before{
  content:"";
  position:absolute;
  left:-9px;
  top:0.35rem;
  width:14px;
  height:14px;
  border-radius:50%;
  background:#3f6ff7;
  box-shadow:0 0 0 4px rgba(63,111,247,0.2);
}
.profile-timeline time{
  display:block;
  font-size:0.82rem;
  text-transform:uppercase;
  letter-spacing:0.12em;
  color:#38405d;
  margin-bottom:0.18rem;
}
.profile-timeline span{
  font-size:1.02rem;
  color:#1f273d;
  line-height:1.2;
}
.profile-awards{
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  gap:0.75rem;
}
.profile-awards li{
  display:flex;
  gap:0.9rem;
  align-items:center;
  padding:0.9rem 1.1rem;
  border-radius:14px;
  background:rgba(63,111,247,0.1);
  color:#2b3a5c;
}
.profile-awards li span{
  font-weight:600;
  font-size:0.85rem;
  letter-spacing:0.05em;
  color:#1f2a44;
  text-transform:uppercase;
  min-width:95px;
}
.profile-awards li a{
  color:inherit;
}
.profile-competitions{
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  gap:1rem;
}
.profile-competitions li{
  display:flex;
  gap:1rem;
  padding:1rem 1.2rem;
  border-radius:16px;
  background:#ffffff;
  box-shadow:0 18px 32px rgba(19,29,52,0.12);
}
.profile-competitions__year{
  font-weight:700;
  color:#3f6ff7;
  letter-spacing:0.08em;
  min-width:90px;
}
.profile-competitions__body strong{
  display:block;
  color:#202c43;
  margin-bottom:0.35rem;
}
.profile-competitions__body p{
  margin:0;
  color:#4b5870;
}
.profile-edu{
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  gap:1rem;
}
.profile-edu li{
  padding:1.1rem 1.3rem;
  border-radius:18px;
  background:linear-gradient(135deg,#ffffff 0%,#f5f7ff 100%);
  box-shadow:0 18px 36px rgba(25,38,70,0.12);
}
.profile-edu li strong{
  display:block;
  font-size:1.05rem;
  color:#243251;
  margin-bottom:0.35rem;
}
.profile-edu li span{
  display:block;
  color:#4c5a75;
  font-size:0.92rem;
  line-height:1.55;
}
.profile-cards{
  display:grid;
  gap:1.1rem;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
}
.profile-cards--wide{
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
}
.profile-mini-card{
  padding:1.1rem 1.3rem;
  border-radius:18px;
  background:#ffffff;
  box-shadow:0 18px 32px rgba(17,33,66,0.12);
}
.profile-mini-card h3{
  margin-top:0;
  margin-bottom:0.45rem;
  font-size:1rem;
  color:#283553;
}
.profile-mini-card p{
  margin:0 0 0.4rem;
  color:#4c5a74;
  line-height:1.45;
}
.profile-mini-card__links a{
  color:#3f6ff7;
}
.profile-details{
  background:#ffffff;
  border-radius:16px;
  padding:1rem 1.2rem;
  box-shadow:0 16px 28px rgba(16,30,58,0.12);
}
.profile-details summary{
  cursor:pointer;
  font-size:1.05rem;
  color:#253356;
}
.profile-details[open] summary{
  margin-bottom:1rem;
}
.profile-tag-groups{
  display:flex;
  flex-direction:column;
  gap:1rem;
}
.profile-tag-list{
  font-size:0.92rem;
}
.profile-tag-list strong{
  display:block;
  font-size:0.9rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:#3b4971;
  margin-bottom:0.4rem;
}
.profile-tag-list p{
  margin:0;
  color:#3b4662;
  line-height:1.6;
}
.profile-chip{
  display:inline-flex;
  align-items:center;
  gap:0.4rem;
  padding:0.25rem 0.65rem;
  border-radius:999px;
  background:rgba(63,111,247,0.18);
  color:#1d2842;
  font-size:0.78rem;
  font-weight:600;
  letter-spacing:0.08em;
  text-transform:uppercase;
}
.profile-chip--accent{
  background:#3f6ff7;
  color:#ffffff;
}
.profile-tag-note{
  margin:1rem 0 0;
  font-size:0.85rem;
  color:#62708f;
}
.profile-benchmark{
  margin:0;
  padding-left:1.4rem;
  color:#32405e;
  line-height:1.65;
}
.profile-benchmark li{
  margin-bottom:0.35rem;
}
.profile-benchmark li:last-child{
  margin-bottom:0;
}
.profile-benchmark a{
  color:#32405e;
}
.profile-benchmark a:hover{
  color:#3f6ff7;
}
.profile-benchmark--preview{
  margin:0 0 1.2rem;
  padding-left:1.4rem;
  color:#32405e;
  line-height:1.65;
}
.profile-benchmark--preview li{
  margin-bottom:0.3rem;
}
.profile-benchmark--preview li:last-child{
  margin-bottom:0;
}
.profile-benchmark--preview a{
  color:#32405e;
}
.profile-benchmark--preview a:hover{
  color:#3f6ff7;
}
@media (max-width:600px){
  .profile-hero{
    padding:1.6rem;
  }
  .profile-hero__grid{
    flex-direction:column;
  }
  .profile-card{
    padding:1rem 1.1rem;
    min-width:100%;
  }
  .profile-mini-card{
    padding:1rem 1.1rem;
  }
  .profile-competitions li{
    flex-direction:column;
  }
  .profile-competitions__year{
    min-width:auto;
  }
}
</style>

<div class="profile-lang-toggle">
  <a class="profile-lang-toggle__link" href="/">English</a>
  <a class="profile-lang-toggle__link profile-lang-toggle__link--active" href="/zh/">中文</a>
</div>

<nav class="profile-nav">
  <a class="profile-nav__link" href="#highlights">动态</a>
  <a class="profile-nav__link" href="#publications">论文</a>
  <a class="profile-nav__link" href="#honors">荣誉/奖励</a>
  <a class="profile-nav__link" href="#competitions">学科竞赛</a>
  <a class="profile-nav__link" href="#education">教育经历</a>
  <a class="profile-nav__link" href="#talks">学术报告</a>
  <a class="profile-nav__link" href="#software">开源项目</a>
  <a class="profile-nav__link" href="#benchmarks">刷新MIP最佳记录</a>
</nav>

<div class="profile-hero">
  <div class="profile-hero__grid">
    <div class="profile-card">
      <h3>学业</h3>
      <p>
        硕博连读第三年    <br />
        专业：计算机科学与技术  <br />
        导师：<a href="http://lcs.ios.ac.cn/~caisw/">蔡少伟</a>研究员<br />
      </p>
    </div>
    <div class="profile-card">
      <h3>研究方向</h3>
      <p>
        混合整数规划  <br />
        启发式算法    <br />
        并行求解      <br />
        组合优化      <br />
      </p>
    </div>
    <div class="profile-card">
      <h3>所属单位</h3>
      <p><a href="https://www.cas.cn/">中国科学院</a><br />
      <a href="http://www.iscas.ac.cn/">软件研究所</a><br />
      <a href="http://solver.ios.ac.cn/zh/">约束求解研究室</a>
      </p>
    </div>
    <div class="profile-card">
      <h3>联系邮箱</h3>
      <p><code>linpeng@ios.ac.cn</code> <br /><code>peng.lin.csor@gmail.com</code></p>
    </div>
  </div>
</div>

<div class="profile-section" id="highlights">
  <h2>🔥 最新动态</h2>
  <ul class="profile-timeline">
    <li>
      <time datetime="2025-08-19">2025 · 08 · 19</time>
      <span>🎉🎉 第一作者论文被《Artificial Intelligence》接收</span>
    </li>
    <li>
      <time datetime="2025-05-29">2025 · 05 · 29</time>
      <span>🎉🎉 第一作者论文被 CP 国际会议接收</span>
    </li>
    <li>
      <time datetime="2024-12-31">2024 · 12 · 31</time>
      <span>🎉🎉 工信部电力国产求解器技术专题赛二等奖（第一开发者）</span>
    </li>
    <li>
      <time datetime="2024-12-10">2024 · 12 · 10</time>
      <span>🎉🎉 获得研究生国家奖学金</span>
    </li>
    <li>
      <time datetime="2024-10-07">2024 · 10 · 07</time>
      <span>🎉🎉 分布式求解器刷新 MIPLIB 21 个公开实例最优纪录（第一开发者）</span>
    </li>
    <li>
      <time datetime="2024-09-04">2024 · 09 · 04</time>
      <span>🎉🎉 第一作者论文荣获 CP 2024 最佳论文奖</span>
    </li>
    <li>
      <time datetime="2024-06-20">2024 · 06 · 20</time>
      <span>🎉🎉 第一作者论文被 CP 国际会议接收</span>
    </li>
    <li>
      <time datetime="2024-04-17">2024 · 04 · 17</time>
      <span>🎉🎉 第一作者论文被 IJCAI 国际会议接收</span>
    </li>
  </ul>
</div>

<div class="profile-section" id="publications">
  <h2>📝 论文成果</h2>
  <div class="profile-subsection">
    <h3>期刊论文</h3>
    <div class="profile-paper">
      <span class="profile-paper__tag">AIJ 2025</span>
      <p class="profile-paper__title"><a href="https://www.sciencedirect.com/science/article/pii/S0004370225001249?via%3Dihub">Local-MIP: Efficient Local Search for Mixed Integer Programming</a></p>
      <p class="profile-paper__authors"><strong>林鹏</strong>，蔡少伟，邹蒙川，林锦坤</p>
      <p class="profile-paper__venue">人工智能，2025，CCF-A</p>
    </div>
  </div>
  <div class="profile-subsection">
    <h3>会议论文</h3>
    <div class="profile-paper">
      <span class="profile-paper__tag">CP 2024 · 最佳论文</span>
      <p class="profile-paper__title"><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.CP.2024.19">An Efficient Local Search Solver for Mixed Integer Programming</a></p>
      <p class="profile-paper__authors"><strong>林鹏</strong>，邹蒙川，蔡少伟</p>
      <p class="profile-paper__venue">约束规划原理与实践国际会议，2024，CCF-B</p>
    </div>
    <div class="profile-paper">
      <span class="profile-paper__tag">CP 2025</span>
      <p class="profile-paper__title"><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.CP.2025.26">Parallel MIP Solving with Dynamic Task Decomposition</a></p>
      <p class="profile-paper__authors"><strong>林鹏</strong>，蔡少伟，邹蒙川，陈晟祺</p>
      <p class="profile-paper__venue">约束规划原理与实践国际会议，2025，CCF-B</p>
    </div>
    <div class="profile-paper">
      <span class="profile-paper__tag">IJCAI 2024</span>
      <p class="profile-paper__title"><a href="https://www.ijcai.org/proceedings/2024/768">ParaILP: A Parallel Local Search Framework for Integer Linear Programming with Cooperative Evolution Mechanism</a></p>
      <p class="profile-paper__authors"><strong>林鹏</strong>，邹蒙川，陈志翰，蔡少伟</p>
      <p class="profile-paper__venue">国际人工智能联合会议，2024，CCF-A</p>
    </div>
    <div class="profile-paper">
      <span class="profile-paper__tag">CP 2024</span>
      <p class="profile-paper__title"><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.CP.2024.5">ParLS-PBO: A Parallel Local Search Solver for Pseudo Boolean Optimization</a></p>
      <p class="profile-paper__authors">陈志翰，<strong>林鹏</strong>，胡皓，蔡少伟</p>
      <p class="profile-paper__venue">约束规划原理与实践国际会议，2024，CCF-B</p>
    </div>
  </div>
</div>

<div class="profile-section" id="honors">
  <h2>🌟 荣誉奖励</h2>
  <ul class="profile-awards">
    <li><span>2024</span> <a href="https://onestop.ucas.edu.cn/home/infob/aa5feb29-1624-4e59-acc5-0d7e856318b4/2">研究生国家奖学金</a></li>
    <li><span>2024</span> <a href="https://www.a4cp.org/awards/paper-awards">CP 2024 最佳论文奖</a></li>
    <li><span>2023</span> <a href="https://mp.weixin.qq.com/s/sh7FFoBKN4W7m9WFllWXVg">吉林大学优秀毕业论文（软件学院第一名）</a></li>
  </ul>
</div>

<div class="profile-section" id="competitions">
  <h2>🏆 竞赛成绩</h2>
  <ul class="profile-competitions">
    <li>
      <span class="profile-competitions__year">2025</span>
      <div class="profile-competitions__body">
        <strong><a href="https://www.cril.univ-artois.fr/PB25/results/ranking.php?idev=115&cpuLimit=3605&altSel=1">2025 Pseudo-Boolean 国际竞赛</a></strong>
        <p>DEC-LIN UNSAT 冠军 · DEC-LIN SAT+UNSAT 季军 · OPT-LIN UNSAT 季军</p>
      </div>
    </li>
    <li>
      <span class="profile-competitions__year">2024</span>
      <div class="profile-competitions__body">
        <strong><a href="http://www.is.cas.cn/xwdt2016/kyjz2016/202501/t20250101_7512775.html">工信部电力国产求解器技术专题赛</a></strong>
        <p>二等奖（排名第二）</p>
      </div>
    </li>
  </ul>
</div>

<div class="profile-section" id="education">
  <h2>🎓 教育经历</h2>
  <ul class="profile-edu">
    <li>
      <strong>中国科学院大学 · 软件研究所 · 计算机科学与技术</strong>
      <span>硕博连读（2023.09 – 至今），导师 <a href="http://lcs.ios.ac.cn/~caisw/">蔡少伟研究员</a></span>
    </li>
    <li>
      <strong>吉林大学 · 软件工程 · 卓越工程师班</strong>
      <span>本科（2019.09 – 2023.06），导师 <a href="https://ccst.jlu.edu.cn/info/1367/19046.htm">欧阳丹彤教授</a>、<a href="https://ccst.jlu.edu.cn/info/1197/17231.htm">张鹏教授</a></span>
    </li>
  </ul>
</div>

<div class="profile-section" id="talks">
  <h2>💬 学术报告</h2>
  <div class="profile-cards">
    <article class="profile-mini-card">
      <h3>2025 · 英国格拉斯哥</h3>
      <p class="profile-mini-card__title"><strong>Parallel MIP Solving with Dynamic Task Decomposition</strong></p>
      <p class="profile-mini-card__links">🎞️ <a href="files/PartiMIP-slides.pdf">幻灯片</a></p>
    </article>
    <article class="profile-mini-card">
      <h3>2024 · 西班牙赫罗纳</h3>
      <p class="profile-mini-card__title"><strong>An Efficient Local Search Solver for Mixed Integer Programming</strong></p>
      <p class="profile-mini-card__links">🎞️ <a href="https://cp2024.a4cp.org/slides/CP/AnEfficientLocal.pdf">幻灯片</a> · 📽️ <a href="https://diobma.udg.edu/handle/10256.1/7765">视频</a></p>
    </article>
    <article class="profile-mini-card">
      <h3>2024 · 西班牙赫罗纳</h3>
      <p class="profile-mini-card__title"><strong>ParLS-PBO: A Parallel Local Search Solver for Pseudo Boolean Optimization</strong></p>
      <p class="profile-mini-card__links">🎞️ <a href="https://cp2024.a4cp.org/slides/CP/ParLS-PBO.pdf">幻灯片</a></p>
    </article>
    <article class="profile-mini-card">
      <h3>2024 · 韩国济州</h3>
      <p class="profile-mini-card__title"><strong>ParaILP: A Parallel Local Search Framework for Integer Linear Programming</strong></p>
      <p class="profile-mini-card__links">🎞️ <a href="files/ijcai-slides.pdf">幻灯片</a></p>
    </article>
  </div>
</div>

<div class="profile-section" id="software">
  <h2>💾 开源项目</h2>
  <div class="profile-cards profile-cards--wide">
    <article class="profile-mini-card">
      <h3>Local-MIP</h3>
      <p>面向混合整数规划的高效局部搜索求解器，相关成果荣获 CP 2024 最佳论文奖。</p>
      <p class="profile-mini-card__links">🔗 <a href="https://github.com/shaowei-cai-group/Local-MIP">GitHub</a></p>
    </article>
    <article class="profile-mini-card">
      <h3>ParaILP</h3>
      <p>融合局部搜索与协同演化机制的并行整数规划求解框架，成果发表于 IJCAI 2024。</p>
      <p class="profile-mini-card__links">🔗 <a href="https://github.com/shaowei-cai-group/ParaILP">GitHub</a></p>
    </article>
  </div>
</div>

<div class="profile-section" id="benchmarks">
  <h2>🖊️ MIPLIB 刷新记录</h2>
  <ol class="profile-benchmark--preview">
    <li><a href="https://miplib.zib.de/instance_details_shiftreg5-1.html"><code>shiftreg5-1</code></a> — 求解至最优</li>
    <li><a href="https://miplib.zib.de/instance_details_neos-5151569-mologa.html"><code>neos-5151569-mologa</code></a></li>
    <li><a href="https://miplib.zib.de/instance_details_bmocbd3.html"><code>bmocbd3</code></a></li>
    <li><a href="https://miplib.zib.de/instance_details_gmut-76-40.html"><code>gmut-76-40</code></a></li>
    <li><a href="https://miplib.zib.de/instance_details_supportcase23.html"><code>supportcase23</code></a></li>
    <li>👇👇</li>
  </ol>
  <details class="profile-details">
    <summary><strong>查看完整刷新记录（32）</strong></summary>
    <ol class="profile-benchmark">
      <li><a href="https://miplib.zib.de/instance_details_shiftreg5-1.html"><code>shiftreg5-1</code></a> — 求解至最优</li>
      <li><a href="https://miplib.zib.de/instance_details_neos-5151569-mologa.html"><code>neos-5151569-mologa</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_bmocbd3.html"><code>bmocbd3</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_gmut-76-40.html"><code>gmut-76-40</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_supportcase23.html"><code>supportcase23</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_cmflsp40-36-2-10.html"><code>cmflsp40-36-2-10</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_dfn-bwin-DBE.html"><code>dfn-bwin-dbe</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_eva1aprime6x6opt.html"><code>eva1aprime6x6opt</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_gsvm2rl11.html"><code>gsvm2rl11</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_gsvm2rl9.html"><code>gsvm2rl9</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_dlr1.html"><code>dlr1</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_neos-4232544-orira.html"><code>neos-4232544-orira</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_dws012-02.html"><code>dws012-02</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_neos-5045105-creuse.html"><code>neos-5045105-creuse</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_neos-4230265-orari.html"><code>neos-4230265-orari</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_neos-4292145-piako.html"><code>neos-4292145-piako</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_polygonpack4-7.html"><code>polygonpack4-7</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_polygonpack5-15.html"><code>polygonpack5-15</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_sct5.html"><code>sct5</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_adult-regularized.html"><code>adult-regularized</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_s82.html"><code>s82</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_genus-sym-g31-8.html"><code>genus-sym-g31-8</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_genus-sym-g62-2.html"><code>genus-sym-g62-2</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_genus-g61-25.html"><code>genus-g61-25</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_neos-4232544-orira.html"><code>neos-4232544-orira</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_bley_xs1.html"><code>bley_xs1</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_sorrell7.html"><code>sorrell7</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_supportcase22.html"><code>supportcase22</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_cdc7-4-3-2.html"><code>cdc7-4-3-2</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_ns1828997.html"><code>ns1828997</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_scpm1.html"><code>scpm1</code></a></li>
      <li><a href="https://miplib.zib.de/instance_details_scpn2.html"><code>scpn2</code></a></li>
    </ol>
  </details>
</div>
