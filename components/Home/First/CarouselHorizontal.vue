<script setup lang="ts">
import { useTranslateX } from '@/composables/useAnime'
interface Props {
  topText: string
  middleText: string
  bottomText: string
  backgroundUrl: string
  leftText?: string
  mask?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  mask: true,
})
const left = ref<HTMLElement | null>(null)
const right = ref<HTMLElement | null>(null)
const { instance: leftInstance } = useTranslateX(left, -600, 0, 0, 600)
const { instance: rightInstance } = useTranslateX(right, 600, 0, 600, 200)
const restart = () => {
  leftInstance.value?.restart()
  rightInstance.value?.restart()
}

defineExpose({ restart })
</script>

<template>
  <Mask v-if="props.mask" />
  <div class="full CarouselOne relative grid grid-cols-12" :style="{ backgroundImage: `url(${props.backgroundUrl})` }">
    <div col-span-1 md:col-span-3 />
    <div col-span-10 md:col-span-6 text-white z-3 grid grid-cols-12 items-center>
      <div ref="left" text-9xl font-500 col-span-4 text-right pr-3>
        <div v-if="props.leftText">
          {{ props.leftText }}
        </div>
        <slot v-else name="left" />
      </div>
      <div ref="right" text-left col-span-8 flex flex-col items-start>
        <div font-500 text-xl md:text-4xl>
          {{ props.topText }}
        </div>
        <div text-primary text-5xl md:text-8xl font-500 b-b-2 b-primary>
          {{ props.middleText }}
        </div>

        <div text-lg md:text-xl font-500 mt-2 md:mt-6 tracking-wide v-html="props.bottomText" />
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
