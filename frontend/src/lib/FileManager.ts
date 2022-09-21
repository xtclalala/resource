import { FileWorker } from '@/lib/FileWorker'
import { warn } from '@/lib/log'
import { useBuilder } from '@/hooks/useBuilder'

export class FileManager {
    private _currentWorker: FileWorker | undefined
    private _works: Array<FileWorker> = []
    private static _Instance: FileManager
    constructor() {
        FileManager._Instance = this
    }

    public static async Instance(): Promise<FileManager> {
        if (this._Instance === undefined) {
            this._Instance = new FileManager()
        }
        return this._Instance
    }

    async toWork(id: string) {
        const work = await this.getWokeFromWorks(id)
        if (undefined === work) {
            warn(`not find currentWork, id: ${id}`)
            return false
        }
        this.currentWorker = work
        return true
    }

    async addWork(work: FileWorker): Promise<boolean> {
        this.setWorks = work
        this.currentWorker = work
        return true
    }

    async delWork(id: string): Promise<boolean> {
        const index = await this.getIndexFromWorks(id)
        if (index === -1) {
            warn(`not find currentWork, id: ${id}`)
            return false
        }
        this._works.splice(index, 1)
        if (this.currentWorker.id === id) {
            this.currentWorker = this.works[-1]
        }
        return true
    }

    async getIndexFromWorks(id: string): Promise<number> {
        return this.works.findIndex((w) => {
            if (w.id === id) {
                return true
            }
        })
    }

    async getWokeFromWorks(id: string): Promise<FileWorker | undefined> {
        const index = await this.getIndexFromWorks(id)
        if (undefined === index) {
            return undefined
        }
        return this.works[index]
    }

    // getter and setter
    async getCurrentWorker(): Promise<FileWorker> {
        if (this._currentWorker === undefined) {
            const { renderWorker } = await useBuilder()
            return renderWorker('ComponentView')
        }
        return this._currentWorker
    }

    set currentWorker(value: FileWorker) {
        this._currentWorker = value
        this.setWorks = value
    }

    get works(): Array<FileWorker> {
        return this._works
    }

    set setWorks(value: FileWorker) {
        for (const work of this._works) {
            if (work.id === value.id) {
                return
            }
        }
        this._works.push(value)
    }
}
