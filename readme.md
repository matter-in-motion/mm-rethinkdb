# Matter In Motion. Rethinkdb extension

[![NPM Version](https://img.shields.io/npm/v/mm-rethinkdb.svg?style=flat-square)](https://www.npmjs.com/package/mm-rethinkdb)
[![NPM Downloads](https://img.shields.io/npm/dt/mm-rethinkdb.svg?style=flat-square)](https://www.npmjs.com/package/mm-rethinkdb)

[Rethinkdb](https://www.rethinkdb.com) extension for [matter in motion](https://github.com/matter-in-motion/mm) framework

Using [rethinkdbdash](https://github.com/neumino/rethinkdbdash) driver with a connection pool, support for streams etc.

## Usage

[Extensions installation instructions](https://github.com/matter-in-motion/mm/blob/master/docs/extensions.md)

Adds rethinkdbdash connection pool as `db.rethinkdb` unit.

## Settings

Add `rethinkdb` section to your settings. [Available settings](https://github.com/neumino/rethinkdbdash#new-features-and-differences)

## Commands

This extension also adds two commads:

* **`rethinkdb create`** — creates default database
* **`rethinkdb drop`** — — drops default database

License: MIT.
