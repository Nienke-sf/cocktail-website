document.addEventListener('DOMContentLoaded', () => {

  // ── Burger menu ──────────────────────────────
  const burger = document.querySelector('.navbar-burger');
  if (burger) {
    const menu = document.getElementById(burger.dataset.target);
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }

  // ── Lightbox (only runs if GLightbox is on the page) ──
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

});