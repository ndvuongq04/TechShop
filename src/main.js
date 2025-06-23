import { createApp } from 'vue'
import './style.css'
import './style2.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // nếu cần JS như modal, toast
import router from './router/index.js'// import router

const app = createApp(App)
app.use(router) // su dung router
app.mount('#app')
