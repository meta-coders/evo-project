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

-- Auth

-- Get user by its email
CREATE OR REPLACE FUNCTION user_by_email (user_email TEXT)
RETURNS SETOF public."user"
AS $$
BEGIN
  RETURN QUERY
    SELECT *
    FROM "user"
    WHERE email = user_email;
END;
$$

LANGUAGE 'plpgsql';

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

-- Client

CREATE OR REPLACE VIEW get_events AS
  SELECT *
  FROM event
  JOIN host ON event.host_id = host.host_id;

CREATE OR REPLACE VIEW client_get_proposals AS
  SELECT *
  FROM proposal
  LEFT JOIN event ON proposal.event_id = event.event_id
  LEFT JOIN host ON proposal.host_id = host.host_id
  LEFT JOIN musician ON proposal.musician_id = musician.musician_id
  WHERE NOT (proposal.accepted_by_host AND proposal.accepted_by_musician);

CREATE OR REPLACE FUNCTION client_create_proposal (eid, hid, mid)
RETURNS VOID
AS $$
  BEGIN
    INSERT INTO proposal (
      event_id,
      host_id,
      musician_id,
      accepted_by_host,
      accepted_by_musician
    ) VALUES (eid, hid, mid, FALSE, FALSE);
  END;
$$

LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION client_create_vote (pr_id, cid)
RETURNS VOID
AS $$
  BEGIN
    INSERT INTO vote (proposal_id, client_id) VALUES (pr_id, cid);
  END;
$$

LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION name ()
RETURNS
AS $$
  BEGIN

  END;
$$

LANGUAGE 'plpgsql';

-- Utils

CREATE OR REPLACE FUNCTION get_user (sid TEXT)
RETURNS SETOF public."user"
AS $$
  BEGIN
    RETURN QUERY
      SELECT "user".*
      FROM "user"
      JOIN session ON "user".user_id = session.user_id
      WHERE session.session_id = sid;
  END;
$$

LANGUAGE 'plpgsql';


CREATE OR REPLACE FUNCTION get_musician (mid)
RETURNS SETOF public.musician
AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM musician WHERE musician_id = mid;
END;
$$

LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION get_proposal (pr_id INTEGER)
RETURNS SETOF public.proposal
AS $$
  BEGIN
    RETURN QUERY
    SELECT * FROM proposal WHERE proposal_id = pr_id;
  END;
$$

LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION update_event (pr_id INTEGER)
RETURNS VOID
AS $$
  BEGIN
    UPDATE event
    SET musician_ids = ARRAY_APPEND(
      musician_ids,
      (SELECT musician_id FROM get_proposal(pr_id))
    )
    WHERE event_id = (SELECT event_id FROM get_proposal(pr_id));
  END;
$$

LANGUAGE 'plpgsql';
