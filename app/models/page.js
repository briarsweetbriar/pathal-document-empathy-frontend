import DS from 'ember-data';
import Ember from 'ember';

const Model = DS.Model;
const computed = Ember.computed;

export default Model.extend({
  file: DS.belongsTo('file', {
    async: true
  }),
  next: DS.belongsTo('page', {
    async: true,
    inverse: null
  }),
  previous: DS.belongsTo('page', {
    async: true,
    inverse: null
  }),

  caption: DS.attr('string'),
  title: DS.attr('string'),

  filePath: computed('file.path', function() {
    return this.get('file.path');
  })
});
