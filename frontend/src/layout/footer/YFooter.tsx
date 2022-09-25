import { defineComponent, CSSProperties, PropType } from 'vue'
import { NLayoutFooter } from 'naive-ui'

const PropsType = {
    position: {
        type: String,
        default: undefined,
    },
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
    name: 'YFooter',
    props: PropsType,
    setup() {
        return (props) => (
            <NLayoutFooter position={props.position} style={props.style} bordered={props.bordered}>
                脚脚脚脚脚脚
            </NLayoutFooter>
        )
    },
})
