import { defineComponent, CSSProperties, PropType } from 'vue'
import { NLayoutHeader } from 'naive-ui'

const PropsType = {
    style: {
        type: Object as PropType<CSSProperties>,
        default: undefined,
    },
    bordered: {
        type: Boolean,
        default: false,
    },
}

export default defineComponent({
    name: 'YHeader',
    props: PropsType,
    setup() {
        return (props) => (
            <NLayoutHeader style={props.style} bordered={props.bordered}>
                Tab Tab
            </NLayoutHeader>
        )
    },
})
