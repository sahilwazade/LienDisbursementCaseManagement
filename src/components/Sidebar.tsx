import React from "react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`rounded-lg bg-gray-200 shadow-md transition-transform duration-300 fixed inset-y-0 left-3 bottom-3 w-1/6 p-3 transform mt-[70px] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-800 via-teal-400 to-teal-600 filter"></div>
      <div className="relative bg-white rounded-lg p-4 h-full z-10">
        Sidebar
      </div>
    </div>
  );
};

export default Sidebar;
