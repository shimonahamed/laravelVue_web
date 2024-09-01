import Home from "../views/Home.vue";
import About from "../views/About.vue";
import login from "../views/auth/login.vue";
import register from "../views/auth/register.vue";
import forget from "../views/auth/forget.vue";
// let login = require('../views/auth/login.vue').default;
// let register = require('../views/auth/register.vue').default;

const route = [
    {
        path : '/admin/home',
        name : 'home',
        component : Home
    },
    {
        path : '/admin/about',
        name : 'about',
        component : About
    },
    {
        path : '/',
        name : '/',
        component : login
    },
    {
        path : '/admin/register',
        name : 'register',
        component : register

    },
    {
        path : '/admin/forget',
        name : 'forget',
        component : forget

    },
];
export default route;