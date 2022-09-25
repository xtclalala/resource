import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CommandView',
    props: {},
    async setup() {
        return () => <div>{'CommandView'}</div>
    },
})
