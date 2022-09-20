import { defineComponent } from 'vue'
import { useManager } from '@/hooks/useManager'
import { NButton, NSpace } from 'naive-ui'
import YIcon from '@/components/YIcon'
import { useBuilder } from '@/hooks/useBuilder'

export default defineComponent({
    name: 'SiderMenu',
    async setup() {
        const { init, manager } = await useManager()
        const { renderWorker } = await useBuilder()
        if (manager.works.length === 0) {
            await init()
        }

        return () => (
            <NSpace vertical>
                {manager.works.map((work) => {
                    return (
                        <NButton
                            tertiary
                            round
                            type={work.id === manager.currentWorker?.id ? 'primary' : 'default'}
                            onClick={() => {
                                manager.toWork(work.id)
                            }}>
                            {{
                                icon: () => (
                                    <YIcon
                                        size={24}
                                        iconType={
                                            work.icon === undefined ? 'CodeSlashOutline' : work.icon
                                        }
                                    />
                                ),
                            }}
                        </NButton>
                    )
                })}
                <NButton
                    tertiary
                    round
                    onClick={async () => {
                        await manager.addWork(await renderWorker())
                    }}>
                    {{
                        icon: () => <YIcon size={24} iconType={'Add'} />,
                    }}
                </NButton>
            </NSpace>
        )
    },
})
