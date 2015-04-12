import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('page');
  },

  deactivate() {
    this.get('controller.model').rollback();
  }
});
