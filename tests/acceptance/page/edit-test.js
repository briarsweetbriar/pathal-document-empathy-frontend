import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';
import domElements from 'frontend/tests/helpers/dom-elements';

let application;

module('Acceptance: PageEdit', {
  beforeEach: function() {
    application = startApp();
    const pageOne = server.create('page', {
      title: 'First Page',
      id: 'first-page',
      file_id: null
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /page/edit', function(assert) {
  visit('/pages/first-page/edit')
    .then( () => {
      let pageTitle = Ember.$(domElements.pageTitle).text();
      assert.equal(pageTitle, 'First Page', 'shows page title');
      fillIn(domElements.titleField, 'New Title');
      fillIn(domElements.captionField, 'new caption');
      click(domElements.submitButton)
        .then( () => {
          const url = currentURL();
          assert.equal(url, '/pages/first-page', 'redirects to show page after submit');
        });
    });
});
