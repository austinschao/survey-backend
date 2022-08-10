"use strict";

/*
Survey of the site.
*/

import db from "../db";

class Survey {

  /*
  Submit a survey. Returns
  {first_name, last_name, experience, frontend, backend, coding_language}
  */
  static async submit({ first_name, last_name, experience, education, frontend, backend, coding_language }) {
    const result = await db.query(
      `INSERT INTO survey (first_name, last_name, experience, education, frontend, backend, coding_language)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING first_name, last_name, experience, education, frontend, backend, coding_language`,
      [first_name, last_name, experience, education, frontend, backend, coding_language]
    );

    return result.rows[0];
  }
}

module.exports = Survey;