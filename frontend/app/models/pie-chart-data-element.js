import Ember from 'ember';

const { computed } = Ember;

export default Ember.Object.extend({
  label: undefined,
  value: null,
  color: computed('hue', function() {
    return `hsl(${this.get('hue')}, 26%, 53%)`;
  }),
  highlight: computed('hue', function() {
    return `hsl(${this.get('hue')}, 50%, 50%)`;
  }),
  hue: computed('label', function() {
    return 30 * (this.get('label') - 1);
  })
});


