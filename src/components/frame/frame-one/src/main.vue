<template>
    <div
      class="l-border-box-one"
      :style="`box-shadow: inset 0 0 40px ${mergedColor[0]}; border: 1px solid ${mergedColor[0]}; background-color:${backgroundColor}; width:${getWidth}px; height:${getHeight}px`"
    >
      <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
        <polyline class="l-corner-one" :stroke="mergedColor[0]" :points="`0, 25 0, 0 25, 0`" />
        <polyline class="l-corner-one" :stroke="mergedColor[0]" :points="`${getWidth - 25}, 0 ${getWidth}, 0 ${getWidth}, 25`" />
        <polyline class="l-corner-one" :stroke="mergedColor[0]" :points="`${getWidth - 25}, ${getHeight} ${getWidth}, ${getHeight} ${getWidth}, ${getHeight - 25}`" />
        <polyline class="l-corner-one" :stroke="mergedColor[0]" :points="`0, ${getHeight - 25} 0, ${getHeight} 25, ${getHeight}`" />
  
        <polyline class="l-corner-two" :stroke="mergedColor[1]" :points="`0, 10 0, 0 10, 0`" />
        <polyline class="l-corner-two" :stroke="mergedColor[1]" :points="`${getWidth - 10}, 0 ${getWidth}, 0 ${getWidth}, 10`" />
        <polyline class="l-corner-two" :stroke="mergedColor[1]" :points="`${getWidth - 10}, ${getHeight} ${getWidth}, ${getHeight} ${getWidth}, ${getHeight - 10}`" />
        <polyline class="l-corner-two" :stroke="mergedColor[1]" :points="`0, ${getHeight - 10} 0, ${getHeight} 10, ${getHeight}`" />
      </svg>
  
      <div class="border-box-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import {converse} from '@/utils/conversion.js'
  export default {
    name:'LeBorderBox1',
    props: {
      width: {
        type: String,
        default: '500px'
      },
      height: {
        type: String,
        default: '80px'
      },
      mergedColor: {
        type: Array,
        default: () => { return ['blue', 'gray'] }
      },
      backgroundColor: {
        type: String,
        default: 'transparent'
      }
    },
    computed:{
        getWidth(){
            return converse(this.width,this.$refs.leTitleBox,'width');
        },
        getHeight(){
            return converse(this.height,this.$refs.leTitleBox,'height');
        }
    },
 
  }
  </script>
  
  <style scoped lang="scss">
.l-border-box-one {
    position: relative;
    width: 100%;
    height: 100%;
  
    .l-border-svg-container {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
  
      & > polyline {
        fill: none;
        stroke-linecap: round;
      }
    }
  
    .l-corner-one {
      stroke-width: 2;
    }
  
    .l-corner-two {
      stroke-width: 5;
    }
  
    .border-box-content {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  </style>
  