// Simples exemplo de alternância de tema
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
const header = document.getElementById('main-header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo
    header.classList.add('hidden');
  } else {
    // Rolando para cima
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});

   function togglePlayer() {
      const player = document.getElementById('spotify-player');
      player.style.display = player.style.display === 'none' ? 'block' : 'none';
    }