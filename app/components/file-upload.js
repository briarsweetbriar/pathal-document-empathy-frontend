import Ember from 'ember';
import EmberUploader from 'ember-uploader';

const observer = Ember.observer;

export default EmberUploader.FileField.extend({
  store: Ember.inject.service(),
  url: '/api/files',

  filesDidChange: observer('files', function() {
    const store = this.get('store')
    const uploadUrl = this.get('url');
    const files = this.get('files');
    const uploadable = this.get('uploadable');

    const uploader = EmberUploader.Uploader.create({
      url: uploadUrl,
      paramNamespace: 'file'
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]).then( (response) => {
        const file = store.createRecord('file', response.file);
        uploadable.set('file', file);
      });
    }
  })
});