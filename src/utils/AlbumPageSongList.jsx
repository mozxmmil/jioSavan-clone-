import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoPlay } from "react-icons/go";
import { useContext } from "react";
import { SongContex } from "../Contex/AlbumContex";

const AlbumPageSongList = ({
  name,
  primaryArtists,
  duration,
  downloadUrl,
  image,
  id,
}) => {
  const { songplay, ispalying, currentSong } = useContext(SongContex);
  const converter = (duration) => {
    return ` ${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
  };
  return (
    <div
      onClick={() =>
        songplay(name, primaryArtists, duration, downloadUrl, image, id)
      }
      className=" cursor-pointer flex   w-[60%] mx-auto items-center rounded-md justify-between mt-3 hover:shadow-lg text-2xl px-4 hover:bg-white "
    >
      <div className="flex items-center gap-5 ">
        <GoPlay />
        <div className="w-64 ">
          <h1
            className={`text-xl ${
              id === currentSong?.id ? "text-green-300" : ""
            } text-nowrap truncate `}
          >
            {name}
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-sm w-96">{primaryArtists} </h1>
      </div>
      <div className="flex items-center  w-[7%] justify-between  font-light gap- ">
        <FaRegHeart />
        <span className=" text-sm ">{converter(duration)}</span>
      </div>
    </div>
  );
};

export default AlbumPageSongList;
