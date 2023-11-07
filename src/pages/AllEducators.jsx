import React, { useContext } from "react";
import { EventContext } from "../contexts/EventContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarForDashboard from "../components/NavbarForDashboard";
import Elearning from "../assets/images/Elearning.png";
import { Margin } from "@mui/icons-material";
const AllEducators = () => {
  const { fetchAllEducators } = useContext(EventContext);
  const [allEducatorsList, setAllEducatorsList] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      const response = await fetchAllEducators();
      setAllEducatorsList(response);
      console.log(response);
    };
    fetchAll();
  }, []);
  const renderFeaturesCard = (educators) => {
    return (

      <div className="grid-container">
        
        {educators.map((f) => {
          return (
            <div className="cards  relative flex flex-col gap-2 px-3 py-6  h-fit items-start justify-center  rounded-md text-center bg-white">
              <div className="absolute inset-0 rounded-t-md w-full h-1/3 bg-yellow-500 -z-2"></div>
              <img
                className="rounded-full z-30 w-1/6 h-1/6"
                src={f.profilePhoto}
              />
              <h2 className="font-semibold text-slate-800 text-lg">
                {f?.name}
              </h2>
              <div className="text-gray-600 relative w-full">
                <p className="text-start">{f?.email}</p>
                <Link to={"/educators/" + f.userId}>
                  <button className="absolute bottom-0 right-0 border-slate-800 bg-transparent text-slate-800 px-4 py-2 hover:text-white hover:bg-slate-800 hover:border-0 border-2 text-sm font-Lexend font-light focus:outline-none flex items-center transition-colors rounded-md duration-300 ease-in-out">
                    Profile
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    );
  };
  return (
    <div className="background-container3 min-h-screen">
      <NavbarForDashboard />
  
      <div className="  flex flex-col justify-center items-center p-5 m-6 gap-1">
      <h1 className="text-4xl font-bold text-black-400 p-1 mb-6 mt-6" >
        Community People
      </h1>
      </div>

      <div>{renderFeaturesCard(allEducatorsList)}</div>
    </div>
  );
};

export default AllEducators;
