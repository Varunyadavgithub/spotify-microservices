import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="bg-black text-white p-2 rounded-2xl hover:bg-gray-800 transition cursor-pointer"
          >
            <FaArrowLeft size={16} />
          </button>

          <button
            onClick={() => navigate(1)}
            className="bg-black text-white p-2 rounded-2xl hover:bg-gray-800 transition cursor-pointer"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <p className="px-4 py-1 cursor-pointer bg-white text-black text-[15px] rounded-full hidden md:block">
            Explore Premium
          </p>
          <p className="px-4 py-1 cursor-pointer bg-white text-black text-[15px] rounded-full hidden md:block">
            Install App
          </p>
          <p className="flex gap-2 items-center justify-center px-4 py-1 cursor-pointer bg-white text-black text-[15px] rounded-full">
            Logout
            <LuLogOut />
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
          Music
        </p>
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
          Podcasts
        </p>
        <p
          className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer md:hidden"
          onClick={() => navigate("/playlist")}
        >
          PlayList
        </p>
      </div>
    </>
  );
};

export default Navbar;
