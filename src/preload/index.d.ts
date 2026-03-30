import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getConfiguracion: () => Promise<any>
      guardarConfiguracion: (config: any) => Promise<void>
      getProyecto: (id_proyecto: number) => Promise<any>
      getProyectos: () => Promise<any[]>
      crearProyecto: (task: any) => Promise<void>
      getTarea: (id_tarea: number) => Promise<any>
      getTareas: () => Promise<any[]>
      crearTarea: (task: any) => Promise<void>
    }
  }
}
