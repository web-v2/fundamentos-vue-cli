<template>
  <div>
    <h1>APP Indesicion</h1>    
    <Indecision />
    <img alt="Vue logo" id="img" src="./assets/logo.png">
  </div>
</template>

<script>
import Indecision from './components/Indecision.vue'


export default {
  name: 'App',
  components: { Indecision }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#img{
  width: 60px;
  height: 60px;
  align-items: center;
}
</style>
