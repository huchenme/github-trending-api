const languages = require('../languages.json');
const { success } = require('./utils/response');

exports.handler = async () => success(languages, { maxAge: 86400 });
