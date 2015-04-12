import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      this.model.save().then( (page) => {
        const slug = page.get('slug');
        this.transitionToRoute('pages.show', slug);
      });
    }
  }
});
