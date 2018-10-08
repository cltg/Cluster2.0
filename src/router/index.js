import Vue from 'vue';
import Router from 'vue-router';

import Login from '../pages/Login';
import Newsfeed from '../pages/Newsfeed';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newsfeed',
      component: Newsfeed,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ],
  mode: 'history'
});
