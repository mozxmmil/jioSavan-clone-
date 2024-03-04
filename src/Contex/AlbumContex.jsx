import { createContext } from "react";
export const SongContex = createContext();
import React from "react";
import { useState } from "react";

const AlbumContex = ({ children }) => {
  const [song, setsong] = useState([]);
  let [ispalying, setispalying] = useState(false);
  let [currentSong, setcurrentSong] = useState(null);
  let [searchBar, setsearchBar] = useState([]);
  const [voume, setvoume] = useState(50);

  const songplay = async (
    name,
    primaryArtists,
    duration,
    downloadUrl,
    image,
    id
  ) => {
    try {
      if (!currentSong || currentSong.id !== id) {
        if (currentSong) {
          setispalying(false);
          currentSong.audio.pause();
        }
        const newsong = new Audio(downloadUrl[4].link);
        setcurrentSong({
          name,
          primaryArtists,
          duration,
          audio: newsong,
          image: image[2].link,
          id,
        });
        setispalying(true);
        await newsong.play();
      } else {
        if (ispalying) {
          setispalying(false);
          currentSong.audio.pause();
        } else {
          setispalying(true);
          await currentSong.audio.play();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const forward = () => {
    if (currentSong) {
      const index = song.findIndex((song) => song.id === currentSong.id);
      if (index !== -1) {
        const nextIndex = (index + 1) % song.length; // To cycle back to the beginning if at the end
        const { name, primaryArtists, duration, downloadUrl, image, id } =
          song[nextIndex];
        songplay(name, primaryArtists, duration, downloadUrl, image, id);
      }
    }
  };

  const backsong = () => {
    if (currentSong) {
      const index = song.findIndex((song) => song.id === currentSong.id);
      if (index === 0) {
        const prevIndex = song.length - 1; // Go to the last song if at the beginning
        const { name, primaryArtists, duration, downloadUrl, image, id } =
          song[prevIndex];
        songplay(name, primaryArtists, duration, downloadUrl, image, id);
      } else if (index !== -1) {
        const prevIndex = index - 1;
        const { name, primaryArtists, duration, downloadUrl, image, id } =
          song[prevIndex];
        songplay(name, primaryArtists, duration, downloadUrl, image, id);
      }
    }
  };

  return (
    <div>
      <SongContex.Provider
        value={{
          song,
          setsong,
          songplay,
          ispalying,
          currentSong,
          forward,
          backsong,
          setsearchBar,
          searchBar,
          voume,
          setvoume,
        }}
      >
        {children}
      </SongContex.Provider>
    </div>
  );
};

export default AlbumContex;
