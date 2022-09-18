import { defineComponent } from 'vue'
import { NLayoutContent } from 'naive-ui'

const PropsType = {
  contentStyle: {
    type: String,
    default: undefined,
  },
  embedded: {
    type: Boolean,
    default: false,
  },
}

export default defineComponent({
  name: 'YContent',
  props: PropsType,
  setup(props, { slots }) {
    return () => (
      <NLayoutContent content-style={props.contentStyle} embedded={props.embedded}>
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
