import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import PlayListCard from "./PlayListCard";
import { CiGlobe } from "react-icons/ci";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          className="flex items-center gap-3 pl-8 p-2 rounded-lg shadow-md cursor-pointer hover:bg-[#ffffff26]"
          onClick={() => navigate("/")}
        >
          <FaHome /> <p className="font-bold">Home</p>
        </div>
        <div
          className="flex items-center gap-3 pl-8 p-2 rounded-lg shadow-md cursor-pointer hover:bg-[#ffffff26]"
          onClick={() => navigate("/search")}
        >
          <IoSearch /> <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GiHamburgerMenu />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <FaArrowRight />
            <FaPlus />
          </div>
        </div>
        <div onClick={() => navigate("/playlist")}>
          <PlayListCard />
        </div>
        <div className="p-4 m-2 bg-[#121212] rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you update on new episodes</p>
          <button className="flex items-center justify-center cursor-pointer gap-2 px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
            <CiGlobe size={25} /> Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
