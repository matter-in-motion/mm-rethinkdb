'use strict';

const create = function() {
  const settings = this.units.require('core.settings').require('rethinkdb');

  if (!settings.db) {
    throw new Error('No default database is defined in the rethinkdb settings');
  }

  const r = this.units.require('db.rethinkdb');
  return r.dbCreate(settings.db).run()
};

const drop = function() {
  const settings = this.units.require('core.settings').require('rethinkdb');

  if (!settings.db) {
    throw new Error('No default database is defined in the rethinkdb settings');
  }

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question('All the data will be lost. Are you sure you want to drop database? (y/n): ', answer => {
      rl.close();
      answer = answer.trim().toLowerCase();
      if (answer === 'y' || answer === 'yes') {
        const r = this.units.require('db.rethinkdb');
        return resolve(r.dbDrop(settings.db).run());
      }

      reject();
    });
  })
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

