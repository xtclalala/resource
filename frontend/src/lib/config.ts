import { ConfigModeEnum } from '@/lib/constant'

const config = {
    windows: {
        path: 'C:/',
        command: {
            mode: ConfigModeEnum.join,
            value: {
                ls: 'dir',
            },
        },
    },
    mac: {
        path: '/',
        command: {
            mode: ConfigModeEnum.join,
            value: {
                ls: 'ls',
            },
        },
    },
    linux: {
        path: '/',
        command: {
            mode: ConfigModeEnum.join,
            value: {
                ls: 'ls',
            },
        },
    },
}

export default config
