import shortid from 'shortid'
import type { DirInfo, FileInfo } from '@/lib/types'
import { CommandType } from '@/lib/types'

export class FileWorker {
    readonly _id: string
    #currentPath: string
    #currentFile: FileInfo | undefined
    #dirInfo: Array<DirInfo> = []
    #command: CommandType

    constructor(currentPath: string, dirInfo: Array<DirInfo>, command: CommandType) {
        this._id = shortid.generate()
        this.#currentPath = currentPath
        this.#dirInfo = dirInfo
        this.#command = command
    }

    renderCommand(): string {
        return ''
    }

    get id(): string {
        return this._id
    }

    get currentPath(): string {
        return this.#currentPath
    }
    set currentPath(value: string) {
        this.#currentPath = value
    }

    get currentFile(): FileInfo | undefined {
        return this.#currentFile
    }
    set currentFile(value: FileInfo | undefined) {
        this.#currentFile = value
    }

    get dirInfo(): Array<DirInfo> {
        return this.#dirInfo
    }

    set dirInfo(value: Array<DirInfo>) {
        this.#dirInfo = value
    }

    get command(): CommandType {
        return this.#command
    }

    set command(value: CommandType) {
        this.#command = value
    }
}
