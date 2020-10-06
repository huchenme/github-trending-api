const spokenLanguages = require('../spoken-languages.json');
const { success } = require('./utils/response');

exports.handler = () => success(spokenLanguages, { maxAge: 86400 });
