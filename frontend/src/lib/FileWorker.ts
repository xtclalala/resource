import shortid from 'shortid'
import type { DirInfo, FileInfo } from '@/lib/types'
import { CommandType, ComponentType } from '@/lib/types'
import { IconType } from '@/type'

export class FileWorker {
    readonly _id: string
    private _currentPath: string
    private _currentFile: FileInfo | undefined
    private _dirInfo: Array<DirInfo> = []
    private _command: CommandType
    private _icon: IconType
    private _name = ''
    private readonly _component: ComponentType

    constructor(
        currentPath: string,
        dirInfo: Array<DirInfo>,
        command: CommandType,
        icon: IconType,
        component: ComponentType
    ) {
        this._id = shortid.generate()
        this._currentPath = currentPath
        this._dirInfo = dirInfo
        this._command = command
        this._icon = icon
        this._component = component
    }

    renderCommand(): string {
        return ''
    }

    get id(): string {
        return this._id
    }

    get currentPath(): string {
        return this._currentPath
    }
    set currentPath(value: string) {
        this._currentPath = value
    }

    get currentFile(): FileInfo | undefined {
        return this._currentFile
    }
    set currentFile(value: FileInfo | undefined) {
        this._currentFile = value
    }

    get dirInfo(): Array<DirInfo> {
        return this._dirInfo
    }

    set dirInfo(value: Array<DirInfo>) {
        this._dirInfo = value
    }

    get command(): CommandType {
        return this._command
    }

    set command(value: CommandType) {
        this._command = value
    }

    get icon(): IconType {
        return this._icon
    }

    set icon(value: IconType) {
        this._icon = value
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get component(): () => Promise<() => Promise<any>> {
        return async () => await import(`../views/${this._component}`)
    }
}
