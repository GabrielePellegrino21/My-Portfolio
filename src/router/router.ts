import HomeView from './../views/HomeView.vue'
import ViewContent from './../views/ViewContent.vue'

const routes = [
    { name:'home',  path:'/', component: HomeView },
    { name:'viewContent',path:'/viewContent', component: ViewContent }
];

export default routes;
