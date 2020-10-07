const languages = require('./json/languages.json');
const { success } = require('./utils/response');

exports.handler = () => success(languages, { maxAge: 86400 });
