import { createApp } from 'vue'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';


import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Home from './components';
import Article from './components/Articles/article';

const app =  createApp(App);

const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: Home },
        { path:'/articles', component: Articles },
        { path:'/contact', component: Contact },
        { path:'/articles/:articleId', component: Article }
    ],
    linkActiveClass:'active'
});

app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(routes)
app.mount('#app')
