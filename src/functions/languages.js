import languages from './json/languages.json';
import { success } from './utils/response';

exports.handler = async () => {
  return success(languages);
};
