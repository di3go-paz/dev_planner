import React from "react";
import { useState, useEffect } from "react";

interface Configuracion {
    id_configuracion: number
    horario_inicio: string
    horario_fin: string
    duracion_pomodoro: number
    duracion_descanso: number
    tiempo_aviso: number
    max_postergacion: number
    aviso_fin_pomodoro: number
    aviso_fin_descanso: number
}

function Configuracion(): React.ReactElement {
    
    const [ configuracion, setConfiguracion] = useState<Configuracion | null>(null)
    const [ editando, setEditando] = useState(false)

    useEffect(() => {
        window.api.getConfiguracion().then((data) => {
            setConfiguracion(data)
        })
    }, [])

    const guardarCambios = async () => {
        if (!configuracion) return
        await window.api.guardarConfiguracion(configuracion)
        setEditando(false)
        alert('Configuracion Guardar')
    }

    return(
        <div className="p-6 h-full bg-[#13131f] text-[#e2e8f0]">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Configuración</h1>
                <button onClick={() => setEditando(!editando)} className="border border-[#4a5568] hover:bg-[#4a5568] px-3 py-1 rounded">
                    {editando ? 'Cancelar' : 'Editar'}
                </button>
            </div>
            <p className="text-sm text-[#94a3b8] mb-3 mt-6">HORARIO</p>
            <div className="grid grid-cols-2 gap-4">
                <label htmlFor="hinicio">Hora de inicio</label>
                <input
                placeholder="Ej: 19:00"
                 className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] disabled:opacity-50 w-full"
                 id="hinicio"
                 type="text"
                 disabled={!editando}
                 value={configuracion?.horario_inicio || ''}
                 onChange={(e) => setConfiguracion({...configuracion!, horario_inicio: e.target.value})} />
                <label htmlFor="hfin">Hora de Fin</label>
                <input
                placeholder="Ej: 21:00"
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] disabled:opacity-50 w-full"
                 id="hfin"
                 type="text"
                 disabled={!editando}
                 value={configuracion?.horario_fin || ''}
                 onChange={(e) => setConfiguracion({...configuracion!, horario_fin: e.target.value})} />
            </div>
            <p className="text-sm text-[#94a3b8] mb-3 mt-6">POMODORO</p>
            <div className="grid grid-cols-2 gap-4">
                
                <label htmlFor="duracion_trabajo">Tiempo de Trabajo</label>
                <input
                placeholder="Recomendado 25 min."
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] disabled:opacity-50 w-full" 
                id="duracion_trabajo" 
                type="text" 
                disabled={!editando}
                value={configuracion?.duracion_pomodoro || ''}
                onChange={(e) => setConfiguracion({...configuracion!, duracion_pomodoro: parseInt(e.target.value) || 0})}
                />
                <label htmlFor="duracion_descanso">Tiempo de Descanso</label>
                <input
                placeholder="Recomendado 5 min."
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] disabled:opacity-50 w-full"
                id="duracion_descanso" 
                type="text" 
                disabled={!editando}
                value={configuracion?.duracion_descanso || ''}
                onChange={(e) => setConfiguracion({...configuracion!, duracion_descanso: parseInt(e.target.value) || 0})}
                />
                <label htmlFor="aviso_descanso">Aviso fin de descanso</label>
                <input
                placeholder="Recomendado 1 min."
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] disabled:opacity-50 w-full" 
                id="aviso_descanso" 
                type="text"
                disabled={!editando}
                value={configuracion?.aviso_fin_descanso || ''}
                onChange={(e) => setConfiguracion({...configuracion!, aviso_fin_descanso: parseInt(e.target.value) || 0})}
                />
                <label htmlFor="aviso_pomodoro">Aviso fin de tiempo de trabajo</label>
                <input
                placeholder="Recomendado 2 min."
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] disabled:opacity-50 w-full"
                id="aviso_pomodoro"
                type="text"
                disabled={!editando}
                value={configuracion?.aviso_fin_pomodoro || ''}
                onChange={(e) => setConfiguracion({...configuracion!, aviso_fin_pomodoro: parseInt(e.target.value) || 0})}
                />
            </div>
            <p className="text-sm text-[#94a3b8] mb-3 mt-6">ARRANQUE FORZADO</p>
            <div className="grid grid-cols-2 gap-4">
                
                <label htmlFor="descando">Tiempo de aviso</label>
                <input
                placeholder="Recomendado 15 min."
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] disabled:opacity-50 w-full"
                id="descanso"
                type="text"
                disabled={!editando}
                value={configuracion?.tiempo_aviso || ''}
                onChange={(e) => setConfiguracion({...configuracion!, tiempo_aviso: parseInt(e.target.value) || 0})}
                />
                <label htmlFor="postergaciones">N° de postergaciones</label>
                <input
                placeholder="Recomendado 2 veces"
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] disabled:opacity-50 w-full"
                id="postergaciones"
                type="text"
                disabled={!editando}
                value={configuracion?.max_postergacion || ""}
                onChange={(e) => setConfiguracion({...configuracion!, max_postergacion: parseInt(e.target.value) || 0})}
                />
            </div>
            {editando && (<button disabled={!editando} onClick={guardarCambios} className="bg-[#6366f1] hover:bg-[#818cf8] px-4 py-2 rounded mt-6 text-white font-semibold">Guardar</button>)}
        </div>
    );
}

export default Configuracion;