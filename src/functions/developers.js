const { fetchDevelopers } = require('./utils/fetch');
const { success, error } = require('./utils/response');

exports.handler = async ({ queryStringParameters: params }) => {
  try {
    const { language, since } = params;
    const data = await fetchDevelopers({ language, since });
    (data && data.length > 0) ? success(data) : success([]);
  } catch (err) {
    console.error(err);
    error(err);
  }
};
