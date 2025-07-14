import { createApp } from 'vue';
import './style.css';

import { Table } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import App from './App.vue';

const app = createApp(App);

app.use(Table);

app.mount('#app');
