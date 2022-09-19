import { defineComponent } from 'vue'
import { WorkerBuilder } from '@/lib/Builder'
import { Os } from '../../wailsjs/go/main/App'

export default defineComponent({
    name: 'SiderMenu',
    async setup() {

        await init()
        return () => <div>{'SiderMenu'}</div>
    },
})
