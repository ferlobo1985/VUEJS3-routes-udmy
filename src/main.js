import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-footer',Footer);
app.mount('#app')
