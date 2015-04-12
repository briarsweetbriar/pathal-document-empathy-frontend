import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';
import domElements from 'frontend/tests/helpers/dom-elements';

let application;

module('Acceptance: PagesNew', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /pages/new', function(assert) {
  visit('/pages/new')
    .then( () => {
      let pageTitle = Ember.$(domElements.pageTitle).text();
      assert.equal(pageTitle, 'New Page', 'shows new page title');
      fillIn(domElements.titleField, 'New Title');
      fillIn(domElements.captionField, 'new caption');
      click(domElements.submitButton)
        .then( () => {
          const url = currentURL();
          assert.equal(url, '/pages/new-title', 'redirects to new page after submit');
        });
    });
});
