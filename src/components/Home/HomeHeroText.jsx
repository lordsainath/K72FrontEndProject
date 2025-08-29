import React from "react";

const HomeHeroText = () => {
  return (
    <div className="flex flex-col w-full items-center text-9xl uppercase text-white font-[font1]">
      <div>L'étincelle</div>
      <div className="flex">
        qui
        <div className="rounded-full overflow-hidden max-w-[200px] h-auto">
          <video src="/herovideo.mp4" className="w-full rounded-full object-cover overflow-hidden" autoPlay muted loop></video>
        </div>
        génère
      </div>
      <div>la créativité</div>
    </div>
  );
};

export default HomeHeroText;
