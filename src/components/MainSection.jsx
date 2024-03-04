import React from "react";
import { useEffect } from "react";
import axios from "axios";

import Trending from "../utils/Trending";
import Sidebar from "../utils/sidebar";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const MainSection = () => {
  const [album, setAlbum] = useState([]);

  const [trending, settrending] = useState([]);
  const getdata = async () => {
    try {
      const apiData = await axios.get(
        "https://saavn.dev/modules?language=hindi"
      );

      const { data } = apiData.data;

      setAlbum(data.albums);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className=" lg:mx-auto bg  flex items-center  ">
      <div className="sidebar w-[15%] h-screen px-10 py-10 hidden lg:block">
        <Sidebar />
      </div>

      <div className=" w-full h-screen flex flex-wrap  px-10  ">
        <div className=" w-full px-4 py-5 ">
          <h1 className="text-2xl font-semibold">Album</h1>
        </div>

        {album?.map((item) => (
          <Trending key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
