function setTheme(theme) {
  const html = document.documentElement;

  // Salva a preferência no localStorage
  localStorage.setItem('theme', theme);

  // Define o tema real do Bootstrap
  if (theme === 'system') {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    html.setAttribute('data-bs-theme', systemTheme);
  } else {
    html.setAttribute('data-bs-theme', theme);
  }

  // Atualiza destaque visual do ícone
  updateActiveIcon(theme);
}

function updateActiveIcon(theme) {
  document.querySelectorAll('.theme-icon').forEach(icon => {
    icon.classList.remove('icon-active');
  });

  const icon = document.querySelector(`#${theme} .theme-icon`);
  if (icon) icon.classList.add('icon-active');
}

// Carrega a preferência salva ou usa 'system'
const savedTheme = localStorage.getItem('theme') || 'system';
setTheme(savedTheme);
updateActiveIcon(savedTheme);
