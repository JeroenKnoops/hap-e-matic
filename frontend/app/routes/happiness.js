import Ember from 'ember';
import Summary from '../models/summary';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('measurement').then(function(data) {
      let weekYear = params.weekYear;
      let measurements = data.filterBy('weekYear', weekYear);
      let summary = Summary.create({
        group: weekYear,
        content: measurements
      });
      return summary;
    });
    }
});
