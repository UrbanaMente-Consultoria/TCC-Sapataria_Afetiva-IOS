// Hamburguer menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Função para abrir/fechar menu (mobile)
function toggleMenu() {
  nav.classList.toggle('active');
}

// Fecha o menu ao clicar em um link (mobile)
function closeMenu() {
  nav.classList.remove('active');
}

// Evento no botão hamburguer
if (menuToggle) {
  menuToggle.addEventListener('click', toggleMenu);
}

// Fecha o menu ao clicar em qualquer link de navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Fecha o menu ao clicar fora dele (opcional, para UX melhor)
document.addEventListener('click', function(event) {
  if (window.innerWidth <= 768) {
    if (
      !nav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      nav.classList.remove('active');
    }
  }
});

// Alternar tema (claro/escuro)
const toggleThemeBtn = document.querySelector('.toggle-theme');
toggleThemeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

    const form = document.getElementById("formFeedback");
    const msg = document.getElementById("mensagemFeedback");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      msg.style.display = "block";
      form.reset(); // limpa o formulário
    });
    