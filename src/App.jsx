import { Link, Route, Routes } from "react-router-dom";

import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  const firststep = useRef(null)
  const secondstep = useRef(null)
  const thirdstep = useRef(null)
  const fourthstep = useRef(null)
  const fifthstep = useRef(null)

  useGSAP(function () {
    const tl = gsap.timeline();
    tl.from(firststep.current,{ height:0,duration:0.25 })
    tl.from(secondstep.current,{ height:0,duration:0.25 })
    tl.from(thirdstep.current,{ height:0,duration:0.25 })
    tl.from(fourthstep.current,{ height:0,duration:0.225})
    tl.from(fifthstep.current,{ height:0,duration:0.25 })
    tl.to([firststep.current,secondstep.current,thirdstep.current,fourthstep.current,fifthstep.current],{ y:"-100%",duration:1,stagger:0.25 })
  });

  return (
    <>

<div className="h-screen fixed flex z-10 w-full">
  <div ref={firststep} className="h-full w-1/5 bg-black">
  </div>
  <div ref={secondstep} className="h-full w-1/5 bg-black">
  </div>
  <div ref={thirdstep} className="h-full w-1/5 bg-black">
  </div>
  <div ref={fourthstep} className="h-full w-1/5 bg-black">
  </div>
  <div ref={fifthstep} className="h-full w-1/5 bg-black">
  </div>
</div>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
