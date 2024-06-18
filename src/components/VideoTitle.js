import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-56 px-36 p-10 text-white bg-gradient-to-r from-gray-900 to-transparent">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 w-1/2">{overview.length>200?overview.substring(0,200)+"...":overview}</p>
      <div className="flex">
        <button className="flex mx-2 bg-white text-black p-2 px-6 rounded-lg hover:bg-opacity-50 ">
          <FaPlay />
          Play
        </button>
        <button className="flex mx-2 bg-gray-500 p-2 px-6 bg-opacity-50 rounded-lg ">
          <CiCircleInfo />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
