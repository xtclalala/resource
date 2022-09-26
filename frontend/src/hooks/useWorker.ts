// current worker
// function

import { useManager } from '@/hooks/useManager'
import { Ref, ref, watch } from 'vue'
import { FileWorker } from '@/lib/FileWorker'

const component = ref()
const work = ref<FileWorker>()
let stopWatchFn

export const useWorker = async (): Promise<{
    component: Ref
    work: Ref<FileWorker | undefined>
}> => {
    const { manager } = await useManager()

    if (undefined === stopWatchFn) {
        stopWatchFn = watch(
            manager,
            async () => {
                const temp = await manager.getCurrentWorker()
                if (work.value === undefined || temp.id !== work.value.id) {
                    work.value = temp
                    component.value = (await temp.component()).default
                }
            },
            {
                deep: true,
                immediate: true,
            }
        )
    }

    return {
        component,
        work,
    }
}
