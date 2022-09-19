import { FileWorker } from '@/lib/FileWorker'
import config from './config'
import type { DirInfo } from '@/lib/types'
import { ConfigType, osType } from '@/lib/types'
import { ConfigModeEnum } from '@/lib/constant'
export class WorkerBuilder {
    private defaultConfig: ConfigType = config
    private static _Instance: WorkerBuilder
    constructor() {}

    public static Instance(): WorkerBuilder {
        if (this._Instance === undefined) {
            this._Instance = new WorkerBuilder()
        }
        return this._Instance
    }

    render(os: osType): FileWorker {
        // 读 path 信息
        const config = this.defaultConfig[os]
        if (config.command.mode === ConfigModeEnum.marge) {
            // marge
        } else {
            // join
        }

        const dirIndo: Array<DirInfo> = []
        return new FileWorker(config.path, dirIndo, config.command.value)
    }
}
