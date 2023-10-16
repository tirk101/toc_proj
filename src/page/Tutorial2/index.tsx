import React, { useState } from "react";
import Flower from "../../components/Sprite/Flower";
import {
  HOW,
  background,
  label,
  leftArrow,
  rightArrow,
  cat,
  ground,
} from "../../assets/tutorial";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const [translateY, setTranslateY] = useState(0);

  const handleTranslateUp = () => {
    setTranslateY(translateY + 100);
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center">
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background absolute"
        ></div>
        <div className="absolute right-5 text-[#ffffff] text-4xl">2/2</div>
        <div className="absolute">
          <img src={label} alt="label" className="h-full" />
        </div>
        <div className="absolute bottom-0 w-full">
          <img src={ground} alt="ground" className="w-full" />
        </div>
        <div>
          <div className="absolute top-2 left-2">
            <img src={HOW} alt="how" className="w-[50rem]" />
          </div>
          <div className="absolute top-[3rem] left-[20rem] animate-bounce">
            <img src={cat} alt="cat" />
          </div>
        </div>
        <div className="absolute flex justify-between w-full px-5 py-5 bottom-0">
          <div>
            <img
              src={leftArrow}
              className="pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px] w-[10vh]"
              draggable={false}
              onClick={() => {
                navigate("/tutorial");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
