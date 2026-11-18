const themeToggle = document.querySelector('#themeToggle');

// Переключение светлой и тёмной темы сайта.
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀' : '☾';
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Включить светлую тему' : 'Включить тёмную тему'
  );
});

console.log('Портфолио загружено успешно!');
