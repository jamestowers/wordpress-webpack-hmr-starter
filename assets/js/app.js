window.app = {
  els: {
    'hamburger': document.getElementById('hamburger'),
    'body': document.querySelector('body')
  },

  init() {
    console.log('[app.js] init');
    this.hamburgersInit();
  },

  hamburgersInit() {

    app.els.hamburger[0].addEventListener('click', function() {
      this.classList.toggle('is-active');
      app.els.body.classList.toggle('nav-open');
    }, false);
  },
};

window.app.init();