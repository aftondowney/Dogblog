import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEntry() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
        image: this.get('image'),
        date: this.get('date'),
        blurb: this.get('blurb'),
      };
      this.set('addNewEntry', false);
      this.sendAction('saveEntry', params);
    }
  }
});
