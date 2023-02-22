<script setup lang="ts">
interface Props {
  background?: string
  zIndex?: number
  eventKey?: string
  anime?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  background: 'rgba(0,0,0,.2)',
  zIndex: 2,
  anime: false,
})

const maskRef = ref<HTMLElement | null>(null)
if (props.anime && props.eventKey) {
  const { instance: maskInstance } = useTranslateX(maskRef, -1980, 0, 0, 1000)
  const { $on } = useMitt()
  $on(props.eventKey, () => {
    maskInstance.value?.restart()
  })
}

const style = computed(() => {
  return {
    background: props.background,
    zIndex: props.zIndex,
  }
})
</script>

<template>
  <div ref="maskRef" class="mask" full fixed left-0 top-0 mt-19 :style="style" />
</template>

<style scoped lang='scss'>

</style>
