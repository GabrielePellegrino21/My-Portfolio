import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style/style.css'
import routes from  './router/router.ts'
import App from './App.vue'

const app = createApp(App);

const myrouter = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes
});

app.use(myrouter); 
app.mount("#app"); 

