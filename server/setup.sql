CREATE TABLE IF NOT EXISTS "User" (
  "UserId"   SERIAL PRIMARY KEY,
  "Email"    TEXT,
  "Password" TEXT,
  "Role"     TEXT
);

CREATE TABLE IF NOT EXISTS "Client" (
  "UserId" INTEGER REFERENCES "User" ("UserId"),
  "Avatar" TEXT
);

CREATE TABLE IF NOT EXISTS "Musician" (
  "UserId"      INTEGER REFERENCES "User" ("UserId"),
  "Name"        TEXT,
  "Aavatar"     TEXT,
  "Description" TEXT,
  "Tracks"      JSON
);

CREATE TABLE IF NOT EXISTS "Host" (
  "UserId"      INTEGER REFERENCES "User" ("UserId"),
  "Name"        TEXT,
  "Avatar"      TEXT,
  "Interior"    TEXT[],
  "City"        TEXT,
  "Address"     TEXT,
  "Description" TEXT
);

CREATE TABLE IF NOT EXISTS "Event" (
  "EventId"     SERIAL PRIMARY KEY,
  "HostId"      INTEGER REFERENCES "User" ("UserId"),
  "MusicianId"  INTEGER[],
  "Title"       TEXT,
  "Description" TEXT,
  "Date"        DATE,
  "StartTime"   TIME
);

--
-- CREATE TABLE IF NOT EXISTS "Petition" (
--   "PetitionId" SERIAL PRIMARY KEY,
--   "EventId"    INTEGER REFERENCES "Event"("EventId"),
--   "Accepted"   BOOLEAN
-- )
--
