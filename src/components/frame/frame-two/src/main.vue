<template>
    <div class="l-border-box-two" :style="`width:${getWidth}px; height:${getHeight}px`">
        <svg class="l-border-svg-container" :width="`${getWidth}`" :height="`${getHeight}`">
        <defs>
          <path
            :id="path"
            :d="pathD"
            fill="transparent"
          />
          <radialGradient
            :id="gradient"
            cx="50%" cy="50%" r="50%"
          >
            <stop
              offset="0%" stop-color="#fff"
              stop-opacity="1"
            />
            <stop
              offset="100%" stop-color="#fff"
              stop-opacity="0"
            />
          </radialGradient>
  
          <mask :id="mask">
            <circle cx="0" cy="0" r="150" :fill="`url(#${gradient})`">
              <animateMotion
                :dur="`${dur}s`"
                :path="pathD"
                rotate="auto"
                repeatCount="indefinite"
              />
            </circle>
          </mask>
        </defs>
  
        <polygon :fill="backgroundColor" :points="`5, 5 ${getWidth - 5}, 5 ${getWidth - 5} ${getHeight - 5} 5, ${getHeight - 5}`" />
  
        <use
          :stroke="borderColor[0]"
          stroke-getWidth="1"
          :xlink:href="`#${path}`"
        />
  
        <use
          :stroke="borderColor[1]"
          stroke-width="3"
          :xlink:href="`#${path}`"
          :mask="`url(#${mask})`"
        >
          <animate
            attributeName="stroke-dasharray"
            :from="`0, ${length}`"
            :to="`${length}, 0`"
            :dur="`${dur}s`"
            repeatCount="indefinite"
          />
        </use>
      </svg>
  
      <div class="border-box-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script> 
  import {converse} from '@/utils/conversion.js' 
  export default {
    name:'LeBorderBox2',
    props:{
      width:{
            type:String,
            default:'300px'
        },
        height:{
            type:String,
            default:'200px'
        },
        borderColor:{
            type:Array,
            default:()=>{return ['blue','gray']}
        },
        backgroundColor: {
      type: String,
      default: 'transparent'
    },
    dur:{
        type:Number,
        default:5
    },
    reverse: {
        type: Boolean,
        default: true
      }
    },
    data(){
        return{
          gradient:'gradient',
          mask:'mask',
          path:'path',
        }
    },
    computed:{
      getWidth(){
            return converse(this.width,this.$refs.leTitleBox,'width');
        },
        getHeight(){
            return converse(this.height,this.$refs.leTitleBox,'height');
        },
        length(){
        const width = this.getWidth;
        const height = this.getHeight;
        return (width + height - 5) * 2
        },
        pathD () {
         const reverse = this.reverse;
         const width = this.getWidth;
         const height = this.getHeight;
  
        if (reverse) return `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`
  
        return `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`
      }
    },
  }
  </script>
  
  <style scoped lang="scss">
.l-border-box-two {
  position: relative;
  width: 100%;
height: 100%;
}
.l-border-svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}
.border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}

  </style>
  