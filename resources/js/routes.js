
let Login = require('./components/auth/Login.vue').default;
let Register = require('./components/auth/Register.vue').default;
let Forget = require('./components/auth/Forget.vue').default;


// export all the routes from here
export const routes = [
    { path: '/', component: Login, name: '/' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/forget', component: Forget, name: 'forget' },
  ]
