import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;
const { attr } = DS;

export default DS.Model.extend({
  username: attr('string'),
  happiness: attr('number'),
  createdAt: attr('date'),
  year: computed(function() {
    return new Date(this.get('createdAt')).getFullYear();
  }),
  weekNo: computed(function() {
    // http://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
    let d = new Date(this.get('createdAt'));
    d.setDate(d.getDate() + 1 - (d.getDay()||7)); // + 1 to adjust entries that arrived too late.
    return Math.ceil((((d - new Date(d.getFullYear(),0,1))/8.64e7) + 1)/7);
  })
});
