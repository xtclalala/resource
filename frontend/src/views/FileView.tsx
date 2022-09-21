import { defineComponent, ref } from 'vue'
import { ReadFile } from '../../wailsjs/go/main/App'
import { NButton } from 'naive-ui'

export default defineComponent({
    name: 'FileView',
    async setup() {
        const data = ref<string>('')
        const readConfigFile = async () => {
            data.value = await ReadFile('dosc/config.json')
        }
        // const writeConfigFile
        return () => (
            <div>
                {'FileView'}
                <NButton onClick={readConfigFile}>{'读文件'}</NButton>
                {data.value}
                <textarea v-model={data.value}></textarea>
            </div>
        )
    },
})
