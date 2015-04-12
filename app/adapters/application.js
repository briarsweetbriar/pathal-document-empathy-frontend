import DS from 'ember-data';

const ActiveModelAdapter = DS.ActiveModelAdapter;

export default ActiveModelAdapter.extend({
  namespace: 'api'
});
