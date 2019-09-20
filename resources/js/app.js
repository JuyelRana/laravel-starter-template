/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import moment from 'moment';
import {Form, HasError, AlertError} from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {path: '/dashboard', component: require('./components/Dashboard.vue').default},
    {path: '/users', component: require('./components/Users.vue').default},
    {path: '/profile', component: require('./components/Profile.vue').default}
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//Global function to upercase first letter of a word
Vue.filter('firstLetterUpperCase', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

//Convert Date as month/day/year
Vue.filter('mdyDate', function (date) {
    return moment(date).format('MMMM Do YYYY');
});

//get time difference between present and created date
Vue.filter('diffDate', function (date) {
    return moment(date).fromNow();
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
