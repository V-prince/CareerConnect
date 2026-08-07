import { Sidebar } from "../components/Sidebar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { TopHeader } from "../components/TopHeader";

export const MainSidebar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="min-h-screen  bg-blue-50 flex ">
      <Sidebar isOpen={isOpen} SetIsOpen={SetIsOpen} />
      <main className="flex-1 lg:ml-72 bg-blue-50 overflow-y-auto ">
        <TopHeader isOpen={isOpen} SetIsOpen={SetIsOpen} />
        <Outlet />
      </main>
    </div>
  );
};
