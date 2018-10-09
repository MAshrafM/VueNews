<template>
  <footer class="wrapper">
    <p class="copy">&copy; 2018 All Rights Reserved MAshraf | <a href="http://github.com/MAshrafM" class="link">Github</a></p>
  </footer>
</template>

<script>
export default{}
</script>

<style scoped>
.wrapper {
  width: 85%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr;
  margin: 50px auto 20px auto;
  border-top: 1px solid lightgray;
  padding-top: 2%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: darkslategray;
}

.copy{
  color: lightgray;
}
a.link{
 text-decoration: none;
 color: rgb(70, 189, 135);
}
</style>