"use strict";

import { Router } from "express";
const router = new Router();
import { submit } from "../models/survey";

/** POST / - Submit a survey.
 *
 * {first_name, last_name, experience, frontend, backend, coding_language}
 */
router.post("/survey", async function (req, res) {
  const { first_name, last_name,
    experience, education, frontend,
    backend, coding_language } = req.body;

  const survey = await submit({
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