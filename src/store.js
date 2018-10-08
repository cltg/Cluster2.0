import Vue from 'vue';
import Vuex from 'vuex';

// here wer are telling Vue to use(use method) just imported Vuex
Vue.use(Vuex);

// Elements we need to create a Vuex Store:
// Now we will create a state which will hold all the necessary data
const state = {
  // test test test
  currentUser: null,
  // setting it to null is an empty object
};
// We will need mutations to update state data
const mutations = {
  // create the new method which takes 2 arguments: 1. state 2. the data
  // In capital letters, because that's how we know that this is a MUTATION
  SET_USER(state, user) {
    state.currentUser = user;
  },
};
// Now we need actions so the mutations can be executed to make changes
const actions = {
  // create setUser method with two arguments: 1.commit method 2. the data(res.user)
  setUser(state, user) {
    // using the commit method, we can dispatch action type 'Set_User'
    // (must be priorly created) for mutation and user as the data
    state.commit('SET_USER', user);
  },
};
// To get data from the state
const getters = {
  currentUser: state => state.currentUser,
};

// create the store with Vuex store method and create inside object with
// all elements we obtained before
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
