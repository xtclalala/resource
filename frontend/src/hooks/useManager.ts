import { FileManager } from '@/lib/FileManager'
import {WorkerBuilder} from "@/lib/Builder";

const useManager = () => {
    const builder = WorkerBuilder.Instance()
    const manager = FileManager.Instance()

}
