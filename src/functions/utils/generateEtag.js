const fnv1a = require('@sindresorhus/fnv1a');

function generateEtag(params = {}) {
  return fnv1a(JSON.stringify(params));
}

module.exports = generateEtag;
