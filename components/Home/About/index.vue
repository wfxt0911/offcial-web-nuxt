<script setup lang="ts">
import MarqueeCpn from '~~/components/Marquee.vue'
import type Marquee from '~~/components/Marquee.vue'
import { COMPANY } from '~~/enums/appEnum'

type MarqueeInstance = InstanceType<typeof Marquee>

const descriptRef = ref<MarqueeInstance | null>(null)
const { $on, MITT_KEY } = useMitt()
const descript = ref<string>('是全球最大的汽车制造商之一，其业务涵盖了汽车、商用车、摩托车等多个领域，拥有众多知名品牌;一直以来都在汽车技术创新方面处于领先地位。它不断推出新型车型和先进技术，例如燃油汽车、电动汽车、混合动力车型、自动驾驶技术等，带动了整个汽车行业的发展。同时，在环保和可持续发展方面也有着较高的投入和意识;除了产品本身，也致力于提高客户服务和体验。公司在全球范围内建立了广泛的销售和服务网络，为客户提供高效、便捷的服务。此外，还致力于发展智能汽车技术，如自动驾驶技术、智能互联等领域，积极推进智能出行的发展;')
$on(MITT_KEY.CHANGE_TO_ABOUT, () => {
  descriptRef.value?.append()
})
</script>

<template>
  <div ref="rootRef" class="about full  text-white text-xl font-500 grid grid-cols-12 items-center">
    <MarqueeCpn
      ref="descriptRef" class="card-content text-lg leading-8!  col-span-10 col-start-2 md:(col-span-6 col-start-2 text-xl leading-10!)" :time="0.1"
      :text="`&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${COMPANY}${descript}`"
    />
  </div>
</template>

<style scoped lang='scss'>
.about {
  // background-image: url("/about.jpg");
  background-image: url("/about.jpg");
  .Marquee{
  }
}
</style>
