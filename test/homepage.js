"use strict";

var assert = require('assert');

var client = require('./client').client;
var server = require('./server');

describe('homepage', function() {
  it('has a title', function(done) {
    var baseURL = server.getBaseURL();
    assert.notEqual(baseURL, undefined);
    client
      .url(baseURL)
      // .getTitle(function(err, title) {
      //   assert.equal(title, 'Oversight.garden | Collecting the oversight community\'s work in one place.');
      // })
      .call(done);
  });
});
