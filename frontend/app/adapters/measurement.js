import DS from 'ember-data';
import ENV from 'hap-e-matic/config/environment';

export default DS.RESTAdapter.extend({
  findAll() {
    const sheetId = ENV.GoogleSpreadsheetId;
    const url = `https://spreadsheets.google.com/feeds/list/${sheetId}/od6/public/basic?alt=json`;

    return this.ajax(url, 'GET');
  }
});
