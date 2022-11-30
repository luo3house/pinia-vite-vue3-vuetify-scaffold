import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './src/App.vue';

// These are from vite-plugin-vuetify docs
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
const vuetifyPlugin = createVuetify();

// setup pinia
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(vuetifyPlugin);
app.mount('#app');
