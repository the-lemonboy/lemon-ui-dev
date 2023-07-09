<template>
  <div class="l-title-border-one">
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
        <defs>
            <linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" :stop-color="gradientColor[0]"/>
        <stop offset="100%" :stop-color="gradientColor[1]"/>
      </linearGradient>
      <linearGradient id="gradient2">
        <stop offset="0%" :stop-color="gradientColor[1]"/>
        <stop offset="100%" :stop-color="gradientColor[0]"/>
      </linearGradient>

      <animate id="opacityId" attributeName="fill-opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
        </defs>
        <g>
        <polygon :fill="`url(#gradient1)`" :points="`0,0 10,0 20,${getHeight} 10,${getHeight}`"></polygon>
<!-- 右边框 -->
<path :fill="`url(#gradient2)`" :d="`M 20,0 Q 26,${getHeight+2}  60,${getHeight}  L ${getWidth},${getHeight} ${getWidth},0 `"></path>
        </g>
        <g>
            <polygon fill="#6EE2F4" :points="`${getWidth-15},${getHeight/2} ${getWidth-25},${getHeight/2+10} ${getWidth-25},${getHeight/2+5} ${getWidth-20},${getHeight/2} ${getWidth-25},${getHeight/2-5} ${getWidth-25},${getHeight/2-10}`">
                <animate attributeName="fill-opacity" values="1;0.2;1" :dur="`${dur}s`" repeatCount="indefinite" />
            </polygon>
            <polygon fill="#ACF5F1" :points="`${getWidth-25},${getHeight/2} ${getWidth-35},${getHeight/2+10} ${getWidth-35},${getHeight/2+5} ${getWidth-30},${getHeight/2} ${getWidth-35},${getHeight/2-5} ${getWidth-35},${getHeight/2-10}`">
                <animate attributeName="fill-opacity" values="0.2;1;0.2" :dur="`${dur}s`" repeatCount="indefinite" />
            </polygon>
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
            default: '100vw'
        },
        height: {
            type: String,
            default: '40px'
        },
             borderColor: {
            type: Array,
            default: () => { return ['blue', 'gray'] }
        },
        backgroundColor: {
            type: String,
            default: 'transparent'
        },
        gradientColor: {
            type: Array,
            default: () => { return ['#5B14DC', '#D6C3F7'] }
        },
        dur: {
            type: Number,
            default: 2
        }
    },
    computed: {
        getWidth() {
            return converse(this.width, this.$refs.leTitleBox, 'width');
        },
        getHeight() {
            return converse(this.height, this.$refs.leTitleBox, 'height');
        }
    },
}
</script>

<style lang="scss" scoped>

</style>