require('./bootstrap');

window.Vue = require('vue');

import moment from 'moment';
import {Form, HasError, AlertError} from 'vform';
import VueProgressBar from 'vue-progressbar';

/** Admin Access Check **/
import Gate from './Gate';
// To Access Gate from any javascript class
Vue.prototype.$gate = new Gate(window.user)
/** Admin Access Check **/


/*Sweet Alert*/
import swal from 'sweetalert2';

window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast;
/*Sweet Alert*/


window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import VueRouter from 'vue-router';

Vue.use(VueRouter);


Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
});

let routes = [
    {path: '/dashboard', component: require('./components/Dashboard.vue').default},
    {path: '/developer', component: require('./components/Developer.vue').default},
    {path: '/users', component: require('./components/Users.vue').default},
    {path: '/profile', component: require('./components/Profile.vue').default}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

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

let Fire = new Vue();

window.Fire = Fire;

// Start Passport
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);
// End passport


Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router
});
