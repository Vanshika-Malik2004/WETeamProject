import { useContext } from "react";
import Logo from "../assets/images/logo.svg";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { googleAuth } = useContext(AuthContext);

  return (
    <div className="">
      <div className="">
        <button onClick={googleAuth} className="">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
