import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios';
import './assets/css/main.less';

axios.defaults.baseURL='http://192.168.1.2:1000'

createApp(App).use(store).use(router).use(Antd).mount('#app')
