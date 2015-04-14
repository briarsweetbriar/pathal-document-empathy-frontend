import Ember from 'ember';

const Route = Ember.Route;

export default Route.extend({
  model(params) {
    return this.store.find('page', params.pageId);
  }
});
