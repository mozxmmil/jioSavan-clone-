import React, { useEffect, useRef } from "react";
import { FaForward } from "react-icons/fa";
import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import { VolumeContainer } from "./VolumePrgressbar";
import { useContext } from "react";
import { SongContex } from "../Contex/AlbumContex";

const Footer = () => {
  const { songplay, ispalying, currentSong, forward, backsong,voume, setvoume } =
    useContext(SongContex);
  
  const [value, setvalue] = useState(false);
  const [play, setplay] = useState(false);
  console.log(play)
  const change = () => {
    if (play == false) setplay(true);
    else setplay(false);
  };
  
  const sliderUseRef = useRef();

  useEffect(() => {
    if (currentSong) {
      const audioElement = currentSong.audio;
      const handle = () => {
        const duration = audioElement.duration;
        const currentTime = audioElement.currentTime; // Corrected to currentTime
        const newTime = (currentTime / duration) * 100;
        sliderUseRef.current.value = newTime;
      };
      const nextsong = () => backsong();
      audioElement.addEventListener("timeupdate", handle);
      audioElement.addEventListener("ended", nextsong);

      return () => {
        audioElement.removeEventListener("timeupdate", handle); // RemovedEventListener instead of addEventListener
        audioElement.addEventListener("ended", nextsong);
      };
    }
  }, [currentSong]);

  const handleOnChange = (e) => {
    const value = parseFloat(e.target.value);
    const newTimeLine = (value / 100) * currentSong.audio.duration;
    currentSong.audio.currentTime = newTimeLine;
  };
  function downloadMusic(url, fileName) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.blob();
    })
    .then(blob => {
        // Create a temporary anchor element
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = fileName;

        // Programmatically click the anchor element to trigger the download
        a.click();

        // Clean up resources
        window.URL.revokeObjectURL(a.href);
    })
    .catch(error => {
        console.error('Error downloading music:', error);
    });
}

  return (
    <footer>
      <div className=" footer bottom-0 bg  fixed  flex left-0 right-0 flex-col">
        <input
          className=" h-[5px] w-full bg-green-400 range"
          type="range"
          name="music"
          id="music"
          max={100}
          min={0}
          value={0}
          step={0.1}
          ref={sliderUseRef}
          onChange={handleOnChange}
        />
        <div className="flex items-center justify-between px-4 py-4 ">
          <div className=" flex gap-4">
            <div>
              <img src={currentSong?.image} alt="" width={40} />
            </div>
            <div className="  flex-col hidden lg:block">
              <div className="w-8 ">
                <span className="font-semibold text-base text-nowrap truncate">
                  {currentSong?.name}
                </span>
              </div>
              <div className="w-24">
                <p className=" text-base text-nowrap truncate">
                  {currentSong?.primaryArtists}
                </p>
              </div>
            </div>
          </div>
          <div className=" text-black ">
            <div className="flex gap-5 lg:text-2xl lg:gap-8 lg:w-[20vw]  ">
              <BiRepeat className="cursor-pointer" />

              <IoMdSkipBackward
                onClick={() => {
                  backsong();
                }}
                className="cursor-pointer  "
              />
              <div
                onClick={() =>
                  songplay(
                    currentSong.name,
                    currentSong.primaryArtists,
                    currentSong.duration,
                    currentSong.downloadUrl,
                    currentSong.image,
                    currentSong.id
                  )
                }
                className="relative pr-4  "
              >
                {ispalying ? (
                  <FaPause className=" absolute left-0 top-0 cursor-pointer " />
                ) : (
                  <FaPlay className=" absolute left-0 top-0 cursor-pointer " />
                )}
              </div>
              <IoMdSkipForward
                onClick={() => forward()}
                className="cursor-pointer "
              />
              <PiShuffleBold className="cursor-pointer" />
            </div>
          </div>
          <div className="flex  mr-10 gap-5 lg:text-2xl  b">
            <FaDownload
            onClick={()=>  downloadMusic(currentSong.audio.src,currentSong.name)}
             className="cursor-pointer" />
            <div
              onClick={change}
              className="relative  "
            >
              {voume == 0 ? (
                <FaVolumeMute
                  onchange={onchange}
                  className=" absolute left-0 top-0 cursor-pointer "
                />
              ) : voume < 50 ? (
                <FaVolumeDown
                  onchange={onchange}
                  className=" absolute left-0 top-0 cursor-pointer "
                />
              ) : (
                <FaVolumeUp
                  onchange={onchange}
                  className=" absolute left-0 top-0 cursor-pointer "
                />
              )}
            </div>
            <VolumeContainer play={play} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
