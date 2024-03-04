import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Trending = ({ id, title, image, artists, name }) => {
  return (
    <Link to={`/album/${id}`}>
      <div className="w-full flex   h-auto pl-3 py-4  cursor-pointer ">
        <div className="flex flex-wrap w-full  gap-6  lg:my-4 ">
          <div className=" rounded-lg w-48 overflow-hidden h-56 relative ">
            <div className="w-full h-[75%]   ">
              <img
                src={image[2].link}
                alt=""
                className="object-cover w-full h-full rounded-lg "
              />
            </div>
            <div>
              <div className="absolute    top-0 left-0 w-full h-[75%] rounded-lg  hover:bg-[#00000050] transition-all duration-700  text-white">
                <div className="w-full flex items-center justify-center opacity-0 hover:opacity-100  h-full  transition-all duration-700">
                  <FaPlay />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center  ">
              <h1 className="font-semibold px-10 text-lg w-[200px] text-over truncate overflow-hidden">
                {name}
              </h1>
              <h5 className="text-sm w-[100px] text-over truncate overflow-hidden">
                {artists.map((name) => name.name)}{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Trending;
