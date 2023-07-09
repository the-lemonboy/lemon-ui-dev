<template>
   <div class="l-button-box-two">
    <button class="l-button" :style="`width:${getWidth}px; height:${getHeight}px`"><slot></slot></button>
       <svg class="l-button-svg-container" :width="`${getWidth}`" :height="`${getHeight}`">
        <defs>
        <filter id="filterId" height="150%" width="150%" x="-10%" y="-10%">
          <feMorphology operator="dilate" radius="0.1" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="colorArr[1]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
         <polyline class="l-corner-one" :stroke="colorArr[0]" filter="url(#filterId)" :points="`15,1 7,1 3,5 3,12 7,15`" stroke-width="1"></polyline>
         <polyline class="l-corner-one" :stroke="colorArr[0]" filter="url(#filterId)" :points="`${getWidth-15},1 ${getWidth-5},1 ${getWidth-1},5 ${getWidth-1},12 ${getWidth-5},15`" stroke-width="1"></polyline>
         <polyline class="l-corner-one" :stroke="colorArr[0]" filter="url(#filterId)" :points="``" stroke-width="1"></polyline>
         <polyline class="l-corner-one" :stroke="colorArr[0]" filter="url(#filterId)" stroke-width="1" :points="`${getWidth-5},${getHeight-15} ${getWidth-1},${getHeight-12} ${getWidth-1},${getHeight-5} ${getWidth-5},${getHeight-1} 5,${getHeight-1} 3,${getHeight-4} 3,${getHeight-11}, 7,${getHeight-14}`"></polyline>
         <polygon class="l-corner-two"  :fill="colorArr[1]"  :points="`6,18 6,${getHeight-17} 2,${getHeight-14} 2,15`"></polygon>
         <polygon class="l-corner-two" :fill="colorArr[1]"  :points="`${getWidth-4},18 ${getWidth-4},${getHeight-18} ${getWidth},${getHeight-15} ${getWidth},15`"></polygon>
         <polygon class="l-corner-three" :fill="colorArr[1]"  :points="`${getWidth/2},${getHeight-4} ${getWidth/2-8},${getHeight-4} ${getWidth/2-6},${getHeight} ${getWidth/2+6},${getHeight} ${getWidth/2+8},${getHeight-4}`"></polygon>

       </svg>
   </div>
</template>

<script>
import { converse } from '@/utils/conversion.js';
export default {
    props:{
      width: {
      type: String,
      default: '120px'
    },
    height: {
      type: String,
      default: '80px'
    },
        colorArr:{
            type:Array,
            default:()=>{return ['gray','blue']}
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

<style lang="scss" scoped>

.l-button{
    border: none;
    cursor: pointer;
    z-index: 999;
    background: transparent;
  }
  .l-button-box-two{
      position: relative;
  }
  .l-button-svg-container{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: -999; 
      & > polyline {
        fill: none;
        /* stroke-linecap: round; */
      }
  }
</style>