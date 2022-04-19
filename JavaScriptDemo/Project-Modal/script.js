'use strict';
let modal = document.querySelector('.modal');
let openModal = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
