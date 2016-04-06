import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['happiness-summary animated rubberBand'],
  classNameBindings: ['backgroundColor', 'dimensions'],
  backgroundColor: computed(function() {
    return `happiness-${Math.round(this.get('summary.happiness'))}`;
  }),
  dimensions: computed(function() {
    return `dimensions-${Math.round(this.get('summary.count')/4)+1}`;
  })
});
