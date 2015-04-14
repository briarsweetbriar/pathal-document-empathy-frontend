import Ember from 'ember';

const Mixin = Ember.Mixin;

export default Mixin.create({
  actions: {
    submit() {
      this.model.save().then( (page) => {
        const id = page.get('id');
        this.transitionToRoute('page', id);
      });
    }
  }
});
