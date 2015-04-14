import Ember from 'ember';

const Route = Ember.Route;

export default Route.extend({
  model() {
    return this.modelFor('page');
  },

  deactivate() {
    this.get('controller.model').rollback();
  }
});
