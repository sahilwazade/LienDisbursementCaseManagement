import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-[265px]" : "ml-2"
          }`}
        >
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
