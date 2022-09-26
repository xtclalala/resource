import { defineComponent, ref, h } from 'vue'
import { useWorker } from '@/hooks/useWorker'
import { NButton, NDataTable, NEllipsis, NH6, NSpace } from 'naive-ui'
import YIcon from '@/components/YIcon'
import { Folder, FileTrayOutline } from '@vicons/ionicons5'

export default defineComponent({
    name: 'FolderView',
    async setup() {
        const columns = [
            {
                title: 'Name',
                key: 'Name',
                width: 200,
                // fixed: 'left',
                render: (row) => {
                    return h(
                        NSpace,
                        { justify: 'start' },
                        {
                            default: () => [
                                row.IsDir
                                    ? h(YIcon, { iconType: Folder, size: 30 })
                                    : h(YIcon, { iconType: FileTrayOutline, size: 30 }),
                                h(
                                    NH6,
                                    {},
                                    {
                                        default: () =>
                                            h(
                                                NEllipsis,
                                                { style: 'max-width: 200px' },
                                                { default: () => row.Name }
                                            ),
                                    }
                                ),
                            ],
                        }
                    )
                },
            },
            {
                title: 'Size',
                key: 'Size',
                width: 100,
            },
            {
                title: 'Modtime',
                key: 'Modtime',
                width: 200,
            },
            {
                title: 'Action',
                key: 'action',
                width: 200,
                render() {
                    return h(NButton, {}, { default: () => 'xxxx' })
                },
            },
        ]

        const { work } = await useWorker()

        await work.value?.readDir()
        const tableSize = ref<{ x: number; y: number }>({ x: 0, y: 0 })
        const getWindowInfo = () => {
            tableSize.value.y = window.innerHeight
            tableSize.value.x = window.innerWidth
        }
        const rowProps = (row) => {
            return {
                style: 'cursor: pointer;',
                onClick: async () => {
                    console.log(1)
                    if (row.IsDir) {
                        await work.value?.readDir(row.Name)
                    }
                },
            }
        }
        window.addEventListener('resize', getWindowInfo)
        getWindowInfo()
        return () => (
            <div>
                <NDataTable
                    columns={columns}
                    data={work.value?.dirInfo}
                    scrollX={700}
                    maxHeight={tableSize.value.y - 202}
                    rowProps={rowProps}
                    // flexHeight
                />
            </div>
        )
    },
})
