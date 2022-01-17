'use strict';

let elMainBtn = document.querySelector('.show-modal');
let elModal = document.querySelector('.modal');
let elModalBackground = document.querySelector('.overlay');
let elCloseBtn = document.querySelector('.close-modal');
let elModalWrapper = document.querySelector(".overlay")

elMainBtn.addEventListener('click', function () {

  elModal.style.display = 'inline';
  elModalBackground.style.display = 'inline';
});

elCloseBtn.addEventListener('click', function () {

  elModal.style.display = 'none';
  elModalBackground.style.display = 'none';
});

document.addEventListener('keydown', function (evt) {

  if (evt.key === 'Escape') {
    elModal.style.display = 'none';
    elModalBackground.style.display = 'none';
  }
});

elModalWrapper.addEventListener('click', function () {

  elModal.style.display = 'none';
  elModalBackground.style.display = 'none';
});
