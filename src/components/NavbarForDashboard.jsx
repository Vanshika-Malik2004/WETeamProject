import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import School from "@mui/icons-material/School";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../contexts/AuthContext";

const NavbarForDashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="fixed top-0 z-10 bg-black  h-fit w-full ackdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="max-w-1xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-white font-semibold">
            <School /> Ted-Ed</span>
          <div className="flex space-x-5 text-white">
            <Link
              to="/dashboard"
              className="text-lg hover:bg-purple-500 p-2 rounded focus:bg-purple-500"
            >
              Dashboard
            </Link>
            <Link
              to="/allEducators"
              className="text-lg hover:bg-purple-500 p-2 rounded"
            >
              Community
            </Link>
            <Link
              to="/about"
              className="text-lg hover:bg-purple-500 p-2 rounded"
            >
              About
            </Link>
            <button
              onClick={logout}
              className="flex items-center border-purple-500 border-2 text-white-500  px-4 py-2 rounded-lg hover:scale-95 duration-300 focus:outline-none transition font-Lexend font-light"
            >
              <LogoutIcon />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarForDashboard;
