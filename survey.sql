\echo 'Delete and recreate survey db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE survey;
CREATE DATABASE survey;
\connect survey

\i survey-schema.sql

\echo 'Delete and recreate survey_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE survey_test;
CREATE DATABASE survey_test;
\connect survey_test

\i survey-schema.sql
