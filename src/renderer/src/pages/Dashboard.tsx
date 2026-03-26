import React from 'react';
import { useEffect, useState } from 'react';
import { Flame, Clock3 } from 'lucide-react';

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

function Dashboard(): React.ReactElement {

    const [configuracion, setConfiguracion] = useState<Configuracion | null>(null)

    useEffect(() => {
        window.api.getConfiguracion().then((data) => {
            console.log('configuracion: ', data)
            setConfiguracion(data)
        })
    },[])

    return (
        <div className='p-6 h-full bg-[#13131f] text-[#e2e8f0]'>
            <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4a]'>
                    <p className=' text-sm text-[#94a3b8] mb-2'>Racha Actual</p>
                    <p className='text-2xl font-bold flex items-center gap-2'><Flame /> 0 días</p>
                </div>
                <div className='bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4a]'>
                    <p className=' text-sm text-[#94a3b8] mb-2'>Proxima sesion</p>
                    <p className='text-lg font-semibold flex items-center gap-2'>
                        <Clock3 /> {configuracion ? configuracion.horario_inicio : 'no configurado'}
                    </p>
                </div>
                <div className='bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4a]'>
                    <p className=' text-sm text-[#94a3b8] mb-2'>Horas esta Semana</p>
                    <p className='text-lg font-semibold flex items-center gap-2'><Clock3 /> 0 horas trabajadas</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='col-span-2 bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4a]'>
                    <p className=' text-lg text-semibold mb-4'>Proyecto activo</p>
                </div>
                <div className='bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4a]'>
                    <p className=' text-lg text-semibold mb-4'>Tareas pendientes</p>
                </div>
            </div>
            <div className='gap-2 flex flex-wrap'>
                
                <div className=' w-full mb-2'>
                    <p className="text-sm text-[#94a3b8] mb-3">Tecnologías esta semana</p>
                </div>
                <span className='px-3 py-1 rounded-full text-sm bg-[#6366f1] text-white'>
                    React/ TypeScript
                </span>
                <span className='px-3 py-1 rounded-full text-sm bg-[#6366f1] text-white'>
                    Python/Django
                </span>
                <span className='px-3 py-1 rounded-full text-sm bg-[#6366f1] text-white'>
                    Html
                </span>
            </div>
        </div>
    );
}
export default Dashboard;