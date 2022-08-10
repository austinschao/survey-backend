"use strict";

/*
Database connection for survey.
*/

import { Client } from "pg";
import { DB_URI } from ("./config");

const db = new Client(DB_URI);

db.connect();

module.exports = db;