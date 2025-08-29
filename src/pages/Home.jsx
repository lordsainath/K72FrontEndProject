import React from "react";
import HomeBtmText from "../components/Home/HomeBtmText";
import HomeHeroText from "../components/Home/HomeHeroText";

const Home = () => {
  return (
    <>
      <div className="text-white w-screen h-screen fixed">
        <video
          src="/herovideo.mp4"
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="relative h-screen  flex flex-col justify-between">
        <div className="absolute top-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="44"
            viewBox="0 0 103 44"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>

        <div className="bg-black flex items-center justify-center hover:bg-[#d3fd50] hover:text-black transition duration-500 ease-in-out text-white  absolute w-1/6 h-10 top-0 right-0">
          <h1>Menu</h1>
        </div>

        <HomeHeroText />
        <div className="absolute bottom-30 w-1/4 right-0 font-[font1] text-base">
          <p className="text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            K72 est une agence qui pense chaque action pour nourrir la marque.
            Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
            l’étincelle pour générer de l’émotion. Pour assurer une relation
            honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
            qui doit être fait.
          </p>
        </div>
        <HomeBtmText />
      </div>
    </>
  );
};

export default Home;
