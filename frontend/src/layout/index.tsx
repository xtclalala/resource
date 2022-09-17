import { defineComponent } from 'vue'
import YContent from './content'
import YHeader from './header'
import YFooter from './footer'
import { NLayout } from 'naive-ui'

export default defineComponent({
  name: 'YLayout',
  setup(_, { slots }) {
    return () => (
      <NLayout style="height: 100%">
        <YHeader />
        <NLayout native-scrollbar={false} position={'absolute'} style="top: 64px; bottom: 64px">
          <YContent>{slots.default && slots.default()}</YContent>
        </NLayout>
        <YFooter />
      </NLayout>
    )
  },
})
