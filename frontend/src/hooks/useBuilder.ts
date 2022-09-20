import { WorkerBuilder } from '@/lib/Builder'
import { FileWorker } from '@/lib/FileWorker'
import { reactive } from 'vue'

export const useBuilder = async (options?: UseBuilderOptionsType) => {
    console.log(options)
    const builder = reactive<WorkerBuilder>(await WorkerBuilder.Instance())

    const renderWorker = async (): Promise<FileWorker> => {
        return builder.render(builder.config)
    }
    return {
        builder,
        renderWorker,
    }
}

type UseBuilderOptionsType = {
    // ..anything
}
