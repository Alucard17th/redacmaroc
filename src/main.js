import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import store from './store/store'
import routes from './router/routes'
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";  // <- NEW

// import 'bootstrap';
import './assets/app.scss'
// import BootstrapVue from 'bootstrap-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

const firebaseConfig = {
  apiKey: "AIzaSyA-4XqG-LzYeXLWRlEbP2m2pePznUTf3EU",
  authDomain: "redacma-294da.firebaseapp.com",
  projectId: "redacma-294da",
  storageBucket: "redacma-294da.appspot.com",
  messagingSenderId: "819817561148",
  appId: "1:819817561148:web:879adc16a8e92c3239d739",
  measurementId: "G-HFNDZZPHR3"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

Vue.use(VueRouter)
Vue.use(store)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const router = new VueRouter({
  routes : routes,
})

Vue.config.productionTip = false
new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
