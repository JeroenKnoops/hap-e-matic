import DS from 'ember-data';
import ENV from 'hap-e-matic/config/environment';

export default DS.RESTAdapter.extend({
  findAll() {
    const sheet = ENV.SHEET;
    const url   = `https://spreadsheets.google.com/feeds/list/${sheet}/od6/public/basic?alt=json`;

    return this.ajax(url, 'GET');
  }
});
