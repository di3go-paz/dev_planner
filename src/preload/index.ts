import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { crearProyecto, crearTarea, getProyecto, getProyectos, guardarConfiguracion, getTarea, getTareas} from '../main/database/db'

// Custom APIs for renderer
const api = {
  getConfiguracion: () => ipcRenderer.invoke('get-configuracion'),
  guardarConfiguracion: (config: any) => ipcRenderer.invoke('guardar-configuracion', config),
  getProyecto: (id_proyecto: any) => ipcRenderer.invoke('get-proyecto', id_proyecto),
  getProyectos: () => ipcRenderer.invoke('get-proyectos'),
  crearProyecto: (project: any) => ipcRenderer.invoke('crear-proyecto', project),
  getTarea: (id_tarea: any) => ipcRenderer.invoke('get-tarea', id_tarea),
  getTareas: () => ipcRenderer.invoke('get-tareas'),
  crearTarea: (task: any) => ipcRenderer.invoke('crear-tarea', task)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
