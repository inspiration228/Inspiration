const assert = require('assert');
const app = require('../../src/app');

describe('\'Speech-Text\' service', () => {
  it('registered the service', () => {
    const service = app.service('speech-text');

    assert.ok(service, 'Registered the service');
  });
});
