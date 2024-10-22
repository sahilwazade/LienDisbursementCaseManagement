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
      <Navbar />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <button
          type="button"
          className={`text-white bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 
    hover:bg-gradient-to-br font-medium rounded-full text-sm p-2.5 text-center top-[17%] transform -translate-y-1/2 transition-all duration-300 border-4 border-green-50 fixed
    ${isSidebarOpen ? "left-[245px]" : "left-[2px]"}`}
          onClick={toggleSidebar}
        >
          <div className="transition-transform duration-500 ease-in-out transform">
            {isSidebarOpen ? (
              <svg
                className="w-4 h-4 rotate-180 transition-transform duration-500 ease-in-out"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 rotate-180 transition-transform duration-500 ease-in-out"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0L5 1m-4 4l4 4"
                />
              </svg>
            )}
          </div>
        </button>
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "ml-72" : "ml-14"
          }`}
        >
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
