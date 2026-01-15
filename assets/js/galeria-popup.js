// galeria-popup.js
document.addEventListener('DOMContentLoaded', function () {
  const imagens = document.querySelectorAll('.galeria-popup');

  imagens.forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.classList.add('popup-overlay');

      const imgPopup = document.createElement('img');
      imgPopup.src = img.src;
      imgPopup.classList.add('popup-img');

      const closeBtn = document.createElement('div');
      closeBtn.innerHTML = '&times;';
      closeBtn.classList.add('popup-close');

      closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });

      overlay.appendChild(imgPopup);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);
    });
  });
});