'use strict';

const create = function(cb) {
  const settings = this.units.require('core.settings').rethinkdb;

  if (!settings || !settings.db) {
    return cb(new Error('No default database is defined in the rethinkdb settings'));
  }

  const r = this.units.require('db.rethinkdb');
  r.dbCreate(settings.db).run().asCallback(cb);
};

const drop = function(cb) {
  const settings = this.units.require('core.settings').rethinkdb;

  if (!settings || !settings.db) {
    return cb(new Error('No default database is defined in the rethinkdb settings'));
  }

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('All the data will be lost. Are you sure you want to drop database? (y/n): ', (answer) => {
    rl.close();
    answer = answer.trim().toLowerCase();
    if (answer === 'y' || answer === 'yes') {
      const r = this.units.require('db.rethinkdb');
      r.dbDrop(settings.db).run().asCallback(cb);
    } else {
      cb();
    }
  });
}

module.exports = {
  __expose: true,
  create: {
    description: 'creates default database',
    call: create
  },
  drop: {
    description: 'drops default database',
    call: drop
  }
}

