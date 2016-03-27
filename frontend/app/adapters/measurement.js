import DS from 'ember-data';
import ENV from 'hap-e-matic/config/environment';

export default DS.RESTAdapter.extend({
  findAll() {
    const url = ENV.GoogleSpreadsheetUrl;

    return this.ajax(url, 'GET');
  }
});
