import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function NuevoProyecto(): React.ReactElement {
    const navigate = useNavigate()
    const [ proyecto, setProyecto] = useState ({
        nombre_proyecto: '',
        descripcion_proyecto: '',
        fecha_inicio_proyecto: '',
        fecha_limite_proyecto: '',
        horas_estimadas_proyecto: 0,
        color_proyecto: ''
    })

    const guardarProyecto = async() => {
        if(!proyecto.nombre_proyecto) return
        await window.api.crearProyecto({
            ...proyecto,creado_en:new Date().toISOString()
        })
        navigate('/proyectos')
    }

    return(
    <div className="p-6 h-full bg-[#13131f] text-[#e2e8f0]">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Nuevo Proyecto</h1>
            <button 
                onClick={() => navigate('/proyectos')}
                className="border border-[#4a5568] hover:bg-[#4a5568] px-3 py-1 rounded">
                ← Volver
            </button>
        </div>
        <div className="max-w-2xl flex flex-col gap-4">
            <input
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0]"
                placeholder="Nombre del Proyecto"
                type="text"
                value={proyecto.nombre_proyecto}
                onChange={(e) => setProyecto({...proyecto, nombre_proyecto: e.target.value})}
            />
            <input
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0]"
                placeholder="Descripción del proyecto"
                type="text"
                value={proyecto.descripcion_proyecto}
                onChange={(e) => setProyecto({...proyecto, descripcion_proyecto: e.target.value})}
            />
            <input
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0]"
                placeholder="Fecha de inicio"
                type="date"
                value={proyecto.fecha_inicio_proyecto}
                onChange={(e) => setProyecto({...proyecto, fecha_inicio_proyecto: e.target.value})}
            />
            <input
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0]"
                placeholder="Fecha límite"
                type="date"
                value={proyecto.fecha_limite_proyecto}
                onChange={(e) => setProyecto({...proyecto, fecha_limite_proyecto: e.target.value})}
            />
            <input
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0]"
                placeholder="Horas estimadas"
                type="number"
                value={proyecto.horas_estimadas_proyecto}
                onChange={(e) => setProyecto({...proyecto, horas_estimadas_proyecto: parseInt(e.target.value)})}
            />
            <input
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0]"
                placeholder="Color (ej: #6366f1)"
                type="text"
                value={proyecto.color_proyecto}
                onChange={(e) => setProyecto({...proyecto, color_proyecto: e.target.value})}
            />
            <button 
                onClick={guardarProyecto}
                className="bg-[#6366f1] hover:bg-[#818cf8] px-4 py-2 rounded text-white font-semibold">
                Guardar Proyecto
            </button>
        </div>
    </div>
);
}

export default NuevoProyecto;