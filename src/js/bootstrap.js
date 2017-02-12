
import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';

// Configure Vue
window.Vue = Vue;
window.Vue.use(VueRouter);

// Configure axios
window.axios = axios;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};
