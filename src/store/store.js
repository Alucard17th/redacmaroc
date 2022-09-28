import Vuex from 'vuex'
import Vue from 'vue'
// import axios from 'axios'

import {users} from './modules/user'
import {orders} from './modules/order'

// import {spaces} from './modules/spaces'
// import {folders} from './modules/folders'
// import {teams} from './modules/teams'

Vue.use(Vuex)

const actions = {
  setSnackBar({ commit }, snackbar) {
    commit('SET_SNACKBAR', snackbar);
  },
  TOGGLE_HOME_NAVIGATION_DRAWER({ commit }) {
    commit('TOGGLE_HOME_NAVIGATION_DRAWER');
  },
  open: ({ commit }, payload) => commit('OPEN', payload),
  close: ({ commit }, payload) => commit('CLOSE', payload),
}

const mutations = {
  SET_SNACKBAR(state, snackbar) {
    state.snackbar = snackbar;
  },
  OPEN: (state, payload) => state.open.unshift(payload),
  CLOSE: (state, payload) => (state.open = state.open.filter((e) => e !== payload)),
}

const getters = {
  getSnackBar: (state) => {
    return state.snackbar
  },
  active: (state) => (state.open.length > 0 ? state.open[0] : null),
  allOpen: (state) => state.open,
}

const store = new Vuex.Store({
  state: {
    snackbar: {},
    isHomeNavigationDrawerOpen: true,
    open:[],
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    users: users,
    orders: orders
  }
})

global.store = store
export default store;