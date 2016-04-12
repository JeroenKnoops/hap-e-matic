import Ember from 'ember';
import PieChartDataElement from '../models/pie-chart-data-element';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['happiness-pie-container'],
  chartData: computed('measurements.[]', function() {
    let result = [];

    this.get('measurements').forEach(function(measurement) {
      let key = 'score',
          value = measurement.get('happiness'),
          hasGroup = !!result.findBy(key, value);

      if (!hasGroup) {
        result.pushObject(PieChartDataElement.create({
          score: value
        }));
      }

      result.findBy(key, value).incrementProperty('value');
    });

    return result.sortBy('score').map(function(item) {
      return item.getProperties('value', 'color', 'highlight', 'label');
    });
  }),
  weekNo: computed('measurements', function() {
    return this.get('measurements.firstObject.weekNo');
  }),
  year: computed('measurements', function() {
    return this.get('measurements.firstObject.year');
  }),
  count: computed('measurements', function() {
    return this.get('measurements').length;
  }),
  scores: computed.mapBy('measurements', 'happiness'),
  total: computed.sum('scores'),
  happiness: computed('measurements', function() {
    return Math.round(this.get('total')/this.get('count') * 10)/10;
  }),
  chartOptions: {
    segmentShowStroke: false
  }
});
