"use strict";

/*
Common config for survey.
*/

require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql:///survey_test"
  : "postgresql:///survey";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

module.exports = {
  DB_URI,
  SECRET_KEY
};