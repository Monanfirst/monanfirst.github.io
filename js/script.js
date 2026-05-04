// 深色模式切换
(function () {
  const toggleBtn = document.getElementById('darkToggle');
  const html = document.documentElement;

  // 读取 localStorage 中的主题设置
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = '☀ 浅色';
  } else {
    if (toggleBtn) toggleBtn.textContent = '☾ 深色';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const isDark = html.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      this.textContent = isDark ? '☀ 浅色' : '☾ 深色';
    });
  }
})();

// 本站已勉强运行天数
(function () {
  const el = document.getElementById('siteDays');
  if (!el) return;

  const startDate = new Date('2026-05-03');
  const now = new Date();
  const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  el.textContent = '本站已勉强运行 ' + diff + ' 天';
})();
