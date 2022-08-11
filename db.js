"use strict";

/*
Database connection for survey.
*/

const { Client } = require("pg");

const { DB_URI } = require("./config");
console.log(DB_URI);
const db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;