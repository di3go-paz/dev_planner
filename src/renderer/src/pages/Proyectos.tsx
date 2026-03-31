import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Proyectos(): React.ReactElement {
    const [ proyectos, setProyectos ] = useState<any[]>([])
    const [ busqueda, setBusqueda ] = useState('')
    const [ filtro, setFiltro ] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        window.api.getProyectos().then((data) => {
            setProyectos(data)
        })
    }, [])

return(
    <div className="p-6 h-full bg-[#13131f] text-[#e2e8f0]">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Proyectos</h1>
            <button 
                onClick={() => navigate('/nuevoproyecto')}
                className="bg-[#6366f1] hover:bg-[#818cf8] px-4 py-2 rounded text-white font-semibold">
                + Nuevo Proyecto
            </button>
        </div>
        <div className="flex gap-4 mb-6">
            <input
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0] flex-1"
                placeholder="Buscar proyecto..."
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <select 
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded px-3 py-2 text-[#e2e8f0]"
                value={filtro} 
                onChange={(e) => setFiltro(e.target.value)}>
                <option value="">Todos</option>
                <option value="activo">Activo</option>
                <option value="completado">Completado</option>
            </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {proyectos
                .filter((proyecto) => proyecto.nombre_proyecto.toLowerCase().includes(busqueda.toLowerCase()))
                .map((proyecto) => (
                    <div key={proyecto.id_proyecto} className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4a]">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold">{proyecto.nombre_proyecto}</h2>
                            <span className="text-xs px-2 py-1 rounded-full bg-[#6366f1]">{proyecto.estado || 'activo'}</span>
                        </div>
                        <p className="text-[#94a3b8] text-sm mb-3">{proyecto.descripcion_proyecto}</p>
                        <div className="flex justify-end gap-2 mt-4">
                            <button className="border border-[#2a2a4a] px-3 py-1 rounded text-sm hover:bg-[#2a2a4a]">Ver más</button>
                            <button className="bg-[#6366f1] hover:bg-[#818cf8] px-3 py-1 rounded text-sm text-white">Trabajar ▶</button>
                        </div>
                    </div>
                ))}
        </div>
    </div>
);
}

export default Proyectos;