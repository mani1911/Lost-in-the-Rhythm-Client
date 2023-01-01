import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className={`bg-black/50 backdrop-blur h-[65px] p-4 ${styles.nav}`}>
      <div className="w-[100%] h-[100%] flex items-center text-xl">
        <p className="text-2xl font-extralight">Lost in the Rhythm</p>
        <Link
          to={"/search"}
          className="ml-auto flex items-center gap-2 mr-4 hover:text-zinc-400 hover:cursor-pointer"
        >
          <BiSearch />
          Search
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
