
  window.App = (function() {

    function App() {
      this.bindEvents();
      this.setup();
    }

    App.prototype.setup = function() {
      return $('nav a[href="#employers"]').trigger('click');
    };

    App.prototype.bindEvents = function() {
      return $('nav a').click(this.showTab);
    };

    App.prototype.showTab = function(event) {
      var link, target;
      link = $(event.currentTarget);
      console.log('hello');
      link.siblings('.active').removeClass('active');
      link.addClass('active');
      target = $(link.attr('href'));
      target.siblings('article').hide();
      target.show();
      return false;
    };

    return App;

  })();

  $(function() {
    return window.app = new App();
  });
