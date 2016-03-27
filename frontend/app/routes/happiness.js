import Ember from 'ember';
import Summary from '../models/summary';

export default Ember.Route.extend({
  model() {
    let result = [];

    return this.store.findAll('measurement').then(function(data) {
      data.forEach(function(item) {
        let key = 'group',
            value = item.get('weekYear'),
            hasGroup = !!result.findBy(key, value);

        if (!hasGroup) {
          result.pushObject(Summary.create({
            group: value,
            content: []
          }));
        }
        result.findBy(key, value).get('content').pushObject(item);
      });
      return result;
    });
  }
});
