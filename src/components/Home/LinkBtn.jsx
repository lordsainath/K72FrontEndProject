import React from "react";
import { Link, NavLink } from "react-router-dom";

const LinkBtn = ({ text, linkTo }) => {
  return (
    <Link
      className="text-xl sm:text-2xl md:text-3xl lg:text-7xl border-[2px]   md:border-[3px] border-white px-4 font-bold md:px-8 hover:text-[#d3fd50] hover:border-[#d3fd50] py-1 rounded-full"
      to={linkTo}
    >
      {text}
    </Link>
  );
};

export default LinkBtn;
