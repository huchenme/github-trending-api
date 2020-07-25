const languages = require('../languages.json');
const { success } = require('./utils/response');

exports.handler = () => success(languages, { maxAge: 86400, sMaxAge: 604800 });
