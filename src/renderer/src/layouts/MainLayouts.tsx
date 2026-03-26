import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@renderer/components/SideBar";
function MainLayout(): React.ReactElement {
    return(
        <div className="app">
            <SideBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;