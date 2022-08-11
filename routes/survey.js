"use strict";
const express = require("express");
const Survey = require("../models/survey");
const router = express.Router();

/** POST / - Submit a survey.
 *
 * {first_name, last_name, experience, frontend, backend, coding_language}
 */
router.post("/", async function (req, res) {
  debugger;
  const { first_name, last_name,
    experience, education, frontend,
    backend, coding_language } = req.body;

  const survey = await Survey.submit({
    first_name,
    last_name,
    experience,
    education,
    frontend,
    backend,
    coding_language
  });

  return res.status(201).json({ survey });
});

module.exports = router;