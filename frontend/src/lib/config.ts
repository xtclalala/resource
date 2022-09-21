import { ConfigModeEnum } from '@/lib/constant'
import { IconType } from '@/type'

const config = {
    windows: {
        path: 'C:/',
        command: {
            mode: ConfigModeEnum.join,
            value: {
                ls: 'dir',
            },
        },
        icon: 'CodeSlashOutline' as IconType,
    },
    mac: {
        path: '/',
        command: {
            mode: ConfigModeEnum.join,
            value: {
                ls: 'ls',
            },
        },
        icon: 'CodeSlashOutline' as IconType,
    },
    linux: {
        path: '/',
        command: {
            mode: ConfigModeEnum.join,
            value: {
                ls: 'ls',
            },
        },
        icon: 'CodeSlashOutline' as IconType,
    },
}

export default config
