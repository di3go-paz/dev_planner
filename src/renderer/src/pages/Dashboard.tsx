import React from 'react';
import { Flame, Clock3 } from 'lucide-react';

function Dashboard(): React.ReactElement {
    return (
        <div className='p-6 h-full bg-[#13131f] text-[#e2e8f0]'>
            <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4a]'>
                    <p className=' text-sm text-[#94a3b8] mb-2'>Racha Actual</p>
                    <p className='text-2xl font-bold flex items-center gap-2'><Flame /> 0 días</p>
                </div>
                <div className='bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4a]'>
                    <p className=' text-sm text-[#94a3b8] mb-2'>Proxima sesion</p>
                    <p className='text-lg font-semibold flex items-center gap-2'><Clock3 /> no configurada</p>
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
            <div>

            </div>
        </div>
    );
}
export default Dashboard;