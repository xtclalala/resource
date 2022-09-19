import { FileWorker } from '@/lib/FileWorker'
import { warn } from '@/lib/log'

export class FileManager {
    #currentWorker: FileWorker
    #works: Array<FileWorker> = []
    private static _Instance: FileManager
    constructor(work: FileWorker) {
        FileManager._Instance = this
        this.#works.push(work)
        this.#currentWorker = work
    }

    public static Instance(work: FileWorker): FileManager {
        if (this._Instance === undefined) {
            this._Instance = new FileManager(work)
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
        this.#works.splice(index, 1)
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
    get currentWorker(): FileWorker {
        return this.#currentWorker
    }
    set currentWorker(value: FileWorker) {
        this.#currentWorker = value
    }

    get works(): Array<FileWorker> {
        return this.#works
    }

    set setWorks(value: FileWorker) {
        for (const work of this.#works) {
            if (work.id === value.id) {
                return
            }
        }
        this.#works.push(value)
    }
}
