import { defineComponent } from 'vue'
import { NIcon } from 'naive-ui'
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
    async setup(props) {
        return () => <NIcon {...props} component={props.iconType}></NIcon>
    },
})
