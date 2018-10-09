<template>
  <div class="story">
    <a :href="story.url">
    <img :src="placeholderImage || story.urlToImage" :alt="story.title" class="story-img" @error="loadPlaceholderImage">
    <p class="title-text">{{story.title}}</p>
    </a>
    <p class="news-source">{{story.source.name}}</p>
  </div>
</template>

<script>
export default{
  name: 'appstory',
  props: ['story'],
  data(){
    return{
      placeholderImage: false
    }
  },
  methods: {
    loadPlaceholderImage(){
      this.placeholderImage ='../src/assets/noimage.png'
    }
  }
}
</script>

<style scoped>
.story {
  margin-top: 10px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
  max-height: 400px;
  overflow-y: hidden;
  font-family: Trebuchet MS;
  margin-bottom: 50px;
  border: 1px solid black;
  background-color: #f9f9f9;
  box-shadow: 3px 4px 3px black;
}
.story-img {
  width: 100%;
  height: 100%;
}
img:after{
  width: 100%;
  height: 100%;
  background-image:url('~@/assets/noimage.png');
  background-repeat: no-repeat;
}
.title-text {
  display: block;
  font-weight: lighter;
  font-size: 21px;
  text-decoration: none;
  padding: 20px;
  color: black;
  padding-bottom: 5px;
}

a{
  text-decoration: none;
}

.news-source {
  color: #ccc;
  font-weight: normal;
  font-size: 15px;
  padding: 20px;
}
</style>