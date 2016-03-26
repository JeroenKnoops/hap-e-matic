import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let documentHash = {
      data: null
    };

    let ret = payload.feed.entry.map(item => this.normalize(primaryModelClass, item));

    documentHash.data = ret;

    return documentHash;
  },
  normalize(modelClass, resourceHash) {
    let data = {
      id:         this.extractId(modelClass, resourceHash),
      type:       modelClass.modelName,
      attributes: this.extractAttributes(modelClass, resourceHash)
    };

    return data;
  },
  extractId(modelClass, resourceHash) {
    let t = resourceHash['id']['$t'];
    let id = t.split('/').pop();

    return id;
  },
  extractAttributes(modelClass, resourceHash) {
    let t = resourceHash['content']['$t'];
    let attributes = {};

    attributes.username = t;

    return attributes;
  }
});
