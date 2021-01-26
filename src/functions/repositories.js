const { fetchRepositories } = require('./utils/fetch');
const { success, error } = require('./utils/response');

exports.handler = async ({ queryStringParameters: params }) => {
  try {
    const { language, since, spoken_language_code: spokenLanguage } = params;
    const data = await fetchRepositories({ language, since, spokenLanguage });
    (data && data.length > 0) ? success(data) : success([]);
  } catch (err) {
    console.error(err);
    error(err);
  }
};
