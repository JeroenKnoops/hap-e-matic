import Ember from 'ember';

const { computed, Object } = Ember;

export default Object.extend({
  score: undefined,
  value: undefined,
  label: computed('score', function() {
    return this.get('happinesses')[this.get('score')];
  }),
  color: computed('hue', function() {
    return `hsl(${this.get('hue')}, 26%, 53%)`;
  }),
  highlight: computed('hue', function() {
    return `hsl(${this.get('hue')}, 46%, 53%)`;
  }),
  hue: computed('score', function() {
    return 30 * (this.get('score') - 1);
  }),
  happinesses: {
    '1': 'Very unhappy',
    '2': 'Slightly depressed',
    '3': 'Satisfactory',
    '4': 'Convenient',
    '5': 'Very happy'
  }
});


