import { fileUpload } from "@/menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import UserService from "UserService";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = UserService.isLoggedIn();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const NAVLIST = [
    {
      id: 1,
      label: "Input",
      url: "input",
    },
    {
      id: 2,
      label: "Form",
      url: "form",
    },
    {
      id: 3,
      label: "Table",
      url: "table",
    },
    {
      id: 4,
      label: "Button",
      url: "button",
    },
    {
      id: 5,
      label: "Accordion",
      url: "accordion",
    },
    {
      id: 6,
      label: "Modal",
      url: "modal",
    },
    {
      id: 7,
      label: "Card",
      url: "card",
    },
    {
      id: 8,
      label: "Avatar",
      url: "avatar",
    },
    {
      id: 9,
      label: fileUpload.text,
      url: fileUpload.path,
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-48 bg-sky-600 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4 text-white">
        <span className="text-2xl">Logo</span>
        <button
          onClick={toggleSidebar}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="pb-24 overflow-y-auto h-full">
        <ul className=" text-white">
          {NAVLIST?.map((i, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex font-semibold text-xl p-3 px-6 bg-sky-700"
                    : "flex font-semibold text-xl p-3 px-6  duration-300"
                }
                to={i.url}
              >
                {i.label}
              </NavLink>
            </li>
          ))}
          {isLoggedIn ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex font-semibold text-xl p-3 px-6 bg-sky-700"
                    : "flex font-semibold text-xl p-3 px-6  duration-300"
                }
                to="/"
                onClick={() => UserService.doLogout()}
              >
                Log Out
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex text-2xl p-3 px-6 bg-sky-700"
                    : "flex text-2xl p-3 px-6  duration-300"
                }
                to="/"
                onClick={() => UserService.doLogin()}
              >
                LogIn
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
