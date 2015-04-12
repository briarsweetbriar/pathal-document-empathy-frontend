import DS from 'ember-data';

const Model = DS.Model;

export default Model.extend({
  file: DS.belongsTo('file'),
  next: DS.belongsTo('page', {
    async: true,
    inverse: null
  }),
  previous: DS.belongsTo('page', {
    async: true,
    inverse: null
  }),

  caption: DS.attr('string'),
  slug: DS.attr('string'),
  title: DS.attr('string')
});
