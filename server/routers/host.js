'use strict';

const express = require('express');
const { connect } = require('../src/db');
const { GET_USER, UPDATE_EVENT } = require('./utils');

const host = express.Router();

module.exports = host;

const GET_EVENTS = `
SELECT "Event".* 
FROM "Event" 
JOIN "Host" ON "Event"."HostId" = "Host"."HostId"
WHERE "Host"."UserId" = $1`;

const GET_MUSICIAN = `SELECT * FROM "Musician" WHERE "MusicianId" = $1`;

const GET_PROPOSALS = `
SELECT *
FROM "Proposal"
JOIN "Host" ON "Proposal"."HostId" = "Host"."HostId"
LEFT JOIN "Event" ON "Proposal"."EventId" = "Event"."EventId"
LEFT JOIN "Musician" ON "Proposal"."MusicianId" = "Musician"."MusicianId"
WHERE "Host"."UserId" = $1 AND NOT (
  "Proposal"."AcceptedByHost" AND "Proposal"."AcceptedByMusician"
)`;

const GET_VOTES = `SELECT COUNT(*) FROM "Vote" WHERE "ProposalId" = $1`;

const ACCEPT_PROPOSAL = `
UPDATE "Proposal" 
SET "AcceptedByHost" = TRUE
WHERE "ProposalId" = $1`;

const CREATE_PROPOSAL = `
INSERT INTO "Proposal" ("EventId", "HostId", "MusicianId", "AcceptedByHost")
VALUES ($2, (SELECT "HostId" FROM "Host" WHERE "UserId" = $1), $3, TRUE)`;

const getEvents = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const { rows: events } = await db.query(GET_EVENTS, [user.UserId]);

  for (const event of events) {
    const musicianIds = event.MusicianIds;
    event.Musicians = [];
    for (const id of musicianIds) {
      const { rows: [musician] } = await db.query(GET_MUSICIAN, [id]);
      event.musicians.push(musician);
    }
    delete event.MusicianIds;
  }

  res.json({ events });
};

const getProposals = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const { rows: proposals } = await db.query(GET_PROPOSALS, [user.UserId]);

  for (const proposal of proposals) {
    const {
      rows: [{ count }]
    } = await db.query(GET_VOTES, [proposal.ProposalId]);
    proposal.Votes = parseInt(count);
  }

  res.json({ proposals });
};

const accept = async (db, req) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const { proposalId } = req.body;

  await db.query(ACCEPT_PROPOSAL, [proposalId]);

  const { rows: [proposal] } = await db.query(
    'SELECT * FROM "Proposal" WHERE "ProposalId" = $1',
    [proposalId]
  );

  if (proposal.AcceptedByMusician) await db.query(UPDATE_EVENT, [proposalId]);
};

const propose = async (db, req) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const { eventId, musicianId } = req.body;
  await db.query(CREATE_PROPOSAL, [user.UserId, eventId, musicianId]);
};

host.get('/events', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getEvents(db, req)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});

host.get('/proposals', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getProposals(db, req, res)
    .then(code => res.status(code || 200))
    .catch((e) => (console.error(e), res.status(500)))
    .finally(() => {
      res.end();
      db.end();
    });
});

host.post('/accept', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  accept(db, req, res)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});

host.post('/propose', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  propose(db, req)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});
