import spokenLanguages from './json/spoken-languages.json';
import { success } from './utils/response';

exports.handler = async () => success(spokenLanguages, { maxAge: 86400 });
