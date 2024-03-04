import React from "react";
import svg from "/jiosavan.svg";
import axios from "axios";
import { useContext, useState } from "react";
import { SongContex } from "../Contex/AlbumContex";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { searchBar, setsearchBar } = useContext(SongContex);


  const inputHandle = async (e) => {
    
    try {
      const res = await axios.get(
        `https://saavn.dev/search/songs?query=${e.target.value}&page=1&limit=2`
      );
      const { data } = res.data;
      
      if (
        e.target.value.length === 0 ||
        data.results.length === 0 ||
        e.target.value.trim() === ""
      ) {
        setsearchBar([]);
      } else {
        setsearchBar(data.results);
      }
      setsearchBar(data.results);
      console.log(searchBar)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="flex  justify-between items-center px-4 py-4 shadow-sm  z-20 flex-col lg:flex-row lg:justify-between lg:items-center">
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <img className="" src={svg} alt="" />
        </Link>

        <div className="h-full">
          <ul className=" flex-col  lg:flex items-center lg:flex-row justify-center gap-5 text-md font-semibold cursor-pointer">
            <li className=" hover:border-b-2 ">Music</li>
            <li className=" hover:border-b-2 ">Podcast</li>
            <li className=" hover:border-b-2 ">Go Pro</li>
          </ul>
        </div>
      </div>
      <div className=" hidden lg:flex ">
        <input
          onChange={inputHandle}
          autoComplete="off"
          autoCorrect="off"
          type="text"
          placeholder="Search..."
          className=" input px-4 py-2 rounded-2xl text-center outline-none bg-white max-w-96 hover:w-[45vw]  border-none  "
        />
      </div>
      <div className=" flex items-center  pr-20 gap-5 text-md font-semibold cursor-pointer">
        <h1 className=" hover:border-b-2 ">Log in</h1>
        <h1 className=" hover:border-b-2 ">sign up</h1>
      </div>
    </nav>
  );
};

export default Navbar;
