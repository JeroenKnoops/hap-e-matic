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
    // https://gist.github.com/dblock/1081513
    // Create a copy of this date object
    let target  = new Date(this.get('createdAt').valueOf());
    // Entries submitted on Thursday still belong to the previous week.
    target.setDate(target.getDate() - 4);

    // ISO week date weeks start on monday, so correct the day number
    let dayNr   = (target.getDay() + 6) % 7;

    // Set the target to the thursday of this week so the
    // target date is in the right year
    target.setDate(target.getDate() - dayNr + 3);

    // ISO 8601 states that week 1 is the week with january 4th in it
    let jan4    = new Date(target.getFullYear(), 0, 4);

    // Number of days between target date and january 4th
    let dayDiff = (target - jan4) / 86400000;

    if(new Date(target.getFullYear(), 0, 1).getDay() < 5) {
      // Calculate week number: Week 1 (january 4th) plus the
      // number of weeks between target date and january 4th
      return 1 + Math.ceil(dayDiff / 7);
    }
    else {  // jan 4th is on the next week (so next week is week 1)
      return Math.ceil(dayDiff / 7);
    }
  }),
  weekYear: computed(function() {
    return `${this.get('weekNo')}${this.get('year')}`;
  })
});
