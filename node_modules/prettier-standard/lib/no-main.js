"use strict";

/* eslint no-console:0 */
var message = "\nLooks like you're trying to require/import `prettier-standard`.\nThis module doesn't actually expose a NodeJS interface.\nThis module's just the CLI for `prettier-standard`.\n".trim();

console.info(message);

module.exports = message;