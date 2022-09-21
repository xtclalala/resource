import { FileWorker } from '@/lib/FileWorker'
import config from './config'
import type { ComponentType, DirInfo } from '@/lib/types'
import type { BuilderConfigType, ConfigType, osType } from '@/lib/types'
import { ConfigModeEnum } from '@/lib/constant'
import { Os } from '../../wailsjs/go/main/App'

export class WorkerBuilder {
    private static _Instance: WorkerBuilder
    private _os: osType
    private _config: ConfigType = config
    constructor(os: osType) {
        this._os = os
    }

    public static async Instance(): Promise<WorkerBuilder> {
        if (this._Instance === undefined) {
            const os = await Os()
            this._Instance = new WorkerBuilder(os as osType)
        }
        return this._Instance
    }

    render(config: BuilderConfigType, component: ComponentType): FileWorker {
        // 读 path 信息
        if (config.command.mode === ConfigModeEnum.marge) {
            // marge
        } else {
            // join
        }

        const dirIndo: Array<DirInfo> = []
        return new FileWorker(config.path, dirIndo, config.command.value, config.icon, component)
    }
    get os(): osType {
        return this._os
    }

    set os(value: osType) {
        this._os = value
    }
    get config(): BuilderConfigType {
        return this._config[this.os]
    }
}
