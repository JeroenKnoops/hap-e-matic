import Ember from 'ember';
import PieChartDataElement from '../models/pie-chart-data-element';

export default Ember.Component.extend({
  chartData: Ember.computed('measurements.[]', function() {
    let result = [];

    this.get('measurements').forEach(function(measurement) {
      let key = 'label',
          value = measurement.get('happiness'),
          hasGroup = !!result.findBy(key, value);

      if (!hasGroup) {
        result.pushObject(PieChartDataElement.create({
          label: value
        }));
      }

      result.findBy(key, value).incrementProperty('value');
    });

    return result.sortBy('label').map(function(item) {
      return item.getProperties('value', 'color', 'highlight', 'label');
    });
  }),
  chartOptions: {
    segmentShowStroke: false
  }
});
