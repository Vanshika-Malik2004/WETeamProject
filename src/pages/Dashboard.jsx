// import { useContext } from "react";
// import { EventContext } from "../contexts/EventContext";
// import EventCard from "../components/EventCard";
// import CreateEventModal from "../components/CreateEventModal";
// import { AuthContext } from "../contexts/AuthContext";
// import LogoutIcon from "@mui/icons-material/Logout";
// import NavbarForDashboard from "../components/NavbarForDashboard";
// import rainbowRays from "../assets/images/rainbowRays.png";
// const Dashboard = () => {
//   const { events } = useContext(EventContext);
//   const { logout } = useContext(AuthContext);
//   return (
//     <div className="bg-slate-800 min-h-screen">
//       <NavbarForDashboard />
//       <div className="px-16 py-20">
//         <div className="flex justify-between items-center mb-20">
//           <h1 className="font-Lexend font-semibold tracking-tighter text-yellow-500 text-5xl">
//             Your meetings ({events?.length})
//           </h1>
//           <div className="flex items-center justify-between space-x-4">
//             <CreateEventModal />
//             <button
//               onClick={logout}
//               className="flex items-center border-yellow-500 border-2 text-yellow-500  px-4 py-2 rounded-lg hover:scale-95 duration-300 focus:outline-none transition font-Lexend font-light"
//             >
//               <LogoutIcon />
//               Logout
//             </button>
//           </div>
//         </div>
//         <div className="w-full grid grid-cols-2 gap-x-20 gap-y-8">
//           {events &&
//             events.map((event) => (
//               <EventCard event={event} key={event.eventId} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
