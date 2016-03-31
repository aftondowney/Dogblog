import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(entry) {
      if (confirm('Are you sure you want to delete this entry?')) {
        this.sendAction('destroyEntry', entry);
      }
    },
    findComment(comment, entry) {
      var comment_list = [];
      forEach()
      if(comment.entry.title === this.entry.title) {
        comment_list.push(comment)
      }
    }
  }
});
