"use strict";

/*
Express Application for conducting a survey.
*/

import express from "express";
import cors from "cors";

const app = new express();

// allow both form-encoded and json body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow connections to all routes from any browser
app.use(cors());

/*
Routes
*/

const surveyRoutes = require("./routes/survey");
app.use("/survey", surveyRoutes);

module.exports = app;