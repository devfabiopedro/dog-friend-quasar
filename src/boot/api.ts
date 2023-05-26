import { boot } from 'quasar/wrappers';
import { apiKey } from 'src/composables/api';
import axios, { AxiosInstance } from 'axios';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly api: AxiosInstance;
  }
}

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, store }) => {
  const api = axios.create({ baseURL: process.env.API_URL });
  app.provide(apiKey, api);

  store.use(() => ({ api }));
});
