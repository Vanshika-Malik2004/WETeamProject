import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";
import Calendar from "react-calendar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "react-calendar/dist/Calendar.css";
import BookingTimeContainer from "../components/BookingTimeContainer";
import NavbarForDashboard from "../components/NavbarForDashboard";

const Booking = () => {
  const [date, setDate] = useState();

  const { userId, eventId } = useParams();

  const { data, fetchEventData } = useContext(EventContext);

  useEffect(() => {
    const getData = async () => {
      await fetchEventData(userId, eventId);
    };
    getData();
  }, []);

  const tileDisabled = ({ date: myDate }) => {
    return myDate < new Date();
  };

  return (

    <div className="background-booking min-h-screen ">
    <NavbarForDashboard />
    <div className="px-0 py-0" >
      <div className="flex flex-col justify-between items-center mb-1">
        <h1 className="font-Lexend font-semibold tracking-tighter text-solid-500 text-5xl" style={{marginTop: 2 + 'em'}} >
          Book A Slot
        </h1>
        <div
      id="booking"
      className="flex items-center justify-center h-screen mx-auto"
    >
      <div className="w-[80%] bg-white  w-fit transition-all duration-300 ease-in-out  font-Lexend shadow-custom rounded-xl h-[70%] flex items-center justify-between ">
        <div className="w-[25%] p-10 bg-slate-800 h-full rounded-tl-xl rounded-bl-xl">
          <img
            src={data?.profilePhoto}
            alt="avatar"
            className="h-14 w-14 rounded-full mb-3"
          />
          <h1 className="text-2xl font-medium text-white/90">{data?.name}</h1>
          <p className="text-base text-white/80">{data?.email}</p>
          <div className="mt-10 space-y-2">
            <h2 className="text-white text-xl capitalize">{data?.eventName}</h2>
            <p className="text-white/90 font-light text-sm break-words">
              {data?.description}
            </p>
            <div className="flex w-full items-center text-secondary-300">
              <AccessTimeIcon className="mr-2 t" />
              <p className="font-normal text-xl">{data?.duration}</p>
            </div>
          </div>
        </div>
        <div className="w-[75%] flex overflow-y-scroll   items-start p-10 h-full rounded-tr-xl rounded-br-xl">
          <div
            className={`  ${
              date ? "w-[60%] border-r-2 pr-2" : "w-full"
            } transition-all duration-300 ease-in-out`}
          >
            <h1 className="text-2xl font-bold mb-3">When should we meet</h1>
            <Calendar
              value={date}
              onChange={setDate}
              tileDisabled={tileDisabled}
            />
          </div>
          {date && (
            <BookingTimeContainer
              daysData={data?.daysData}
              date={date}
              data={data}
            />
          )}
        </div>
      </div>
    </div>

      </div>

    </div>
  </div>
    
  );
};

export default Booking;
