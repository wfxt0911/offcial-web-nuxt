import { MITT_KEY_ENUM } from '@/enums/mittEnum'

import HomeFirst from '@/components/Home/First/index.vue'
import HomeBusiness from '@/components/Home/Business/index.vue'
import HomeQuality from '@/components/Home/Quality/index.vue'
import HomeData from '@/components/Home/Data/index.vue'
import HomeTechnology from '@/components/Home/Technology/index.vue'
import HomeAbout from '@/components/Home/About/index.vue'

const { $emit } = useMitt()
interface HeaderItem {
  href: string
  title: string
  eventKey: string
  component: any
}
const headerList: HeaderItem[] = [
  {
    href: 'HomeFirst',
    title: '首页',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_HOME,
    component: HomeFirst,
  },
  {
    href: 'HomeBusiness',
    title: '业务',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS,
    component: HomeBusiness,

  },
  {
    href: 'HomeQuality',
    title: '品质',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_QUALITY,
    component: HomeQuality,

  },

  {
    href: 'HomeData',
    title: '数据',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_DATA,
    component: HomeData,

  },
  {
    href: 'HomeTechnology',
    title: '技术',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_TECHNOLOGY,
    component: HomeTechnology,

  },
  {
    href: 'HomeAbout',
    title: '关于',
    eventKey: MITT_KEY_ENUM.CHANGE_TO_ABOUT,
    component: HomeAbout,

  },

]
const activeIndex = ref < string >(headerList[0].href)
watch(activeIndex, (val) => {
  const flag = headerList.find(item => item.href === val)
  flag && ($emit(flag.eventKey))
})

export default () => {
  const findIndexByHref = (href: string): number => {
    if (!href)
      throw new Error('请传入href参数')
    return headerList.findIndex(item => item.href === href)
  }
  const changeCurrentIndexBySwiper = (swiperIndex: number): void => {
    const flag = headerList[swiperIndex].href
    flag && (activeIndex.value = flag)
  }
  return {
    /** 菜单默认的索引 */
    activeIndex,
    /** 菜单列表 */
    headerList,
    /** 通过href找到数组索引 */
    findIndexByHref,
    /** 通过数组索引修改当前激活项 */
    changeCurrentIndexBySwiper,
  }
}
