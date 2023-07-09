<template>
  <div class="l-title-border-two" ref="leTitleBox" :style="`width:${getWidth}px`">
    <svg class="l-border-svg-top-container" :width="getWidth" :height="getHeight">
        <defs><!--  -->
    <g id="circleId">
       <circle :fill="`${colorArr[0]}`" r="4"></circle>
    </g>
    <g id="rectId">
        <rect :fill="`${colorArr[0]}`" width="30" height="6" rx="3"></rect>
    </g>
</defs>
<use x="5" y="4" xlink:href="#circleId"></use>
<use x="15" y="1" xlink:href="#rectId"></use>
<use x="55" y="4" xlink:href="#circleId"></use>
<line class="line-one" x1="59" y1="4" x2="100" y2="4" :stroke="`${borderColor}`"></line>
<line class="line-two" x1="100" y1="4" :x2="`${getWidth-110}`" y2="4"  :stroke="`${borderColor}`"></line>
<line class="line-one" :x1="`${getWidth-70}`" y1="4" :x2="`${getWidth-110}`" y2="4" :stroke="`${borderColor}`"></line>
<use :x="`${getWidth-70}`" y="4" xlink:href="#circleId"></use>
<use :x="`${getWidth-60}`" y="1" xlink:href="#rectId"></use>
<use :x="`${getWidth-20}`" y="4" xlink:href="#circleId"></use>

<!-- 下边框 -->
<use x="5" :y="`${getHeight-4}`" xlink:href="#circleId"></use>
<use x="15" :y="`${getHeight-8}`" xlink:href="#rectId"></use>
<use x="55" :y="`${getHeight-4}`" xlink:href="#circleId"></use>
<line class="line-one" x1="59" :y1="`${getHeight-4}`" x2="100" :y2="`${getHeight-4}`" :stroke="`${borderColor}`"></line>
<line class="line-two" x1="100" :y1="`${getHeight-4}`" :x2="`${getWidth-110}`" :y2="`${getHeight-4}`"  :stroke="`${borderColor}`"></line>
<line class="line-one" :x1="`${getWidth-70}`" :y1="`${getHeight-4}`" :x2="`${getWidth-110}`" :y2="`${getHeight-4}`" :stroke="`${borderColor}`"></line>
<use :x="`${getWidth-70}`" :y="`${getHeight-4}`" xlink:href="#circleId"></use>
<use :x="`${getWidth-60}`" :y="`${getHeight-8}`" xlink:href="#rectId"></use>
<use :x="`${getWidth-20}`" :y="`${getHeight-4}`" xlink:href="#circleId"></use>
    </svg>
    <slot></slot>
    </div>
</template>
<script>
import {converse} from '@/utils/conversion.js'
export default {
    props:{
        width:{
            type:String,
            default:'300px'
        },
        height:{
            type:String,
            default:'50px'
        },
        backgroundColor: {
      type: String,
      default: 'transparent'
    },
    colorArr:{
        type:Array,
        default:()=>{return ['orange']}
    },
    borderColor:{
        type:String,
        default:'orange'
    }
    },

    computed:{
        getWidth(){
            return converse(this.width,this.$refs.leTitleBox,'width',200);
        },
        getHeight(){
            return converse(this.height,this.$refs.leTitleBox,'height');
        }
    },
}

</script>

<style lang="scss" scoped>
.line-one{
    stroke-width: 2.5;
}
.l-title-border-two{
max-width: 100%;
}
.l-border-svg-top-container{
    max-width: 100%;
}
</style>