import languages from './json/languages.json';
import { success } from './utils/response';

exports.handler = async () => success(languages, { maxAge: 86400 });
