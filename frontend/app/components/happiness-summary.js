import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  attributeBindings: ['style'],
  style: Ember.computed(function() {
    let h = 30 * (this.get('summary.happiness')-1),
        s = 50,
        l = 53;
    return `background-color: hsl(${h}, ${s}%, ${l}%);`;
  })
});
