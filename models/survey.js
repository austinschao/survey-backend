"use strict";

/*
Survey of the site.
*/

const db = require("../db");

class Survey {

  /*
  Submit a survey. Returns
  {first_name, last_name, experience, frontend, backend, coding_language}
  */
  static async submit({ firstName, lastName, experience, education, frontend, backend, language }) {
    const result = await db.query(
      `INSERT INTO survey
        (first_name,
          last_name,
          experience,
          education,
          frontend,
          backend,
          language)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING first_name AS "firstName",
        last_name AS "lastName", experience, education,
        frontend, backend, language`,
      [firstName, lastName, experience, education, frontend, backend, language]
    );
    return result.rows[0];
  }
}

module.exports = Survey;