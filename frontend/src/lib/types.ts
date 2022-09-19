import { ConfigModeEnum, DirTypeEnum } from '@/lib/constant'

export type DirType = keyof typeof DirTypeEnum
export type ConfigModeType = keyof typeof ConfigModeEnum

export type DirInfo = {
    name: string
    type: DirType
    //....
}

export type FileInfo = {
    name: string
    size: string
    power: string
    createTime: string
    updateTime: string
    //....
}

export type osType = 'windows' | 'mac' | 'linux'

export type ConfigType = {
    windows: {
        path: string
        command: {
            mode: ConfigModeType
            value: CommandType
        }
    }
    mac: {
        path: string
        command: {
            mode: ConfigModeType
            value: CommandType
        }
    }
    linux: {
        path: string
        command: {
            mode: ConfigModeType
            value: CommandType
        }
    }
}

export type CommandType = {
    [props in string]: string
}
