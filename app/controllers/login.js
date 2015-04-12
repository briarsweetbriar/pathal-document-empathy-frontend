import Ember from 'ember';

const Controller = Ember.Controller;

export default Controller.extend({
  actions: {
    authenticate() {
      const data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:devise', data);
    }
  }
});
