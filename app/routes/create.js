import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveEntry(params) {
      var newEntry = this.store.createRecord('entry', params);
      newEntry.save();
      this.transitionTo('index');
    },
  }
});
