import Ember from 'ember';

const { computed } = Ember;

export default Ember.Object.extend({
  weekNo: undefined,
  content: [],
  count: computed('content.[]', function() {
    return this.get('content').length;
  }),
  scores: computed.mapBy('content', 'happiness'),
  total: computed.sum('scores'),
  happiness: computed('content.[]', function() {
    return Math.round(this.get('total')/this.get('count') * 10)/10;
  })
});

