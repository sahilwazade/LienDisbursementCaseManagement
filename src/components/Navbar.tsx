interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-3 items-center z-10">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 hover:bg-gradient-to-br  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={toggleSidebar}
      >
        <svg
          className="w-4 h-4"
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
        <span className="sr-only">Icon description</span>
      </button>
      <h1 className="text-xl">My Application</h1>
    </nav>
  );
};

export default Navbar;
