<template>
  <div class="app">      
    <!-- <test class="a">nsjdfnj</test> -->

      <btn>按钮</btn>
      <!-- <titles></titles> -->
      <loading class="load">加载</loading>
      <!-- <div class="box"></div> -->
    </div>
</template>

<script>
import test from './components/frame/frame-one/src/main.vue'
import btn from './components/button/button-one/src/main.vue'
import titles from './components/title-frame/title-frame-one/src/main.vue'
import loading from './components/loading/loading-two/src/main.vue'
export default {
components:{
  test,
  btn,
  titles,
  loading
},
mounted(){
}
}
</script>

<style lang="scss">
html,body{
  background: rgb(36, 5, 65);
  overflow: hidden;
  padding: 0;
  margin: 0;
  color: white;
}
.app{
  height: 100vh;
 
}
.a{
  position: relative;
 top:100px;
}
.load{
  position: relative;
  top: 50px;
}
</style>