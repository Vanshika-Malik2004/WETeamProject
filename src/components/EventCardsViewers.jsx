// import React from "react";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import ViewEventModal from "./ViewEventModal";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// const EventCardsViewers = ({ event, educatorId }) => {
//   return (
//     <div className="bg-white w-full rounded-xl border flex justify-between flex-col  items-center space-y-16">
//       <div className="w-full space-y-2">
//         <div className="flex items-center p-5 justify-between w-full">
//           <h1 className="font-Lexend font-light text-2xl text-gray-700">
//             {event?.eventName}
//           </h1>
//         </div>
//       </div>
//       <div className="flex justify-between p-5 border-t items-center w-full bg-yellow-500 rounded-b-xl">
//         <p className="text-gray-600 text-lg font-bold">
//           <CurrencyRupeeIcon className="!text-lg text-green-600" />
//           {event.price > 0 ? event.price : "FREE"}
//         </p>
//         <div className="space-x-2 flex items-center">
//           <Link
//             to={"/booking/" + educatorId + "/" + event.eventId}
//             className=" border-slate-800 bg-transparent text-slate-800 hover:text-white hover:bg-slate-800 hover:border-0  border-2  text-sm font-Lexend font-light px-3 py-2 focus:outline-none flex items-center transition-colors rounded-md duration-300 ease-in-out"
//           >
//             Book a Slot
//           </Link>
//           <ViewEventModal event={event} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCardsViewers;
