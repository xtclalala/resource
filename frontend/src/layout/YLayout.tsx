import { defineComponent } from 'vue'
import YContent from './content/YContent'
import YHeader from './header/YHeader'
import YFooter from './footer/YFooter'
import { NLayout } from 'naive-ui'

export default defineComponent({
  name: 'YLayout',
  setup(_, { slots }) {
    return () => (
      <NLayout style="height: 100%">
        <YHeader style={{ height: '64px', padding: '24px' }} bordered />
        <NLayout native-scrollbar={false} position={'absolute'} style="top: 64px; bottom: 64px">
          <YContent content-style="padding: 12px; min-height: 80vh" embedded>
            {slots.default && slots.default()}
          </YContent>
        </NLayout>
        <YFooter position="absolute" style={{ height: '64px', padding: '24px' }} bordered />
      </NLayout>
    )
  },
})
