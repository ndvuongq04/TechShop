// index.js
import { createRouter, createWebHistory } from 'vue-router' // import 2 phuong thuc trong node_modules 
import admin from './admin.js' // import file admin.js
import client from './client.js' // import file client.js


const routes = [...admin, ...client]// khai bao bien routes, gan bang mang admin va client;

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router