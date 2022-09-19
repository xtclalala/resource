import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Workbench',
    async setup() {
        return () => <div>{'workbench'}</div>
    },
})
