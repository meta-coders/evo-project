'use strict';

const crypto = require('crypto');

const generateSID = size => {
  const sid = Buffer.alloc(size);
  crypto.randomFillSync(sid);
  return sid.toString('hex');
};

const GET_USER = `
SELECT "User".*
FROM "User"
JOIN "Session" ON "User"."UserId" = "Session"."UserId"
WHERE "Session"."SessionId" = $1`;

const UPDATE_EVENT = `
UPDATE "Event"
SET "MusicianIds" = ARRAY_APPEND(
  "MusicianIds",
  (SELECT "MusicianId" FROM "Proposal" WHERE "ProposalId" = $1)
)
WHERE "EventId" = (SELECT "EventId" FROM "Proposal" WHERE "ProposalId" = $1)`;


module.exports = {
  generateSID,
  GET_USER,
  UPDATE_EVENT,
};
