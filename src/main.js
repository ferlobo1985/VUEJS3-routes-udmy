import { createApp } from 'vue'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';


import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Home from './components';
import Article from './components/Articles/article';
import NotFound from './components/404.vue';
import Notify from './components/notify.vue';

const app =  createApp(App);


const theData = (route) => {
    console.log(route);

    return {
        crazyProp: route.path + ' some other crazy prop'
    }
}

const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: Home },
        { path:'/articles', component: Articles },
        { path:'/articles/:articleId', component: Article, props:theData },
        // { path:'/articles', component: Articles, children:[
        //     { path:':articleId', component: Article, props:theData }
        // ] },
        // { path:'/contact', redirect:'/' },
        { path:'/contact', components: {
            default: Contact,
            notify: Notify
        }, name:'contact'},
        { path:'/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass:'active'
});

app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(routes)
app.mount('#app')
