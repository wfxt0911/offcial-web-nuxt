<script setup lang="ts">
import MarqueeCpn from '@/components/Marquee.vue'
import type Marquee from '~~/components/Marquee.vue'

type MarqueeInstance = InstanceType<typeof Marquee>

const batteryRef = ref<MarqueeInstance | null>(null)
const motorRef = ref<MarqueeInstance | null>(null)
const parkRef = ref<MarqueeInstance | null>(null)

const batteryModuleRef = ref<HTMLElement | null>(null)
const motorModuleRef = ref<HTMLElement | null>(null)
const parkModuleRef = ref<HTMLElement | null>(null)

const { instance: batteryInstance } = useTranslateX(batteryModuleRef, -600, 0, 0, 600)
const { instance: motorInstance } = useTranslateY(motorModuleRef, -600, 0, 0, 600)
const { instance: parkInstance } = useTranslateX(parkModuleRef, 600, 0, 0, 600)

const { $on, MITT_KEY } = useMitt()
$on(MITT_KEY.CHANGE_TO_TECHNOLOGY, () => {
  batteryRef.value?.append()
  motorRef.value?.append()
  parkRef.value?.append()

  batteryInstance.value?.restart()
  motorInstance.value?.restart()
  parkInstance.value?.restart()
})
</script>

<template>
  <!-- 12行 -->
  <div ref="rootRef" class="technology full  text-white pt-19 grid grid-rows-12">
    <!-- 24列 -->
    <div class="grid grid-cols-25 h-full row-span-12 mt-6  justify-around md:(row-span-6 row-start-4 mt-0)">
      <!-- 模块 -->
      <div ref="batteryModuleRef" class="card md:!col-start-2">
        <div class="card-title">
          三元固液混合锂离子电池
        </div>
        <div class="card-descript">
          Battery core technology
        </div>
        <MarqueeCpn
          ref="batteryRef" class="card-content"
          text="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp由锂、镍、钴和锰等金属氧化物混合而成的三元材料，具有高能量密度和长循环寿命的特点。而固体电解质层通常由锂离子导电的聚合物或陶瓷材料构成，能够防止电池发生渗漏和爆炸等危险情况"
        />
      </div>

      <!-- 模块 -->
      <div ref="motorModuleRef" class="card md:!col-start-10">
        <div class="card-title">
          气门开启的持续期
        </div>
        <div class="card-descript">
          Continuously Variable Valve Duration
        </div>
        <MarqueeCpn
          ref="motorRef" class="card-content"
          text="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp CVVD技术是通过改变凸轮触发气门开启的时机与持续时间，从而使发动机提升性能并降低油耗，同时还具备降低排放污染的优势,可以适时根据驾驶场景的需求，在平稳行驶、急加速等过程中合理控制气门开启的时机与持续时间，为发动机提供即时最适合的空燃比，进而实现减排节能和高性能输出的双目标;"
        />
      </div>

      <!-- 模块 -->
      <div ref="parkModuleRef" class="card md:!col-start-18">
        <div class="card-title">
          自动泊车
        </div>
        <div class="card-descript">
          Automatic parking
        </div>
        <MarqueeCpn
          ref="parkRef" class="card-content"
          text="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp自动泊车系统通过激光雷达、摄像头等多种传感器感知车辆周围的环境，并使用内置的控制算法，生成路线规划，使车辆能够在狭小的空间中进行自主导航和泊车操作;"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.technology {
  background-image: url("/technology.jpg");

}

.card {
  @apply col-span-23 col-start-2 mt-2 text-center font-500 md:(col-span-7 mt-0);

  &-title {
    @apply text-lg md:text-3xl;
  }

  &-descript {
    @apply text-primary b-b-2 b-primary text-xl md:(text-2xl leading-16);
  }

  &-content {
    @apply text-base mt-2 text-left md:text-lg;
  }
}
</style>
