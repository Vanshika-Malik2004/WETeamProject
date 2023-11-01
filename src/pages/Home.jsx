// import zigzag from "../assets/images/zigzag.svg";
// import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import BackgroundImage from "../assets/images/background.png";
// import AboutUs from "../assets/images/concept-of-research-and-development-in-business-startup.png";
// import Affortable from "../assets/images/affortable.png";
// import EndlessPossibilities from "../assets/images/EndlessPossibilities.png";
// import EmpowerEducators from "../assets/images/EmpowerEducators.png";
// import Global from "../assets/images/global community.png";
// const qualities = [
//   { image: Affortable, heading: "Free and Accessible" },
//   { image: EndlessPossibilities, heading: "Endless Possibilities" },
//   { image: EmpowerEducators, heading: "Empower Educators" },
//   { image: Global, heading: "Global Community" },
// ];
// const Home = () => {
//   const renderFeaturesCard = (displayArray) => {
//     return (
//       <div className="grid-container-home">
//         {displayArray.map((f) => {
//           return (
//             <div className=" cards flex flex-col  shadow gap-2 p-3 h-fit items-center justify-center  rounded-sm  text-center border hover:rounded-lg hover:shadow-xl">
//               <img
//                 src={f.image}
//                 className="h-40 max-w-xs w-36 object-contain"
//               />
//               <h2 className="font-semibold text-lg">{f?.heading}</h2>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   const { googleAuth } = useContext(AuthContext);
//   return (
//     <>
//       <div id="home" className="flex flex-col w-full h-fit">
//         <div
//           className="relative bg-cover h-screen w-full"
//           style={{
//             backgroundImage: `url(${BackgroundImage})`,
//           }}
//         >
//           <div className="flex justify-center items-center flex-col opacity-80 bg-black absolute z-10  w-full top-0 left-0  h-screen">
//             <h1 className="text-white text-5xl font-bold min-w-max">
//               Where Teachers and Students Unite:
//               <br /> Learn, Teach, Thrive Together – FREE!
//             </h1>
//             <p className="text-white max-w-3xl tracking-wide text-center font-light  leading-5 my-6 text-lg">
//               Welcome to our FREE platform where passionate educators and eager
//               learners come together. We connect dedicated teachers with
//               students, providing a collaborative space to share knowledge,
//               inspire growth, and ignite academic success. Join us in shaping a
//               brighter future through accessible education
//             </p>
//             <button
//               onClick={googleAuth}
//               className=" text-white bg-transparent  text-center border transition-all duration-500 hover:scale-105 border-white px-3 py-2.5 hover:opacity-100 hover:bg-yellow-800"
//             >
//               Get Started <ArrowRightAltRoundedIcon />
//             </button>
//           </div>
//         </div>
//         {/*about us section */}
//         <div className="bg-white w-screen h-fit  flex flex-row justify-center items-center p-5 gap-12">
//           <div>
//             <h1 className=" text-5xl font-bold text-black p-3 mb-6 mt-6">
//               About us
//             </h1>
//             <p className="text-lg text-start max-w-lg mb-6">
//               We're driven by a profound belief in the power of education to
//               transform lives. Our aim is to not only build a online learning
//               platform, but a vibrant community of educators and learners,
//               united by a common purpose: to make quality education accessible
//               to all, Our story began with a simple idea: to bridge the gap
//               between talented teachers and eager students.
//               <br />
//               <br /> We understand that education shouldn't be limited by
//               barriers, be it geographical, financial, or otherwise. That's why
//               we've created a platform where teachers can host their courses and
//               connect with students around the world. <br />
//               Whether you're a teacher looking to share your expertise or a
//               student seeking knowledge, [Your EdTech Platform] is your gateway
//               to a world of learning possibilities.
//             </p>
//           </div>
//           <img src={AboutUs} className="h-1/3 w-1/3" />
//         </div>
//         {/*why us*/}
//         <div className=" w-screen h-fit  flex flex-col justify-start items-center p-5 gap-6 mt-6 mb-6">
//           <h2 className="text-5xl font-bold p-3">Why us</h2>
//           {renderFeaturesCard(qualities)}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
