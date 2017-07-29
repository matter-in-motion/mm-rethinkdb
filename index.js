'use strict';
const Rethinkdb = require('./rethinkdb');

module.exports = () => ({
  db: { rethinkdb: new Rethinkdb() }
});
