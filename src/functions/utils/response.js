function success(json, { maxAge = 600 } = {}) {
  return {
    statusCode: 200,
    headers: {
      'Cache-Control': `max-age=${maxAge}`,
    },
    body: JSON.stringify(json),
  };
}

function error(err) {
  return {
    statusCode: 500,
    body: JSON.stringify(err.toJSON()),
  };
}

module.exports = { success, error };
