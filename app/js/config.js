define([], function() {
  var config = {};
  config.apiKey = 'AIzaSyA21brCm5hCTSaameyzHwQKg7HIA7JkhZ0';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '1000849770322.apps.googleusercontent.com';

  // So underscore is not as cool as handlebars, so not 2013 but 
  // lets define how we want to interpolate in templates

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});
