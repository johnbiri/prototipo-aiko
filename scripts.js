if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrado!'))
    .catch(err => console.error('Erro ao registrar o Service Worker:', err));
}

/* pega o ano atual */
document.getElementById("current-year").textContent = new Date().getFullYear();

/* mostra e esconde video */
function toggleVideo() {
  const video = document.getElementById('video-container');
  const btn = document.getElementById('toggle-btn');

  if (video.style.display === 'none') {
    video.style.display = 'block';
    btn.textContent = 'Ocultar';
  } else {
    video.style.display = 'none';
    btn.textContent = 'Mostrar';
  }
}

// funcionamento das playlists
const links = document.querySelectorAll('.playlist-link');

links.forEach(link => {
		link.addEventListener('click', function(e) {
				e.preventDefault();

				// Pega o ID da playlist que foi clicada
				const PLd9ykfMeym3iO_96D12Rdx_qS7il5xqGF = this.getAttribute('data-playlist-id');

				// Pega o iframe e altera a URL
				const iframe = document.getElementById('playlist-iframe');
				iframe.src = `https://www.youtube.com/embed?list=${PLd9ykfMeym3iO_96D12Rdx_qS7il5xqGF}`;
		});
});