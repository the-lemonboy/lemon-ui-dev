<template>
  <div class="l-title-border-three" ref="leTitleBox">
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
      <defs>
        <filter id="filterId1" height="200%" width="200%" x="-20%" y="-20%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="lineColor" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="filterId2" height="150%" width="150%" x="-20%" y="-20%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="colorArr[1]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <path
            id="pathD"
            :d="`M 20,${getHeight-30} L ${getWidth/2-titleWidth/2},${getHeight-30} ${getWidth/2-titleWidth/2+30},${getHeight-5}  ${getWidth/2+titleWidth/2-30},${getHeight-5} ${getWidth/2+titleWidth/2},${getHeight-30} ${getWidth-20} ${getHeight-30}`"
            fill="transparent"
          />

          <radialGradient
            id="gradient"
            cx="50%" cy="50%" r="50%"
          >
            <stop
              offset="0%" :stop-color="colorArr[0]"
              stop-opacity="1"
            />
            <stop
              offset="100%" :stop-color="colorArr[0]"
              stop-opacity="0"
            />
          </radialGradient>
  
          <mask id="mask">
            <circle cx="0" cy="0" r="150" fill="url(#gradient)">
              <animateMotion
                :dur="`${dur}s`"
                :path="`M 20,${getHeight-30} L ${getWidth/2-titleWidth/2},${getHeight-30} ${getWidth/2-titleWidth/2+30},${getHeight}  ${getWidth/2+titleWidth/2-30},${getHeight} ${getWidth/2+titleWidth/2},${getHeight-30} ${getWidth-20} ${getHeight-30}`"
                rotate="auto"
                repeatCount="indefinite"
              />
            </circle>
          </mask>
      </defs>
      <path filter="url(#filterId2)"  fill="none" :d="`M 0 ${getHeight-30}  L ${getWidth/2-titleWidth/2} ${getHeight-30} ${getWidth/2-titleWidth/2+30},${getHeight-5}  ${getWidth/2+titleWidth/2-30},${getHeight-5} ${getWidth/2+titleWidth/2},${getHeight-30} ${getWidth},${getHeight-30}`" :stroke="lineColor"></path>

    <path  xlink-href="#pathD" mask="url(#mask)" filter="url(#filterId1)" fill="none" :d="`M 0 ${getHeight-30}  L ${getWidth/2-titleWidth/2} ${getHeight-30} ${getWidth/2-titleWidth/2+30},${getHeight-5}  ${getWidth/2+titleWidth/2-30},${getHeight-5} ${getWidth/2+titleWidth/2},${getHeight-30} ${getWidth},${getHeight-30}`" stroke="#02D6B3"></path>
     <use x="5" y="10" xlink:href="rect1"></use>
     <!-- 左边四边形 -->
     <g>
     <polygon :fill="colorArr[1]" :points="`10,${getHeight-25} 20,${getHeight-25} 30,${getHeight-5} 20,${getHeight-5}`"></polygon>
     <polygon :fill="colorArr[1]" :points="`25,${getHeight-25} 35,${getHeight-25} 45,${getHeight-5} 35,${getHeight-5}`"></polygon>
     <polygon :fill="colorArr[1]" :points="`40,${getHeight-25} 50,${getHeight-25} 60,${getHeight-5} 50,${getHeight-5}`"></polygon>
    </g>
    <g>
      <!-- 右边四边形 -->
     <polygon :fill="colorArr[1]" :points="`${getWidth-10},${getHeight-25} ${getWidth-20},${getHeight-25} ${getWidth-30},${getHeight-5} ${getWidth-20},${getHeight-5}`"></polygon>
     <polygon :fill="colorArr[1]" :points="`${getWidth-25},${getHeight-25} ${getWidth-35},${getHeight-25} ${getWidth-45},${getHeight-5} ${getWidth-35},${getHeight-5}`"></polygon>
     <polygon :fill="colorArr[1]" :points="`${getWidth-40},${getHeight-25} ${getWidth-50},${getHeight-25} ${getWidth-60},${getHeight-5} ${getWidth-50},${getHeight-5}`"></polygon>
     
    </g>
  </svg>
  </div>
</template>

<script>
import {converse} from '@/utils/conversion.js'
export default {
  props: {
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '80px'
    },
    titleWidth: {
      type: Number,
      default: 300
    },
    dur: {
      type: Number,
      default: 3
    },
    lineColor: {
      type: String,
      default: '#FAF800'
    },
    colorArr: {
      type: Array,
      default: () => { return ['yellow', 'blue'] }
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

<style>

</style>