import { defineComponent, Suspense } from 'vue'
import { NLayoutSider } from 'naive-ui'
import SiderMenu from '@/views/SiderMenu'

const PropsType = {
    ...NLayoutSider.props,
}

export default defineComponent({
    name: 'YSider',

    props: PropsType,

    setup(props) {
        return () => (
            <NLayoutSider {...props}>
                <Suspense>
                    {{
                        default: () => <SiderMenu />,
                        fallback: () => 'Loading....',
                    }}
                </Suspense>
            </NLayoutSider>
        )
    },
})
