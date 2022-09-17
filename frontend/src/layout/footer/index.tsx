import { defineComponent } from 'vue'
import { NLayoutFooter } from 'naive-ui'

export default defineComponent({
  name: 'YFooter',
  setup() {
    return () => (
      <NLayoutFooter position={'absolute'} style="height: 64px; padding: 24px" bordered>
        脚脚脚脚脚脚
      </NLayoutFooter>
    )
  },
})
