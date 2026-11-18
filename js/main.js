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

  // ── Review form (only runs if the form is on the page) ──
  const form = document.getElementById('review-form');
  const success = document.getElementById('review-success');

  if (form && success) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          form.style.display = 'none';
          success.style.display = 'block';
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch (err) {
        alert('Could not send your review. Check your connection and try again.');
      }
    });
  }

});

// ── FAQ accordion ──────────────────────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});