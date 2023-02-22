<script lang="ts" setup>
const props = withDefaults(defineProps<Props>(), {
  delay: 1000,
})
const { $on } = useMitt()
interface Props {
  color: string
  icon: string
  name: string
  text: String
  delay?: number
  eventKey: string
}
const cardRef = ref<HTMLElement | null>(null)
const { instance: cardInstance } = useTranslateY(cardRef, -600, 0, props.delay, 600)
const restart = () => {
  cardInstance.value?.restart()
}

$on(props.eventKey, () => {
  cardInstance.value?.restart()
})
defineExpose({ restart })
</script>

<template>
  <div ref="cardRef" class="card hvr-buzz-out text-white p-6 md:(px-10 py-16)">
    <div class="flex justify-center">
      <div :class="[icon]" class="text-6xl" :style="{ color }" />
    </div>
    <div class="card-name text-lg mt-2 md:(mt-8 text-2xl) text-primary">
      {{ name }}
    </div>
    <div class="card-text text-sm  mt-2 md:(mt-6 text-base) tracking-wider">
      {{ text }}
    </div>
  </div>
</template>

<style lang='scss' scoped>
.card {
    background: rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 6px, rgba(0, 0, 0, 0.3) 10px 7px 13px 1px, rgba(0, 0, 0, 0.2) 1px -3px 3px inset;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 30px;
    text-align: center;
    z-index: 20;

}
</style>
