function success(json, { maxAge = 600 } = {}) {
  return {
    statusCode: 200,
    headers: {
      'Cache-Control': `max-age=${maxAge}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(json),
  };
}

function error(err) {
  return {
    statusCode: 500,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(err.toJSON()),
  };
}

module.exports = { success, error };
