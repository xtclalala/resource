import { defineComponent } from 'vue'
import { NLayoutHeader } from 'naive-ui'

export default defineComponent({
  name: 'YHeader',
  setup() {
    return () => (
      <NLayoutHeader style="height: 64px; padding: 24px" bordered>
        Tab Tab
      </NLayoutHeader>
    )
  },
})
