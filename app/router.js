import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('login');
  this.resource('pages', function() {
    this.route('new');
  });
  this.resource('page', {
    path: 'pages/:pageId'
  }, function() {
    this.route('edit');
  });
});
