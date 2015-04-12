import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';
import domElements from 'frontend/tests/helpers/dom-elements';

let application;

module('Acceptance: Login', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('with invalid email and password', function(assert) {
  server.post('/users/sign_in', {"token": "token", "email": "valid@email.com"}, 757);
  visit('/login')
    .then( ()=> {
      assert.equal(currentURL(), '/login');
      fillIn(domElements.identificationField, 'valid@login.com');
      fillIn(domElements.passwordField, 'invalid');
      click(domElements.loginButton)
        .then( ()=> {
          assert.ok(!currentSession().isAuthenticated, 'user is not signed in');
          assert.equal(Ember.$(domElements.signOutButton).length, 0, 'no sign out button present');
          assert.equal(currentURL(), '/login', 'remains on login page');
        });
    });
});

test('with valid email and password', function(assert) {
  visit('/login')
    .then( ()=> {
      assert.equal(currentURL(), '/login');
      fillIn(domElements.identificationField, 'valid@login.com');
      fillIn(domElements.passwordField, 'password');
      click(domElements.loginButton)
        .then( ()=> {
          assert.ok(currentSession().isAuthenticated, 'user is signed in');
          assert.equal(Ember.$(domElements.signOutButton).length, 1, 'sign out button present');
          assert.equal(currentURL(), '/', 'redirects to root');
        });
    });
});
