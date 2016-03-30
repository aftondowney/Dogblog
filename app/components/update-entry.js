import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
actions: {
  updateEntryForm() {
    this.set('updateEntryForm', true);
  },
  update(entry) {
    var params = {
      title: this.get('title'),
      content: this.get('content'),
      author: this.get('author'),
      image: this.get('image'),
      date: this.get('date'),
      blurb: this.get('blurb'),
    };
    this.set('updateEntryForm', false);
    this.sendAction('update', entry, params);
  }
}
});
