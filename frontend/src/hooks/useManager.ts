import { FileManager } from '@/lib/FileManager'
import { useBuilder } from './useBuilder'
import { reactive } from 'vue'

let manager
let renderWorker
let init
export const useManager = async () => {
    if (renderWorker === undefined) {
        renderWorker = (await useBuilder()).renderWorker
    }

    if (manager === undefined) {
        manager = reactive<FileManager>(await FileManager.Instance())
    }

    if (init === undefined) {
        init = async () => {
            manager.currentWorker = await renderWorker('FolderView')
        }
    }

    return {
        init,
        manager,
    }
}
