"use strict";

/*
Survey of the site.
*/

const db = require("../db");

class Survey {

  /*
  Submit a survey. Returns
  {first_name, last_name, experience, frontend, backend}
  */
  static async submit({ firstName, lastName, experience, education, frontend, backend }) {
    const result = await db.query(
      `INSERT INTO survey
        (first_name,
          last_name,
          experience,
          education,
          frontend,
          backend)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING first_name AS "firstName",
        last_name AS "lastName", experience, education,
        frontend, backend`,
      [firstName, lastName, experience, education, frontend, backend]
    );
    return result.rows[0];
  }
}

module.exports = Survey;