<script lang="ts" setup>
import type Swiper from 'swiper'
import { Mousewheel, Pagination } from 'swiper'
import { Swiper as SwiperCpn, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
const modules = ref([Pagination, Mousewheel])
const swiperInstance = ref<Swiper | null>(null)
const { $on, MITT_KEY } = useMitt()
const { findIndexByHref, changeCurrentIndexBySwiper, headerList } = useHeader()
const onSwiper = (swiper: Swiper) => {
  swiperInstance.value = swiper
}
const activeIndexChange = (swiper: Swiper) => {
  changeCurrentIndexBySwiper(swiper.activeIndex)
}
$on(MITT_KEY.HEADER_SELECT_EVENT, (e: any) => {
  const index: number = findIndexByHref(e)
  if (index !== -1)
    swiperInstance.value?.slideTo(index, 0)
})
</script>

<template>
  <div class="h-screen overflow-hidden">
    <SwiperCpn
      class="swiper !h-screen" :modules="modules"
      direction="vertical" :slides-per-view="1" :space-between="0"
      :mousewheel="true" :pagination="{ clickable: true }"
      @swiper="onSwiper" @active-index-change="activeIndexChange"
    >
      <SwiperSlide v-for="item in headerList" :key="item.href">
        <component :is="item.component" />
      </SwiperSlide>
    </SwiperCpn>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/swiper/variables.scss';
@import '@/styles/swiper/mixins.scss';
@import '@/styles/swiper/index.scss';

.swiper {
  @include swiper-wrapper();
}

.slide {
  @include swiper-slide();
}

:deep(.swiper-wrapper){
  transition: all .5s !important;
}
</style>
