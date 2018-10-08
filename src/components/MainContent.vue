<template>
  <main>
    <h1 class="title">News Headlines</h1>
    <div v-if="headlines" class="news">
      <div v-for="(story, index) in headlines" :key="index" class="articles">
        <app-story :story="story"></app-story>
      </div>
    </div>

  </main>
</template>

<script>
export default{
  name: 'maincontent',
  created(){
    this.$store.dispatch('getHeadlines')
  },
  computed: {
    headlines(){
      return this.$store.getters.headlines
    }
  }
}
</script>

<style scoped>
.title{
  color: lightgray;
  font-size: 15px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-style: italic;
  text-align: center;
  margin-top: 25px;
  font-weight: lighter;
}
.news{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.articles{
  width: 22%;
}
</style>

