// ===== 导航栏移动端开关 =====
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
});

// 点击导航链接后收起菜单
mainNav.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== 滚动高亮当前导航 =====
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  let current = 'home';
  const offset = 120;
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - offset) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ===== 深色模式 =====
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('blog-theme', theme);
}

const savedTheme = localStorage.getItem('blog-theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

themeToggle.addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
});

// ===== 项目筛选 =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

// ===== 进度条动画 =====
function animateProgress(fill) {
  const target = Number(fill.dataset.progress) || 0;
  fill.style.width = target + '%';
}

// ===== 滚动显现 =====
const revealEls = document.querySelectorAll('.reveal');
const progressFills = document.querySelectorAll('.progress-fill');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('progress-fill')) {
        animateProgress(entry.target);
      }
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealEls.forEach((el) => observer.observe(el));
progressFills.forEach((el) => observer.observe(el));

// ===== 页脚年份 =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== 滚动监听 =====
window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();
