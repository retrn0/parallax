const parallax = document.getElementById('parallax');

window.addEventListener('scroll', e => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.6 + 'px';
});
