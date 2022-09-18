import { defineComponent } from 'vue'
import YContent from './content/YContent'
import YHeader from './header/YHeader'
import YFooter from './footer/YFooter'
import YSider from './sider/YSider'
import { NLayout } from 'naive-ui'

export default defineComponent({
  name: 'YLayout',
  setup(_, { slots }) {
    return () => (
      <NLayout style="height: 100vh">
        <YHeader style={{ height: '64px', padding: '24px' }} bordered />

        <NLayout position={'absolute'} style={{ top: '64px', bottom: '64px' }} has-sider>
          <YSider content-style={'padding: 24px;'} native-scrollbar={false} bordered />

          <NLayout native-scrollbar={false}>
            <YContent content-style="min-height: calc(100vh - 128px)" embedded>
              {slots.default && slots.default()}
            </YContent>
          </NLayout>
        </NLayout>

        <YFooter position="absolute" style={{ height: '64px', padding: '24px' }} bordered />
      </NLayout>
    )
  },
})
