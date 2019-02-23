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


module.exports = {
  generateSID,
  GET_USER,
};
