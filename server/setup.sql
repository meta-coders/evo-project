CREATE TABLE IF NOT EXISTS "User" (
  "UserId"   SERIAL PRIMARY KEY,
  "Email"    TEXT UNIQUE,
  "Password" TEXT,
  "Role"     TEXT
);

CREATE TABLE IF NOT EXISTS "Session" (
  "SessionId" TEXT PRIMARY KEY,
  "UserId"    INTEGER REFERENCES "User" ("UserId")
);

CREATE TABLE IF NOT EXISTS "Client" (
  "UserId" INTEGER REFERENCES "User" ("UserId"),
  "Avatar" TEXT
);

CREATE TABLE IF NOT EXISTS "Musician" (
  "UserId"      INTEGER REFERENCES "User" ("UserId"),
  "Name"        TEXT,
  "Avatar"     TEXT,
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
  "MusicianIds"  INTEGER[],
  "Title"       TEXT,
  "Description" TEXT,
  "Date"        DATE,
  "StartTime"   TIME
);

CREATE TABLE IF NOT EXISTS "Proposal" (
  "ProposalId" SERIAL PRIMARY KEY,
  "EventId"    INTEGER REFERENCES "Event" ("EventId"),
  "HostId"     INTEGER REFERENCES "Host" ("UserId"),
  "MusicianId" INTEGER REFERENCES "Musician" ("UserId"),
  "Accepted"   BOOLEAN
);

CREATE TABLE IF NOT EXISTS "Vote" (
  "ProposalId" INTEGER REFERENCES "Proposal" ("ProposalId"),
  "ClientId"   INTEGER REFERENCES "Client" ("UserId")
);
