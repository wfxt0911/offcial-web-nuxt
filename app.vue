<script setup lang="ts">
import { COMPANY } from '~~/enums/appEnum'

const { cssVar } = useCss()
useHead({
  title: COMPANY,
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/logo.png',
    },
  ],
})
</script>

<template>
  <div :style="cssVar">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style setup>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  transform: translateX();
  font: 14px/1.5 "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Roboto, Arial, sans-serif;
}

html.dark {
  background: #222;
  color: white;
}
</style>
