import { defineComponent } from 'vue'
import { NIcon } from 'naive-ui'
import * as vIcons from '@vicons/ionicons5'
import { IconType } from '@/type'
import { PropType } from 'vue'

const PropsType = {
    ...NIcon.props,
    iconType: {
        type: Object as PropType<IconType>,
        default: 'fallback',
    },
}
export default defineComponent({
    name: 'YIcon',
    props: PropsType,
    setup(props) {
        return () => <NIcon {...props} component={vIcons[props.iconType]}></NIcon>
    },
})
