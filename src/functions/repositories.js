const { fetchRepositories } = require('./utils/fetch');
const { success, error } = require('./utils/response');

exports.handler = async ({ queryStringParameters: params }) => {
  try {
    const { language, since, spoken_language_code: spokenLanguage } = params;
    const data = await fetchRepositories({ language, since, spokenLanguage });
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
