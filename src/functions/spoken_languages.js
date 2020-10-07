const spokenLanguages = require('./json/spoken-languages.json');
const { success } = require('./utils/response');

exports.handler = () => success(spokenLanguages, { maxAge: 86400 });
