import spokenLanguages from './json/spoken-languages.json';
import { success } from './utils/response';

exports.handler = () => success(spokenLanguages, { maxAge: 86400 });
