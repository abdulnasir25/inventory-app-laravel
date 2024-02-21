
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import routes here
import {routes} from './routes';

const router = new VueRouter({
    routes,
    mode: 'history' // to remove the # from the URL
})

const app = new Vue({
    el: '#app',
    router
});
