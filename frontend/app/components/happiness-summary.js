import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['happiness-summary'],
  attributeBindings: ['style'],
  style: Ember.computed(function() {
    return [this.get('backgroundColor'),
            this.get('fontSize'),
            this.get('dimensions')].join(';');
  }),
  backgroundColor: computed(function() {
    let h = 30 * (this.get('summary.happiness')-1),
        s = 50,
        l = 53;
    return `background-color: hsl(${h}, ${s}%, ${l}%)`;
  }),
  fontSize: computed(function() {
    let length = Math.pow(this.get('summary.count'), 1.5) + 10;
    //let length = 20;
    return `font-size: ${length}px`;
  }),
  dimensions: computed(function() {
    let length = Math.pow(this.get('summary.count'), 2) + 30;

    return `width: ${length}px; height: ${length}px`;
  })
});
