const { fetchDevelopers } = require('./utils/fetch');
const { success, error } = require('./utils/response');

exports.handler = async ({ queryStringParameters: params }) => {
  try {
    const { language, since } = params;
    const data = await fetchDevelopers({ language, since });
    if (data && data.length > 0) {
      return success(data);
    } else {
      return success([]);
    }
  } catch (err) {
    console.error(err);
    error(err);
  }
};
