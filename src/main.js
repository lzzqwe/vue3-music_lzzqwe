import { createApp } from "vue";
import './style/normalize.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router";
import { store } from "./store";
import App from "./App.vue";

createApp(App).use(ElementPlus).use(router).use(store).mount("#app");