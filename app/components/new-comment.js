import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment1() {
      var params = {
        content: this.get('content'),
        date: this.get('date'),
        user: this.get('user'),
      };
      console.log(params);
      this.set('addNewComment', false);
      this.sendAction('saveComment2', params);
    }
  }
});
