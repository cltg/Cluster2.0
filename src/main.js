// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import firebase from 'firebase/app';
import App from './App';
import router from './router';


Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA9Cm2xIokiCetdOwNrieV1izuzynUTfi8',
  authDomain: 'cluster-2-0.firebaseapp.com',
  databaseURL: 'https://cluster-2-0.firebaseio.com',
  projectId: 'cluster-2-0',
  storageBucket: 'cluster-2-0.appspot.com',
  messagingSenderId: '495133718792',
};
firebase.initializeApp(config);

window.firebase = firebase;
// putting it in window object to make it global and not having to import it to each component

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: { color: '#681113' },
});
