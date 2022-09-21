import { EventsOn } from '../../wailsjs/runtime'
import { useManager } from '@/hooks/useManager'

export const useShort = async () => {
    const { manager } = await useManager()
    const ctrlAddW = () => {
        EventsOn('ctrlAddW', async () => {
            await manager.delWork(manager.currentWorker.id)
        })
    }

    return {
        ctrlAddW,
    }
}
