(function () {
  var root = document.documentElement;
  var themeButtons = document.querySelectorAll('[data-theme-choice]');
  var nav = document.querySelector('.nav');
  var menuToggle = document.querySelector('.menu-toggle');
  var lightbox = document.querySelector('.lightbox');
  var lightboxImage = lightbox ? lightbox.querySelector('img') : null;
  var lightboxCaption = lightbox ? lightbox.querySelector('figcaption') : null;
  var lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  var lastFocusedElement = null;

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('focusflow-theme', theme);
    themeButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
    });
  }

  function currentTheme() {
    return root.dataset.theme || 'light';
  }

  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      setTheme(button.dataset.themeChoice);
    });
  });

  setTheme(currentTheme());

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-lightbox-src]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (!lightbox || !lightboxImage || !lightboxCaption) return;
      lastFocusedElement = button;
      lightboxImage.src = button.dataset.lightboxSrc;
      lightboxImage.alt = button.dataset.lightboxAlt || '';
      lightboxCaption.textContent = button.dataset.lightboxTitle || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    });
  });

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.hidden = true;
    lightboxImage.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });
})();
