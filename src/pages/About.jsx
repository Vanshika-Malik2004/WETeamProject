import React, { useContext } from "react";
import { EventContext } from "../contexts/EventContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarForDashboard from "../components/NavbarForDashboard";
import Elearning from "../assets/images/Elearning.png";
import { Margin } from "@mui/icons-material";
const About = () => {

  return (
    <div className="background-container2 min-h-screen">
      <NavbarForDashboard />
  
      <div className="w-screen  flex flex-row justify-center items-center p-5 m-6 gap-1">
        
        <div>
          <h1 className=" text-4xl font-bold text-yellow-500 p-3 mb-6 mt-6">
            Learning from the best
          </h1>
          <p className="text-lg text-black text-start max-w-lg mb-6">
            At [Your EdTech Platform], we are proud to host a diverse community
            of passionate educators who are dedicated to sharing their knowledge
            and expertise with learners from all walks of life.
            <br /> Our educators come from various fields, bringing real-world
            experience and a commitment to quality education to our platform.
            Explore their profiles below to discover the educators who will
            guide you on your learning journey.
          </p>
        </div>
        <img src={Elearning} />
      </div>
    </div>
  );
};

export default About;
