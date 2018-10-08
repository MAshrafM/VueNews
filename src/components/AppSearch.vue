<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query" class="search-input" placeholder="Search..."/>
    </form>
  </div>
</template>

<script>
export default{
  name: 'appsearch',
  data(){
    return {
      query: ''
    }
  },
  methods: {
    search(){
      this.$router.push(`/search/${this.query}`)
    }
  }
}
</script>

<style scoped>
.search-input{
  padding: 10px 7px;
  width: 300px;
  border: none;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0, .5);
  outline: none;
  background-color: rgba(70, 189, 135, .7);
}
</style>