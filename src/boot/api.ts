import { boot } from 'quasar/wrappers';
import { apiKey } from 'src/composables/api';
import axios from 'axios';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  const api = axios.create({ baseURL: process.env.API_URL });
  app.provide(apiKey, api);
});
