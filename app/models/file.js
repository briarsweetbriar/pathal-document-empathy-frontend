import DS from 'ember-data';

const Model = DS.Model;

export default Model.extend({
  page: DS.belongsTo('page'),

  path: DS.attr('string')
});
