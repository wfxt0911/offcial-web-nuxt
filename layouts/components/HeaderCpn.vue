<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { THEME } from '@/constants/unocss'
import { COMPANY } from '~~/enums/appEnum'
const isMd = useBreakpoints(breakpointsTailwind).md
const { $emit, MITT_KEY } = useMitt()
const { headerList, activeIndex } = useHeader()
const drawer = ref(false)
const openDrawer = () => {
  drawer.value = true
}
const handleSelect = (key: string) => {
  // currentIndex.value = key
  $emit(MITT_KEY.HEADER_SELECT_EVENT, key)
}

const drawerSize = computed(() => {
  return isMd.value ? '16%' : '80%'
})
</script>

<template>
  <div class="relative">
    <div
      class="grid grid-cols-12 h-19 text-white items-center absolute w-screen z-9999"
      style="background:rgba(0,0,0,.5)"
    >
      <!-- 左侧部分 -->
      <div col-span-9 md:col-span-3 text-lg md:text-xl p-6 font-500 flex items-center>
        <i class="i-carbon-asset-view" />
        <span ml-3>{{ COMPANY }}</span>
      </div>
      <!-- 中间部分 -->
      <div hidden h-19 class="md:(col-span-6 block)">
        <el-menu
          :default-active="activeIndex" mode="horizontal" background-color="#cccccc"
          :active-text-color="THEME.PRIMARY" text-color="#0f766e" style="height: calc(100% - 0px);"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="(item, index) in headerList" :key="index" :index="item.href"
            class="!text-lg !text-gray-100"
          >
            {{ item.title }}
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 右侧部分 -->
      <div col-span-3 flex justify-end mr-8>
        <div class="i-carbon-grid text-primary text-2xl" @click="openDrawer" />
      </div>
    </div>
  </div>
  <el-drawer v-model="drawer" :with-header="false" append-to-body :z-index="10000" direction="ltr" :size="drawerSize">
    <div class="flex items-center flex-col text-gray-6">
      <div class="my-0 md:(my-2)">
        {{ COMPANY }}
      </div>
      <el-divider />
      <img src="/qrCode.png" class="w-50 h-50">
      <div class="my-4 text-sm">
        个人学习网站，欢迎阅览指正
      </div>
      <el-divider />
      <img src="/github.png" class="w-50 h-50">
      <div class="my-4 text-sm text-center">
        <div>项目开源地址</div>
        <div>
          如果对您有帮助，麻烦给个<span class="text-red-5 font-700 text-xl">Star</span>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<style scoped lang='scss'>
.el-menu {
  background-color: unset !important;
  ;
}

:deep(.el-menu--horizontal) {
  justify-content: center;
  border-bottom: unset !important;

  .el-menu-item {
    transition: unset !important;

    &:hover {
      background-color: unset;
    }

    &:focus {
      background-color: unset;
    }
  }

  .el-menu-item.is-active {
    border-bottom: unset;
    border-top: 3px solid var(--el-menu-active-color)
  }
}
</style>
