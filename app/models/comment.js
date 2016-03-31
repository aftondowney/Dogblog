import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  date: DS.attr(),
  user: DS.attr(),
  entry: DS.belongsTo('entry', {async: true})
});
