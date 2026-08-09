import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { EmpSidebar } from "../components/EmpSidebar";

export const EmpLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main area */}
      <div className="flex flex-1">
        <EmpSidebar isOpen={isOpen} SetIsOpen={setIsOpen} />

        <main className="flex-1 lg:ml-72 bg-gray-100 overflow-y-auto">
          <div className="min-h-screen">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
