import React from "react";
import LinkBtn from "./LinkBtn";

const HomeBtmText = () => {
  return (
    <div className="text-white w-full flex justify-center gap-5">
      <LinkBtn text="PROJECTS" linkTo="/projects" />
      <LinkBtn text="AGENCE" linkTo="/agence" />
    </div>
  );
};

export default HomeBtmText;
