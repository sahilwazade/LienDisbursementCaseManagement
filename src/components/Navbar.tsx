import React, { useState, useRef, useEffect } from "react";
import ProfileImage from "../assets/icon-5359553_1280.png";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between p-3 z-10">
      <h1 className="text-xl">Navbar</h1>

      <div className="relative flex items-center" ref={dropdownRef}>
        <button
          className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white"
          onClick={toggleDropdown}
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 top-11 w-48 bg-gray-700 rounded-md shadow-lg">
            <ul className="py-2">
              <li>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                  onClick={handleLinkClick}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                  onClick={handleLinkClick}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
