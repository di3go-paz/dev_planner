import MainLayout from './layouts/MainLayouts'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Proyectos from './pages/Proyectos'
import React from 'react'
import NuevoProyecto from './pages/NuevoProyecto'
import DetallecProyecto from './pages/DetalleProyecto'
import SesionActiva from './pages/SesionActiva'
import CheckList from './pages/CheckList'
import ResumenSesion from './pages/ResumenSesion'
import Configuracion from './pages/Configuracion'


function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='proyectos' element={<Proyectos />} />
        <Route path='nuevoproyecto' element={<NuevoProyecto />} />
        <Route path='detalleproyecto' element={<DetallecProyecto />} />
        <Route path='sesionactiva' element={<SesionActiva />} />
        <Route path='checklistcierre' element={<CheckList />} />
        <Route path='resumensesion' element={<ResumenSesion />} />
        <Route path='configuracion' element={<Configuracion />} />
      </Route> 
    </Routes>
    </>
  )
}

export default App
