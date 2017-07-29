'use strict';
const rdb = require('rethinkdbdash');

const Rethinkdb = function() {
  this.r = undefined;
}

Rethinkdb.prototype.__initRequired = true;

Rethinkdb.prototype.__init = function(units) {
  const settings = units.require('core.settings').rethinkdb;
  this.r = rdb(settings);
};

Rethinkdb.prototype.__instance = function() {
  return this.r;
};

module.exports = Rethinkdb;
