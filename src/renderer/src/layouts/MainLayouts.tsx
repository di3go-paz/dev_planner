import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@renderer/components/SideBar";
function MainLayout(): React.ReactElement {
    return(
        <div className="flex h-full">
            <SideBar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;