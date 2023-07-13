<template>
  <div class="app">      
    <!-- <test class="test"/> -->

      <btn class="btn">按钮</btn>
      <!-- <titles class="title"></titles> -->
      <!-- <loading class="load">加载</loading> -->
      <!-- <div class="box"></div> -->
    </div>
</template>

<script>
import test from './components/frame/frame-four/src/main.vue'
import btn from './components/button/button-two/src/main.vue'
import titles from './components/title-frame/title-frame-five/src/main.vue'
import loading from './components/loading/loading-two/src/main.vue'
export default {
components:{
  test,
  btn,
  titles,
  loading
},
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
.title{
  /* margin: 10px; */
}
.test{
  margin: 50px;
}
.btn{
  margin: 50px;
}
</style>