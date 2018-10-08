<template>
  <nav class="header">
    <div class="brand">
      <div class="brand-name"><span class="v-color">Vue</span> News</div>
      <app-search></app-search>
    </div>
    
    <ul class="nav-links">
      <li class="nav-link">
        <router-link to="/" class="router-link">Home</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/search/technology" class="router-link">Technology</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/search/sports" class="router-link">Sports</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/search/politics" class="router-link">Politics</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/search/entertainment" class="router-link">Entertainment</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppSearch from './AppSearch.vue'

export default{
  name: 'appheader',
  components: {
    AppSearch
  }
}
</script>

<style scoped>
.header {
  color: black;
  margin: 40px 40px 0 40px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

.v-color {
  color: #46bd87;
}

.brand {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
}

.brand-name {
  font-size: 50px;
}

.nav-links {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  color: darkslategray;
  cursor: pointer;
}

.router-link {
  text-decoration: none;
  text-transform: uppercase;
  color: darkslategray;
}

.router-link-exact-active {
  border-bottom: 1px solid #6ba3ba;
  font-weight: bold;
  color: #6ba3ba;
}

.router-link:hover {
  border-bottom: 1px solid #6ba3ba;
  color: #6ba3ba;
  font-weight: bold;
}
@media only screen and (max-width: 700px) {
  .brand {
    grid-auto-flow: row;
    align-items: center;
    justify-content: space-around;
    justify-items: center;
  }
  .brand-name {
    font-size: 40px;
  }
  .header {
    margin-top: 0;
  }
}
</style>