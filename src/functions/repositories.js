const { fetchRepositories } = require('./utils/fetch');
const { success, error } = require('./utils/response');
const generateEtag = require('./utils/generateEtag');

exports.handler = async ({ queryStringParameters: params }) => {
  try {
    const { language, since, spoken_language_code: spokenLanguage } = params;
    const data = await fetchRepositories({ language, since, spokenLanguage });
    const etag = generateEtag(params);
    if (data && data.length > 0) {
      return success(data, { etag });
    } else {
      return success([], { etag });
    }
  } catch (err) {
    console.error(err);
    error(err);
  }
};
