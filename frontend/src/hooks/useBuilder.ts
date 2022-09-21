import { WorkerBuilder } from '@/lib/Builder'
import { FileWorker } from '@/lib/FileWorker'
import { reactive } from 'vue'
import { ComponentType } from '@/lib/types'

let builder
let renderWorker
export const useBuilder = async (options?: UseBuilderOptionsType) => {
    if (builder === undefined) {
        console.log('options', options)
        builder = reactive<WorkerBuilder>(await WorkerBuilder.Instance())
    }

    if (renderWorker === undefined) {
        renderWorker = async (component: ComponentType): Promise<FileWorker> => {
            return builder.render(builder.config, component)
        }
    }
    return {
        builder,
        renderWorker,
    }
}

type UseBuilderOptionsType = {
    // ..anything
}
