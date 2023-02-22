import { THEME } from '@/constants/unocss'

export default () => {
  const cssVar = reactive({
    '--swiper-theme-color': THEME.PRIMARY,
  })

  return {
    cssVar,
  }
}
