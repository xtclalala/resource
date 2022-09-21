// current worker
// function

import { useManager } from '@/hooks/useManager'
import { FileWorker } from '@/lib/FileWorker'

export const useWorker = async (): Promise<{ work: FileWorker }> => {
    const { manager } = await useManager()
    const work = await manager.getCurrentWorker()

    return {
        work,
    }
}
