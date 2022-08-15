"use strict";
const express = require("express");
const { BadRequestError } = require("../expressError");
const Survey = require("../models/survey");
const jsonschema = require("jsonschema");
const router = express.Router();
const surveySchema = require("../schemas/surveyNew.json");

/** POST / - Submit a survey.
 *
 * {first_name, last_name, experience, frontend, backend}
 */
router.post("/", async function (req, res) {
  debugger;
  const validator = jsonschema.validate(req.body, surveySchema);
  if (!validator.valid) {
    const errs = validator.errors.map((e) => e.stack);
    throw new BadRequestError(errs);
  }

  const survey = await Survey.submit(req.body);

  return res.status(201).json({ survey });
});

module.exports = router;