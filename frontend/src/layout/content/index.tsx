import { defineComponent } from 'vue'
import { NLayoutContent } from 'naive-ui'

export default defineComponent({
  name: 'YContent',
  setup(_, { slots }) {
    return () => (
      <NLayoutContent content-style="padding: 12px; min-height: 80vh" embedded>
        {slots.default && slots.default()}
      </NLayoutContent>
    )
  },
})

// <router-view v-slot="{ Component, route }">
//     <keep-alive :include="routeStore.getCacheList">
//     <component :is="Component" :key="route.name" />
//     </keep-alive>
// </router-view>
