import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';
import domElements from 'frontend/tests/helpers/dom-elements';

let application;

module('Acceptance: PagesShow', {
  beforeEach: function() {
    application = startApp();
    const pageOne = server.create('page', {
      title: 'First Page',
      slug: 'first-page',
      next_id: 'second-page'
    });
    const secondPage = server.create('page', {
      title: 'Second Page',
      slug: 'second-page',
      next_id: 'third-page',
      previous_id: 'first-page'
    });
    const thirdPage = server.create('page', {
      title: 'Third Page',
      slug: 'third-page',
      previous_id: 'second-page'
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /pages/show', function(assert) {
  visit('/pages/first-page')
    .then( () => {
      let url = currentURL();
      let pageTitle = Ember.$(domElements.pageTitle).text();
      let nextPageLink = Ember.$(domElements.nextPageLink);
      let previousPageLink = Ember.$(domElements.previousPageLink);
      assert.equal(url, '/pages/first-page', 'url uses slug');
      assert.equal(pageTitle, 'First Page', 'shows title for page');
      assert.ok(nextPageLink.length > 0, 'shows link for next page when first');
      assert.ok(previousPageLink.length === 0, 'does not show link for previous page when first');

      click(nextPageLink)
        .then( () => {
          pageTitle = Ember.$(domElements.pageTitle).text();
          nextPageLink = Ember.$(domElements.nextPageLink);
          previousPageLink = Ember.$(domElements.previousPageLink);
          assert.equal(pageTitle, 'Second Page', 'shows title for page');
          assert.ok(nextPageLink.length > 0, 'shows link for next page when middle page');
          assert.ok(previousPageLink.length > 0, 'shows link for previous page when middle page');

          click(nextPageLink)
            .then( () => {
              pageTitle = Ember.$(domElements.pageTitle).text();
              nextPageLink = Ember.$(domElements.nextPageLink);
              previousPageLink = Ember.$(domElements.previousPageLink);
              assert.equal(pageTitle, 'Third Page', 'shows title for page');
              assert.ok(nextPageLink.length === 0, 'does not show link for next page when last page');
              assert.ok(previousPageLink.length > 0, 'shows link for previous page when last page');

            click(previousPageLink)
              .then( () => {
                url = currentURL();
                assert.equal(url, '/pages/second-page', 'returns to previous page when previous button clicked');
              });
            });
        });
    });
});
