import { defineComponent } from 'vue'
import { useWorker } from '@/hooks/useWorker'
import { NButton } from 'naive-ui'
import { ReadDir } from '../../wailsjs/go/main/App'

export default defineComponent({
    name: 'FolderView',
    async setup() {
        const { work } = await useWorker()

        const demo = async () => {
            const res = work.value && (await ReadDir(work.value.currentPath))
            console.log('dir', res)
        }

        return () => (
            <div>
                <NButton onClick={demo}>{'ddd'}</NButton>
                {'FolderView'}
            </div>
        )
    },
})
