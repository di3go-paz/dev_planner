import React from "react";
import { Link } from "react-router-dom";

function SideBar(): React.ReactElement {
    return(
        <div>
            <Link to = '/'>DashBoard</Link>
            <Link to='proyectos'>proyectos</Link>
            <Link to='configuracion'>Configuracion</Link>
        </div>
    );
}
export default SideBar;