<template>
     <div class="l-button-box-one" :style="`width:${cornerWidth}px; height:${cornerHeight}px;`">
  <div class="l-button-box" :style="`border:1.5px solid ${borderColor[0]}; box-shadow:0 0 3px ${borderColor[0]},0 0 3px ${borderColor[0]} inset`">
<button class="l-button" :class="disabled? 'isDisabled' : '' "  :style="`border-color:${borderColor[1]}; width:${getWidth}px; height:${getHeight}px;`"><slot></slot></button>
  </div>
  <!-- 四角边框 -->
<svg class="l-button-svg-container" :width="cornerWidth" :height="cornerHeight">
        <polyline class="l-corner-one" :stroke="cornerColor" :points="`0, 10 0, 0 10, 0`" />
        <polyline class="l-corner-one" :stroke="cornerColor" :points="`${cornerWidth - 10}, 0 ${cornerWidth}, 0 ${cornerWidth}, 10`" />
        <polyline class="l-corner-one" :stroke="cornerColor" :points="`${cornerWidth - 10}, ${cornerHeight} ${cornerWidth}, ${cornerHeight} ${cornerWidth}, ${cornerHeight - 10}`" />
        <polyline class="l-corner-one" :stroke="cornerColor" :points="`0, ${cornerHeight - 10} 0, ${cornerHeight} 10, ${cornerHeight}`" />
      </svg>
</div>
</template>

<script>
import { converse } from '@/utils/conversion.js';
export default {
    props:{
        borderColor:{
            typeof:Array,
            default:()=>{ return ['#D7EEEA','#D7EEEA']}
        },
        width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '40px'
    },
        cornerColor:{
            type:String,
            default:'yellow'
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
data(){
    return{

    }
},
computed:{
    getWidth(){
            return converse(this.width,this.$refs.leTitleBox,'width');
        },
        getHeight(){
            return converse(this.height,this.$refs.leTitleBox,'height');
        },
    cornerWidth(){
        return this.getWidth+18;
    },
    cornerHeight(){
        return this.getHeight+18;
    }
},
}
</script>

<style scoped lang="scss">
.l-button-box{
    display: inline-block;
    padding: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  
}
.l-button{
    color: white;
    background-color: transparent;
    cursor: pointer;
    z-index: 999;
  border-style: solid;
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
      stroke-linecap: round;
    }
}
.l-corner-one {
    stroke-width: 5;
  }

.l-button-box-one{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
}
.isDisabled{
    opacity: 0.5;
    cursor: not-allowed;
}
</style>