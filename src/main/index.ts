import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import db, { getConfiguracion, getProyectos, guardarConfiguracion, getProyecto, crearProyecto, crearTarea, getTarea, getTareas } from './database/db'


function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}


app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')


  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  ipcMain.handle('get-configuracion', async () => {
    return getConfiguracion()
  })

  ipcMain.handle('guardar-configuracion', async (_, config) => {
    return guardarConfiguracion(config)
  })
  
  ipcMain.handle('get-proyectos', async () => {
    return getProyectos()
  })

  ipcMain.handle('get-proyecto', async (_, id_proyecto) => {
    return getProyecto(id_proyecto)
  })

  ipcMain.handle('crear-tarea', async (_, tarea) => {
    return crearTarea(tarea)
  })
  
  ipcMain.handle('get-tarea', async (_, id_tarea) => {
    return getTarea(id_tarea)
  })

  ipcMain.handle('get-tareas', async () => {
    return getTareas()
  })

  ipcMain.handle('crear-proyecto', async (_, project) => {
    return crearProyecto(project)
  })
  createWindow()

  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


