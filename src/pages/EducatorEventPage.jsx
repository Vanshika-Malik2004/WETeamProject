// import React, { useContext } from "react";
// import { EventContext } from "../contexts/EventContext";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import EventCardsViewers from "../components/EventCardsViewers";
// import { Link } from "react-router-dom";
// // import { rating } from "../components/rating.js";
// const EducatorEventPage = () => {
//   const { fetchEducator, fetchEducatorInfo } = useContext(EventContext);
//   const [events, setEvents] = useState([]);
//   const [educatorName, setEducatorName] = useState("");
//   const { educatorId } = useParams();
//   useEffect(() => {
//     console.log(educatorId);
//     const temp = async () => {
//       const response = await fetchEducator(educatorId);
//       const response2 = await fetchEducatorInfo(educatorId);
//       setEducatorName(response2.name);
//       setEvents(response);
//     };
//     temp();
//   }, []);
//   return (
//     <>
//       <div className="bg-slate-800 min-h-screen px-16 py-20">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="font-Lexend font-semibold tracking-tighter text-white text-5xl">
//             {educatorName}
//           </h1>
//           <Link
//             to="/allEducators"
//             className="flex items-center border-yellow-500 border-2 text-yellow-500  px-4 py-2 rounded-lg hover:scale-95 duration-300 focus:outline-none transition font-Lexend font-light"
//           >
//             <button>Back to home Page</button>
//           </Link>
//         </div>
//         <h2 className="mb-20 text-slate-500 text-2xl">
//           {`Scheduled meetings(${events.length})`}
//         </h2>
//         <div className="w-full grid grid-cols-2 gap-x-20 gap-y-8">
//           {events &&
//             events.map((event) => (
//               <EventCardsViewers
//                 event={event}
//                 key={event.eventId}
//                 educatorId={educatorId}
//               />
//             ))}
//         </div>
//         {/* <Rating value={product.rating} text={`${product.numReviews} reviews`} /> */}
//       </div>
//     </>
//   );
// };

// export default EducatorEventPage;
