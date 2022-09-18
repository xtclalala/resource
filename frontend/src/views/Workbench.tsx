import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Workbench',
    setup(props, ctx) {
        return () => <div>{'workbench'}</div>
    },
})
