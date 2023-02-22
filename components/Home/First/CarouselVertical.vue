<script setup lang="ts">
import { useTranslateX, useTranslateY } from '@/composables/useAnime'
interface Props {
  topText: string
  middleText: string
  bottomText: string
  backgroundUrl: string
  mask?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  mask: true,
})
const top = ref<HTMLElement | null>(null)
const middle = ref<HTMLElement | null>(null)
const bottom = ref<HTMLElement | null>(null)
const { instance: middleInstance } = useTranslateX(middle, -600, 0, 0, 600)
const { instance: topInstance } = useTranslateY(top, -60, 0, 600, 200)
const { instance: bottomInstance } = useTranslateY(bottom, 60, 0, 600, 200)
const restart = () => {
  middleInstance.value?.restart()
  topInstance.value?.restart()
  bottomInstance.value?.restart()
}

defineExpose({ restart })
</script>

<template>
  <Mask v-if="props.mask" />
  <div class="full CarouselOne relative grid grid-cols-12" :style="{ backgroundImage: `url(${props.backgroundUrl})` }">
    <div col-span-1 md:col-span-3 />
    <div text-center col-span-10 md:col-span-6 flex flex-col items-center justify-center text-white z-3>
      <div ref="top" font-500 text-xl md:text-4xl>
        {{ props.topText }}
      </div>
      <div ref="middle" text-primary text-5xl md:text-8xl font-500 b-b-2 b-primary>
        {{ props.middleText }}
      </div>
      <div ref="bottom" text-lg md:text-xl font-500 mt-2 md:mt-6>
        {{ props.bottomText }}
      </div>
    </div>
    <div col-span-1 md:col-span-3 />
  </div>
</template>

<style scoped lang='scss'>
.CarouselOne {
  // background-image: url("/carousel1.jpg");
}
</style>
