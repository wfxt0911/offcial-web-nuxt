import anime from 'animejs/lib/anime.es.js'
import type { AnimeParams } from '@/types/anime'

const EASING = 'easeInOutQuad'
export function useTranslateX(el: Ref<HTMLElement | null>, from = 0, to = 0, delay = 0, duration = 200, opotion?: AnimeParams) {
  const instance = ref<anime.AnimeInstance>()
  onMounted(() => {
    instance.value = anime({
      targets: el.value,
      translateX: [from, to],
      scale: [1.2, 1],
      opacity: [0, 1],
      duration,
      delay,
      easing: EASING,
      ...opotion,
    })
  })
  return { instance }
}
export function useTranslateY(el: Ref<HTMLElement | null>, from = 0, to = 0, delay = 0, duration = 200, opotion?: AnimeParams) {
  const instance = ref<anime.AnimeInstance>()
  onMounted(() => {
    instance.value = anime({
      targets: el.value,
      translateY: [from, to],
      scale: [1.2, 1],
      opacity: [0, 1],
      duration,
      delay,
      easing: EASING,
      ...opotion,
    })
  })
  return { instance }
}

export function useAnime(opotion: AnimeParams) {
  const instance = ref<anime.AnimeInstance>()
  onMounted(() => {
    instance.value = anime({
      ...opotion,
      targets: opotion.targets.value,
    })
  })
  return { instance }
}
