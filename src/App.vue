<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
let type = 'WebGL'
if (!PIXI.utils.isWebGLSupported()) {
  type = 'canvas'
}
PIXI.utils.sayHello(type)
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
* {
  margin: 0;
  padding: 0;
}
/* #app {
  width: 800px;
  height: 500px;
  position: relative;
} */
</style>
