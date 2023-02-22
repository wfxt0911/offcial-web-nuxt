<script setup lang="ts">
import type Marquee from '~~/components/Marquee.vue'
type MarqueeInstance = InstanceType<typeof Marquee>
const addressRef = ref<MarqueeInstance | null>(null)
const { $on, MITT_KEY } = useMitt()
$on(MITT_KEY.CHANGE_TO_DATA, () => {
  addressRef.value?.append()
  // securityRef.value?.append()
  // leftInstance.value?.restart()
  // rightInstance.value?.restart()
})
// import { COMPANY } from '~~/enums/appEnum'
// const rootRef = ref<HTMLElement | null>(null)
// defineExpose({ $el: rootRef })
</script>

<template>
  <div ref="rootRef" class="contact full pt-19 text-white text-base grid grid-cols-12 items-center justify-between gap-x-6 px-4 md:px-0">
    <DataCard :event-key="MITT_KEY.CHANGE_TO_DATA" class=" col-span-12 col-start-1  md:(col-start-2 col-span-2)">
      <template #icon>
        <div class="icon-rounded  bg-blue-1">
          <div class="i-carbon-ibm-cloud-pak-watson-aiops icon-rounded__content   bg-blue-5" />
        </div>
      </template>
      <template #data>
        182.6k
      </template>
      <template #descript>
        Total sales
      </template>
      <template #subscript>
        <div class="subscript">
          <span class="i-carbon-caret-up subscript__icon" />
          <span>8.3%</span>
        </div>
      </template>
    </DataCard>
    <DataCard :event-key="MITT_KEY.CHANGE_TO_DATA" class="dataCard">
      <template #icon>
        <div class="icon-rounded  bg-green-1">
          <div class="i-carbon-chart-column icon-rounded__content   bg-green-5" />
        </div>
      </template>
      <template #data>
        38.6k
      </template>
      <template #descript>
        Number of sales
      </template>
      <template #subscript>
        <div class="subscript">
          <span class="i-carbon-caret-up subscript__icon" />
          <span>12.3%</span>
        </div>
      </template>
    </DataCard>
    <DataCard :event-key="MITT_KEY.CHANGE_TO_DATA" class="dataCard">
      <template #icon>
        <div class="icon-rounded  bg-yellow-1">
          <div class="i-carbon-person icon-rounded__content   bg-yellow-5" />
        </div>
      </template>
      <template #data>
        12000+
      </template>
      <template #descript>
        Company size
      </template>
      <template #subscript>
        <div class="subscript">
          <span class="i-carbon-caret-down subscript__icon bg-red-5!" />
          <span class="text-red-5!">300+</span>
        </div>
      </template>
    </DataCard>
    <DataCard :event-key="MITT_KEY.CHANGE_TO_DATA" class="dataCard">
      <template #icon>
        <div class="icon-rounded  bg-red-1">
          <div class="i-carbon-data-vis-1 icon-rounded__content   bg-red-5" />
        </div>
      </template>
      <template #data>
        192
      </template>
      <template #descript>
        Number of patents
      </template>
      <template #subscript>
        <div class="subscript">
          <span class="i-carbon-caret-up subscript__icon" />
          <span>16</span>
        </div>
      </template>
    </DataCard>
    <DataCard :event-key="MITT_KEY.CHANGE_TO_DATA" class="dataCard">
      <template #icon>
        <div class="icon-rounded  bg-pink-1">
          <div class="i-carbon-earth-filled icon-rounded__content   bg-pink-5" />
        </div>
      </template>
      <template #data>
        8.3%
      </template>
      <template #descript>
        Market share
      </template>
      <template #subscript>
        <div class="subscript">
          <span class="i-carbon-caret-up subscript__icon" />
          <span>2%</span>
        </div>
      </template>
    </DataCard>
  </div>
</template>

<style scoped lang='scss'>
.contact {
  background-image: url("/data.jpg");
  .dataCard{
    @apply col-span-6 md:(col-span-2);
  }
  .icon-rounded{
    @apply: rounded-50% opacity-50 w-16 h-16 relative ;

    &__content{
      @apply opacity-100 position-center w-10;
    }
  }

  .subscript{
    @apply flex items-center md:items-start justify-center text-green-5;
    &__icon{
      @apply inline-block w-8 h-8;
      }
  }
}
</style>
