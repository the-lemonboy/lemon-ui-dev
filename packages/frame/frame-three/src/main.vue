<template>
    <div
      class="l-border-box-three"
      :style="` background-color:${backgroundColor}; width:${getWidth}px; height:${getHeight}px`"
    >
      <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
        <line class="l-corner" x1="0" y1="0" x2="25" y2="0" :stroke="borderColor[1]" ></line>
        <line class="l-corner" x1="30" y1="0" x2="50" y2="0" :stroke="borderColor[1]"></line>
        <!-- 边框 -->
        <line class="border-line" :stroke="borderColor[0]" x1="50" y1="2" :x2="`${getWidth-15}`" y2="2"></line>
        <line class="border-line" :stroke="borderColor[0]" x1="0" y1="0" x2="0" :y2="`${getHeight}`"></line>
        <line class="border-line" :stroke="borderColor[0]" :x1="`${getWidth}`" y1="0" :x2="`${getWidth}`" :y2="`${getHeight}`"></line>
        <line class="border-line" :stroke="borderColor[0]" x1="15" :y1="`${getHeight-1}`" :x2="`${getWidth-50}`" :y2="`${getHeight-1}`"></line>
        <!-- 右上角 -->
        <line class="l-corner" :x1="`${getWidth-15}`" y1="0" :x2="`${getWidth}`" y2="0" :stroke="borderColor[1]"></line>
        <!-- 左下角 -->
        <line class="l-corner" x1="0" :y1="`${getHeight}`" x2="15" :y2="`${getHeight}`" :stroke="borderColor[1]" ></line>
<!-- 右下角 -->
        <line class="l-corner"  :stroke="borderColor[1]" :x1="`${getWidth-50}`" :y1="`${getHeight}`" :x2="`${getWidth-35}`" :y2="`${getHeight}`" ></line>
        <line class="l-corner"  :stroke="borderColor[1]" :x1="`${getWidth-30}`" :y1="`${getHeight}`" :x2="`${getWidth}`" :y2="`${getHeight}`" ></line>
      </svg>
  
      <div class="border-box-content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import {converse} from '@/utils/conversion.js'
import {throttle} from '@/utils/throttle-debounce.js'
export default {
props:{
  name:"LEBorderBox3",
  width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '80px'
    },
    borderColor:{
        type:Array,
        default: ()=>{return ['gray','white']}
    },
    backgroundColor:{
        type:String,
        default:'transparent'
    }
},
data() {
      return {
        getWidth: converse(this.width, this.$refs.leFrameBox, 'width'),
        getHeight: converse(this.height, this.$refs.leFrameBox, 'height'),
      }
    },
    mounted() {
      window.addEventListener('resize', throttle(() => {
        this.getWidth = converse(this.width, this.$refs.leFrameBox, 'width')
        this.getHeight = converse(this.height, this.$refs.leFrameBox, 'height')
      }, 1000))
    },
    beforeDestroy() {
      window.removeEventListener('resize', throttle);
    }
}
</script>

<style lang="scss" scoped>

.l-border-box-three{
  position: relative;
}
.l-border-svg-container {
      position: absolute;
      top: -1px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
.l-corner{
  stroke-width:6
}
</style>