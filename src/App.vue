<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
    
    <div v-show="loading" class="loading">Loading...</div>
    <error v-if="error"></error>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  },
  computed:{
    loading(){
      return this.$store.state.loading
    },
    error(){
      return this.$store.state.error
    }
  }
}
</script>

<style src="./assets/reset.css"></style>
<style>
body{
  min-height: 90vh;
  background: url(https://www.toptal.com/designers/subtlepatterns/patterns/tiny-squares.png);
}
</style>
<style scoped>

.container {
  width: 98%;
  margin: 15px auto;
  background: radial-gradient(hsl(153, 90%, 35%), hsl(153, 47%, 40%), hsl(153, 45%, 25%));
  border: 1px solid #eee;
  box-shadow: 0px 3px 5px 1px black;
}

.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;

  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}
 /* Animation */
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
