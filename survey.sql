\echo 'Delete and recreate survey db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE survey;
CREATE DATABASE survey;
\connect survey

CREATE TABLE survey (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    experience INT NOT NULL,
    education INT NOT NULL,
    frontend INT NOT NULL,
    backend INT NOT NULL,
    language INT NOT NULL,
    sent_at TIMESTAMP WITH TIME ZONE
)

\echo 'Delete and recreate survey_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE survey_test;
CREATE DATABASE survey_test;
\connect survey_test

CREATE TABLE survey (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    experience INT NOT NULL,
    education INT NOT NULL,
    frontend INT NOT NULL,
    backend INT NOT NULL,
    language INT NOT NULL,
    sent_at TIMESTAMP WITH TIME ZONE
)