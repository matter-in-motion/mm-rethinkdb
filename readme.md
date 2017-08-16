# Matter In Motion. Rethinkdb extension

[Rethinkdb](https://www.rethinkdb.com) extension for [matter in motion](https://github.com/matter-in-motion/mm) framework

Using [rethinkdbdash](https://github.com/neumino/rethinkdbdash) driver with a connection pool, support for streams etc.

## Usage

[Extensions installation intructions](https://github.com/matter-in-motion/mm/blob/master/docs/extensions.md)

Adds rethinkdbdash connection pool as `db.rethinkdb` unit.

## Settings

Add `rethinkdb` section to your settings. [Available settings](https://github.com/neumino/rethinkdbdash#new-features-and-differences)

## Commands

This extension also adds two commads:

* **`rethinkdb create`** — creates default database
* **`rethinkdb drop`** — — drops default database

License: MIT.