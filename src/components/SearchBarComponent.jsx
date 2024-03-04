import React, { useContext, useEffect } from "react";
import { SongContex } from "../Contex/AlbumContex";

import svg from "/jiosavan.svg";

const SearchBarComponent = () => {
  const { searchBar, songplay } = useContext(SongContex);

  
  

  return (
    <div
    className={`w-1/2 h-1/2 fixed top-[10%] flex justify-center items-center flex-wrap gap-4 bg-white z-30 bg-opacity-50 backdrop-blur-sm ${
      searchBar && searchBar.length === 0 ? ("-translate-y-[1200px]") : "translate-y-0"
    }`}
  >
    {searchBar?.map((song, index) => (
      <div
        key={index}
        className="w-[150px] cursor-pointer"
        onClick={() => {
          songplay(
            song.name,
            song.primaryArtists,
            song.duration,
            song.downloadUrl,
            song.image,
            song.id
          );
        }}
      >
        <div>
          <img
            src={song.image[2].link}
            width={150}
            alt={`Album cover for ${song.name}`}
            className="object-cover w-full h-36"
          />
        </div>
        <div>
          <h1>{song.name}</h1>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default SearchBarComponent;
