import { FileManager } from '@/lib/FileManager'
import { useBuilder } from './useBuilder'
import { reactive } from 'vue'

export const useManager = async () => {
    const { builder } = await useBuilder()

    const manager = reactive<FileManager>(await FileManager.Instance())

    const init = () => {
        manager.currentWorker = builder.render(builder.config)
    }

    return {
        init,
        manager,
    }
}
