<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
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
</style>
