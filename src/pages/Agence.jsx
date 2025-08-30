import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  const imagediv = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const imgref = useRef(null);
  const sec3div = useRef(null);
  const sec2div = useRef(null);

  const sec3text = useRef(null);
  const sec3img = useRef(null);
  const sec3btmtext = useRef(null);

  const images = [
    "/CAMILLE.jpg",
    "/Carl.jpg",
    "/ChantalG.jpg",
    "/Claire.jpg",
    "/HugoJoseph.jpg",
    "/joel.jpg",
    "/Lawrence.jpg",
    "/MAXIME.jpg",
    "/MEGGIE.jpg",
    "/MEL.jpg",
    "/Michele.jpg",
    "/MyleneS.jpg",
    "/Olivier.jpg",
  ];

  useGSAP(function () {
    gsap.to(imagediv.current, {
      scrollTrigger: {
        trigger: imagediv.current,

        // markers: true,
        start: "top 26%",
        end: "top -110%",
        pin: true,
        onUpdate: function (elem) {
          let imageindex;
          if (elem.progress < 1) {
            imageindex = Math.round(elem.progress * images.length);
            imgref.current.src = images[imageindex];
          } else {
            imageindex = Math.round(elem.progress * images.length);
            imgref.current.src = images[imageindex - 1];
          }
        },
      },
    });

    gsap.fromTo(
      sec3div.current,
      {},
      {
        scrollTrigger: {
          trigger: sec3div.current,
          start: "top 55%",
          end: "top -120%",
          markers: true,

          onEnter: () => {
            gsap.to(sec3div.current, {
              backgroundColor: "black",
              color: "white",
            });

            gsap.to(sec3img.current, {
              scale: 1.2,
              duration: 1,
            });

            gsap.to(sec2div.current, {
              backgroundColor: "black",
              color: "white",
            });
          },
          onUpdate: (elem) => {
            gsap.to(sec3text.current, {
              x: elem.progress * 200 + "vw",
              duration: 1,
            });

            gsap.to(sec3btmtext.current, {
              x: elem.progress * 250 + "vw",
              duration: 1,
            });
          },

          onLeaveBack: () => {
            // gsap.to(sec3text.current, {
            //   x: 0,
            //   duration: 5,
            // });
            gsap.to(sec3div.current, {
              backgroundColor: "white",
              color: "black",
            });
            gsap.to(sec3img.current, {
              scale: 1,
              duration: 1,
            });
            gsap.to(sec2div.current, {
              backgroundColor: "white",
              color: "black",
            });
          },
        },
      }
    );
  });

  return (
    <div>
      {/* section 1 */}
      <div className=" section1">
        <div
          ref={imagediv}
          className="w-50  h-70 absolute    top-50  left-[30vw] overflow-hidden rounded-2xl"
        >
          <img
            ref={imgref}
            src="/Carl.jpg"
            className="h-full w-full object-cover "
            alt=""
          />
        </div>

        <div className="font-[font1] relative ">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw]  leading-[18vw] text-center uppercase">
              Soixan7e Douze
            </h1>
          </div>

          <div className="font-[font2] pl-[40%] mt-20">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div ref={sec2div} className="section2 h-screen"></div>

      {/* section 3 */}
      <div ref={sec3div} className="relative section3  h-screen ">
        <div className="absolute  w-full flex justify-center">
          <img
            ref={sec3img}
            className="rounded-2xl"
            src="/MyleneS.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="absolute top-40  ">
            <p className="text-[#d3fd50] text-9xl" ref={sec3text}>
              MYLÈNE
            </p>
          </div>

          <div className="absolute top-70">
            <p className=" text-3xl" ref={sec3btmtext}>
              Conseillère production et opération
            </p>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="section4 h-screen bg-black text-white w-full">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Agence;
