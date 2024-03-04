import { useContext, useEffect } from "react";
import { SongContex } from "../Contex/AlbumContex";
export const VolumeContainer = ({ play }) => {
  const { currentSong, voume, setvoume } = useContext(SongContex);

  useEffect(() => {
    if (currentSong) {
      setvoume((currentSong.audio.volume) * 100);
    }
  }, [currentSong,voume]);

  const handlesoundchange = (e) => {
    if (currentSong) {
      const value = parseFloat(e.target.value) / 100;
      currentSong.audio.volume = value;
      setvoume(value);
    }
  };

  return (
    <div
      className={` bottom-24  shadow-md px-2 rounded-lg bg-white absolute -rotate-90 ${
        play ? " " : "hidden"
      }`}
    >
      <input
        type="range"
        min={0}
        max={100}
        value={voume}
        step={1}
        className="h-[5px] text-green-400 range  "
        onChange={handlesoundchange}
      />
    </div>
  );
};
