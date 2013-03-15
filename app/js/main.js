requirejs.config({
  baseUrl: 'js',

  paths: {
    text: 'lib/text'
  },

  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ['lib/underscore'],
      exports: 'Backbone'
    },
    'app': {
      deps: ['lib/underscore', 'lib/backbone']
    }
  }
});

require(['app'], function(App) {
  window.bTask = new App();
});

