import Vue from 'vue';
import VueRouter from 'vue-router';
import MainContent from './components/MainContent.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainContent
    }
  ]
})