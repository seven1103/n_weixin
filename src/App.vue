<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { regions } from './assets/js/api.js'
export default {
  name: 'app',
  mounted(){
    regions().then(data => {
      console.log(data);
    })
  } 
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
