function success(json, { maxAge = 0 } = {}) {
  return {
    headers: {
      'Cache-Control': `public, max-age=${maxAge}`,
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify(json),
    statusCode: 200,
  };
}

function error(err) {
  return {
    statusCode: 500,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify(err.toJSON()),
  };
}

module.exports = { success, error };
