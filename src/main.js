import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// View
import Home from "./view/Home.vue"
import Cate_list from "./view/Cate_list.vue"
const router = createRouter({
 
    history: createWebHistory(),
    routes: [
      { path: "/", component: Home } ,
      {path: "/cate-list/:cate_name" , component: Cate_list}
    ],
  });

createApp(App).use(router).mount("#app");
