import { ConfigModeEnum, DirTypeEnum } from '@/lib/constant'
import FileView from '@/views/FileView'
import FolderView from '@/views/FolderView'
import CommandView from '@/views/CommandView'
import { IconType } from '@/type'

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
    windows: BuilderConfigType
    mac: BuilderConfigType
    linux: BuilderConfigType
}

export type BuilderConfigType = {
    path: string
    command: {
        mode: ConfigModeType
        value: CommandType
    }
    icon: IconType
}

export type CommandType = {
    [props in string]: string
}

export type ComponentType = typeof CommandView | typeof FolderView | typeof FileView
