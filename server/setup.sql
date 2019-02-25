CREATE TABLE IF NOT EXISTS "user" (
  user_id   SERIAL PRIMARY KEY,
  email     TEXT UNIQUE,
  password  TEXT,
  role      TEXT
);

CREATE TABLE IF NOT EXISTS session (
  session_id TEXT PRIMARY KEY,
  user_id    INTEGER REFERENCES "user" (user_id)
);

CREATE TABLE IF NOT EXISTS client (
  client_id        SERIAL PRIMARY KEY,
  user_id          INTEGER REFERENCES "user" (user_id),
  client_avatar    TEXT
);

CREATE TABLE IF NOT EXISTS musician (
  musician_id          SERIAL PRIMARY KEY,
  user_id              INTEGER REFERENCES "user" (user_id),
  musician_name        TEXT,
  musician_avatar      TEXT,
  musician_description TEXT,
  musician_tracks      JSON
);

CREATE TABLE IF NOT EXISTS host (
  host_id          SERIAL PRIMARY KEY,
  user_id          INTEGER REFERENCES "user" (user_id),
  host_name        TEXT,
  host_avatar      TEXT,
  host_interior    TEXT[],
  host_city        TEXT,
  host_address     TEXT,
  host_description TEXT
);

CREATE TABLE IF NOT EXISTS event (
  event_id          SERIAL PRIMARY KEY,
  host_id           INTEGER REFERENCES "user" (user_id),
  musician_ids      INTEGER[],
  event_title       TEXT,
  event_description TEXT,
  event_date        DATE,
  event_start_time  TIME,
  event_end_time    TIME
);

CREATE TABLE IF NOT EXISTS proposal (
  proposal_id          SERIAL PRIMARY KEY,
  event_id             INTEGER REFERENCES event (event_id),
  host_id              INTEGER REFERENCES host (host_id),
  musician_id          INTEGER REFERENCES musician (musician_id),
  accepted_by_musician BOOLEAN,
  accepted_by_host     BOOLEAN
);

CREATE TABLE IF NOT EXISTS vote (
  proposal_id INTEGER REFERENCES proposal (proposal_id),
  client_id   INTEGER REFERENCES client (client_id)
);


-- Create user session
CREATE OR REPLACE FUNCTION create_session(session_id TEXT, user_id INTEGER)
RETURNS VOID
AS $$
 BEGIN
  INSERT INTO session VALUES (session_id, user_id);
 END;
$$

LANGUAGE 'plpgsql';

-- Drop user session
CREATE OR REPLACE FUNCTION drop_session(sid TEXT)
  RETURNS VOID
AS
$$
BEGIN
  DELETE FROM session WHERE session_id = sid;
END;
$$

LANGUAGE 'plpgsql';
