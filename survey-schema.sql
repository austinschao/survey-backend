CREATE TABLE survey (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    experience INT NOT NULL,
    education INT NOT NULL,
    frontend INT NOT NULL,
    backend INT NOT NULL,
    sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
)