import React from "react";
import { GoHistory } from "react-icons/go";
import { GiLoveSong } from "react-icons/gi";
import { BiAlbum } from "react-icons/bi";
import { MdPodcasts } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="fixed ">
      <div className="">
        <h2 className="leading-[3]"> BROWSER</h2>
      </div>
      <div className="cursor-pointer">
        <h1 className="leading-loose">New Realeses</h1>
        <h1 className="leading-loose">Top Charts</h1>
        <h1 className="leading-loose">Top Playlist</h1>
        <h1 className="leading-loose">Podcast</h1>
        <h1 className="leading-loose">Top Artists</h1>
        <h1 className="leading-loose">Radio</h1>
      </div>
      <h2 className="leading-[3rem]"> LIBRARY</h2>
      <div className="cursor-pointer">
        <div className=" items-center gap-3 flex leading-loose ">
          <div>
            <GoHistory />
          </div>
          <div>
            <h1>History</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 leading-loose">
          <div>
            <GiLoveSong />
          </div>
          <div>
            <h1>Liked Song</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 leading-loose">
          <div>
            <BiAlbum />
          </div>
          <div>
            <h1>Albums</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 leading-loose">
          <div>
            <MdPodcasts />
          </div>
          <div>
            <h1>Podcasts </h1>
          </div>
        </div>
        <div className="flex items-center gap-3 leading-loose">
          <div>
            <FaPencilAlt />
          </div>
          <div>
            <h1> Artist</h1>
          </div>
        </div>
        <div className=" my-8  ">
          <div className="flex items-center gap-2 rounded-xl w-full  h-9  px-1 border-2 border-green-400    text-emerald-400 hover:text-green-500 hover:border-green-500 duration-700">
            <div>
              <AiOutlinePlus />
            </div>
            <div className="text-sm">New Playlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
