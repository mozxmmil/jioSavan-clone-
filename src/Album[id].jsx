import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { SongContex } from "./Contex/AlbumContex";

import { FaRegHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import AlbumPageSongList from "./utils/AlbumPageSongList";

const Album = () => {
  const { song, setsong } = useContext(SongContex);
  const [image, setImage] = useState([]);
  const [album, setAlbum] = useState([]);

  const { id } = useParams();
  console.log(id)
  const getIdData = async () => {
    try {
      const apiData = await axios.get(`https://saavn.dev/albums?id=${id}`);
      const { data } = apiData.data;

      setAlbum(data);
      setImage(data?.image[2].link);
      setsong(data.songs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIdData();
  }, []);

  return (
    <>
      <Navbar />

      <div className=" pt-10 ">
        <div className="flex px-96 items-center gap-5">
          <img src={image} width={250} alt="" className="mx-auto mb-4" />
          <div className="w-[250] gap-0 ">
            <h1 className="text-2xl font-semibold"> {album.name} </h1>

            <p className="pb-5">
              
              By: {album.primaryArtists} . {album.songCount}
            </p>
            <div className="flex items-center  gap-4">
              <button className="bg-green-400 hover:bg-green-600 duration-1000 transition-all text-white text-xl font-semibold rounded-full p-2 px-6">
                Play
              </button>
              <div className="flex items-center gap-3 text-3xl  ">
                <div className="rounded-full  p-2  border-zinc-200 hover:border-zinc-800 border-2 duration-1000">
                  <FaRegHeart className="text-zinc-500" />
                </div>
                <BsThreeDots className="text-zinc-600 hover:text-zinc-950 delay-500" />
              </div>
            </div>
          </div>
        </div>
        <div>
          {album.songs?.map((song) => (
            <AlbumPageSongList key={id} {...song} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Album;
