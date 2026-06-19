(function () {
  var root = document.documentElement;
  var themeButtons = document.querySelectorAll('[data-theme-choice]');
  var nav = document.querySelector('.nav');
  var menuToggle = document.querySelector('.menu-toggle');
  var galleryButtons = document.querySelectorAll('[data-shot]');
  var shotTitle = document.getElementById('shot-title');
  var shotCaption = document.getElementById('shot-caption');
  var captions = {
    Dashboard: 'A daily overview with priorities, projects, routines, and progress.',
    'Focus Mode': 'A dedicated single-task view for calm, deliberate work sessions.',
    Projects: 'Organize related work without heavy project management overhead.',
    Goals: 'Connect daily tasks to the longer-term outcomes you want to track.',
    'Theme Selection': 'Switch between light mode, dark mode, and a softer focus theme.',
    'Routine Builder': 'Create repeatable checklists for planning, shutdown, study, or deep work.'
  };

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

  galleryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var selected = button.dataset.shot;
      galleryButtons.forEach(function (tab) {
        tab.setAttribute('aria-selected', String(tab === button));
      });
      if (shotTitle) shotTitle.textContent = selected;
      if (shotCaption) shotCaption.textContent = captions[selected] || captions.Dashboard;
    });
  });
})();
