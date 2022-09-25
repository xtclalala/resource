import { defineComponent, ref } from 'vue'
import { useManager } from '@/hooks/useManager'
import { NButton, NDropdown, NSpace } from 'naive-ui'
import YIcon from '@/components/YIcon'
import { useBuilder } from '@/hooks/useBuilder'
import { useShort } from '@/hooks/useShort'
import { IconType } from '@/type'

export default defineComponent({
    name: 'SiderMenu',
    async setup() {
        const { init, manager } = await useManager()
        const { renderWorker } = await useBuilder()
        const { ctrlAddW } = await useShort()

        const chooseView = async (key: string) => {
            await manager.addWork(await renderWorker(key))
        }
        const options = ref([
            {
                label: '命令行',
                key: 'CommandView',
            },
            {
                label: '设置',
                key: 'FileView',
            },
            {
                label: '文件管理',
                key: 'FolderView',
            },
        ])

        if (manager.works.length === 0) {
            await init()
        }
        ctrlAddW()
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
                                            work.icon === undefined
                                                ? ('CodeSlashOutline' as IconType)
                                                : work.icon
                                        }
                                    />
                                ),
                            }}
                        </NButton>
                    )
                })}
                <NDropdown trigger={'hover'} options={options.value} onSelect={chooseView}>
                    <NButton
                        tertiary
                        round
                        // onClick={async () => {
                        //     await manager.addWork(await renderWorker('FileView'))
                        // }}
                    >
                        {{
                            icon: () => <YIcon size={24} iconType={'Add' as IconType} />,
                        }}
                    </NButton>
                </NDropdown>
            </NSpace>
        )
    },
})
