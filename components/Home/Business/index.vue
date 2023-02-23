<script setup lang="ts">
// const rootRef = ref<HTMLElement | null>(null)
// defineExpose({ $el: rootRef })
import { MITT_KEY_ENUM } from '@/enums/mittEnum'

const cardList = [
  {
    color: '#2ecc71',
    icon: 'i-carbon-car-front',
    name: '汽车制造',
    text: '发动机技术|车身结构设计|悬挂系统|新能源技术',
    link: '/docs/nav/frontEndCollect',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS,
  },
  {
    color: '#8e44ad',
    icon: 'i-carbon-mobility-services',
    name: '汽车服务',
    text: '保养服务|维修服务|保险服务|道路救援服务',
    link: '/docs/nav/frontEndCommon',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS,
  },
  {
    color: '#d35400',
    icon: 'i-carbon-ibm-z-cloud-mod-stack',
    name: '二手汽车销售',
    text: '车辆评估|车辆展示|车辆交易|贷款服务|过户服务|售后服务',
    link: '/docs/tools/docker',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS,
  }, {
    color: '#c0392b',
    icon: 'i-carbon-airline-passenger-care',
    name: '高级定制化',
    text: '外观定制|内饰定制|功能定制|独特定制',
    link: '/docs/nav/document',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS,
  },
]
</script>

<template>
  <Mask :event-key="MITT_KEY_ENUM.CHANGE_TO_BUSINESS" />
  <div ref="rootRef" class="business full grid grid-cols-12 items-center justify-center ">
    <div class="col-span-10 col-start-2 md:(col-span-8 col-start-3) grid grid-cols-12 gap-x-6">
      <Card
        v-for="(item, index) in cardList"
        :key="index" class="col-span-6 md:col-span-3  " :name="item.name" :text="item.text"
        :icon="item.icon" :color="item.color" :link="item.link" :event-key="item.eventKey" :delay="(index + 1) * 200"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.business {
  background-image: url("/business.jpg");

}
</style>
