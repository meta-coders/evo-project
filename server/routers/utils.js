'use strict';

const crypto = require('crypto');

const generateSID = size => {
  const sid = Buffer.alloc(size);
  crypto.randomFillSync(sid);
  return sid.toString('hex');
};

module.exports = {
  generateSID,
};
