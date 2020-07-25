function success(json) {
  return {
    statusCode: 200,
    // headers: {
    //   'Cache-Control': `public, max-age=${maxAge}, s-maxage=${sMaxAge}`,
    // },
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
