import React from "react";
import Profile from "./profile";
import SideMenu from "./sidemenu";
import Credits from "./credits";

const Sidebar = () => {
    return <div className="h-screen w-[300px] bg-sidebar flex flex-col p-5 text-primary" >
        <Profile/>
        <SideMenu/>
        <Credits/>
    </div>;
};

export default Sidebar;