import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './router/index';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Toast);

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount('#app');
