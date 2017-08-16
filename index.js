'use strict';
const Rethinkdb = require('./rethinkdb');
const commands = require('./commands');

module.exports = () => ({
  db: { rethinkdb: new Rethinkdb() },
  commands: { rethinkdb: commands }
});
