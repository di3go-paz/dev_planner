import React from "react";
import { Link } from "react-router-dom";

function SideBar(): React.ReactElement {
    return(
        <div className="w-64 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] h-full p-4 text-[#e2e8f0] flex flex-col justify-start border-r border-[#2a2a4a]">
            <header>
                <h1 className="text-xl font-bold mb-8">Dev Planner</h1>
            </header>
            <nav className="gap-2 flex flex-col">
                <Link className="block px-4 py-2 rounded-lg mb-1 hover:bg-[#6366f1]" to = '/'>DashBoard</Link>
                <Link className="block px-4 py-2 rounded-lg mb-1 hover:bg-[#6366f1]" to='proyectos'>proyectos</Link>
                <Link className="block px-4 py-2 rounded-lg mb-1 hover:bg-[#6366f1]" to='configuracion'>Configuracion</Link>
            </nav>
            <footer>

            </footer>
        </div>
    );
}
export default SideBar;