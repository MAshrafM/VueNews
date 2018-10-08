import Vue from 'vue';
import VueRouter from 'vue-router';
import MainContent from './components/MainContent.vue';
import Search from './components/Search.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainContent
    },
    {
      path: '/search/:query',
      component: Search,
      props: true
    }
  ]
})