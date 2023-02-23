<script  lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper'
import type CarouselVertical from '~~/components/Home/First/CarouselVertical.vue'
import type CarouselHorizontal from '~~/components/Home/First/CarouselHorizontal.vue'

type CarouselVerticalInstance = InstanceType<typeof CarouselVertical>
type CarouselHorizontalInstance = InstanceType<typeof CarouselHorizontal>

const firstRef = ref<CarouselVerticalInstance | null>(null)
const secondRef = ref<CarouselVerticalInstance | null>(null)
const thirdRef = ref<CarouselHorizontalInstance | null>(null)
const { $on, MITT_KEY } = useMitt()
$on(MITT_KEY.CHANGE_TO_HOME, () => {
  firstRef.value?.restart()
  secondRef.value?.restart()
  thirdRef.value?.restart()
})
const modules = ref([Pagination, Navigation, Autoplay, Keyboard])
const swiperEvt = (e: any) => {
  switch (e.activeIndex) {
    case 0:{
      firstRef.value?.restart()
      break
    }
    case 1:{
      secondRef.value?.restart()
      break
    }
    case 2:{
      thirdRef.value?.restart()
      break
    }
    default:{
      break
    }
  }
}
</script>

<template>
  <div ref="rootRef" class="full">
    <Swiper
      class="swiper !h-screen"
      :modules="modules"
      :space-between="0"
      :centered-slides="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      style="--swiper-navigation-sides-offset:40px;"
      @slideChange="swiperEvt"
    >
      <SwiperSlide>
        <HomeFirstCarouselHorizontal
          ref="firstRef" :mask="false"
          background-url="/carousel3.jpg" top-text="年沉淀 · 汽车行业" middle-text="ABOUT"
          bottom-text="不断的技术创新，为全球消费者提供高品质的汽车产品，同时致力于环保和社会责任，以减少对化石燃料的依赖并降低碳排放。"
        >
          <template #left>
            <div style="font-family:Microsoft JhengHei;font-size: 252px" class="leftText">
              9
            </div>
          </template>
        </HomeFirstCarouselHorizontal>
      </SwiperSlide>
      <SwiperSlide>
        <HomeFirstCarouselVertical
          ref="secondRef"
          background-url="/carousel1.jpg" top-text="咨询，测评，价格" middle-text="INFORMATION"
          bottom-text="提供最新汽车报价,汽车图片,汽车价格大全,汽车新闻、行情、评测、导购等内容"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HomeFirstCarouselVertical
          ref="thirdRef"
          background-url="/carousel2.jpg" top-text="汽车养护平台" middle-text="SERVICE"
          bottom-text="提供线上预约，线下门店服务，全国门店4500+,合作店遍布全国"
        />
      </SwiperSlide>
      <!-- <SwiperSlide class="slide">
        Slide 3
      </SwiperSlide>
      <SwiperSlide class="slide">
        Slide 4
      </SwiperSlide>
      <SwiperSlide class="slide">
        Slide 5
      </SwiperSlide>
      <SwiperSlide class="slide">
        Slide 6
      </SwiperSlide>
      <SwiperSlide class="slide">
        Slide 7
      </SwiperSlide>
      <SwiperSlide class="slide">
        Slide 8
      </SwiperSlide> -->
    </Swiper>
  </div>
</template>

<style scoped lang='scss'>
 @import '@/styles/swiper/variables.scss';
  @import '@/styles/swiper/mixins.scss';
  @import '@/styles/swiper/index.scss';

  .swiper {
    @include swiper-wrapper();
  }

  .slide {
    @include swiper-slide();
  }

    @media (max-width: 768px) {
      .leftText{
        font-size: 12rem !important;
      }
    }
</style>
