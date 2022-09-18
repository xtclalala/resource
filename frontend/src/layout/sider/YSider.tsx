import { defineComponent } from 'vue'
import { NLayoutSider } from 'naive-ui'

const PropsType = {
  contentStyle: {
    type: String,
    default: undefined,
  },
  nativeScrollbar: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
}

export default defineComponent({
  name: 'YSider',

  props: PropsType,

  setup(props) {
    return () => (
      <NLayoutSider
        content-style={props.contentStyle}
        native-scrollbar={props.nativeScrollbar}
        bordered={props.bordered}>
        {/*  todo 菜单*/}
      </NLayoutSider>
    )
  },
})
