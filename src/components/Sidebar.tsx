import React from "react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`bg-gray-200 mt-[68px] p-4 shadow-md transition-transform duration-300 fixed inset-y-0 left-0 w-1/6 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h2 className="text-lg font-semibold">Sidebar</h2>
      {/* Add sidebar links here */}
    </aside>
  );
};

export default Sidebar;
