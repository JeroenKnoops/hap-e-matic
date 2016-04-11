import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('measurements');
  this.route('overview', { path: '/happiness' });
  this.route('happiness', { path: '/happiness/:weekYear'});
});

export default Router;
