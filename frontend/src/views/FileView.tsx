import { defineComponent, ref } from 'vue'
import { ReadFile, WriteFile } from '../../wailsjs/go/main/App'
import { NButton, NSpace, useMessage } from 'naive-ui'
import { IsZero } from '@/Is'

export default defineComponent({
    name: 'FileView',
    props: {},
    async setup() {
        const data = ref<string>('')
        const readConfigFile = async () => (data.value = await ReadFile('dosc/config.json'))

        const saveConfigFile = async () => {
            const res = await WriteFile('dosc/config.json', data.value)
            if (IsZero(res)) {
                await readConfigFile()
            } else {
                const message = useMessage()
                message.warning(res)
            }
        }

        await readConfigFile()
        return () => (
            <div>
                <NSpace justify={'end'}>
                    <NButton onClick={saveConfigFile}>{'保存'}</NButton>
                </NSpace>
                <textarea v-model={data.value} style={{ width: '80vh', height: '80vh' }}></textarea>
            </div>
        )
    },
})
