import React from "react";
import Button from "../common/Button";
import { PiArmchairLight } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="container py-10 h-[400px]">
      <Button >
        <PiArmchairLight size={50} />
      </Button>
      <span className="text-[80px] font-bold px-2">
        Elavate Your Lifestyle With Our Furniture Creations
      </span>
        <Button>
          <span>Shop Now</span>
        </Button>
    </div>
  );
};

export default Hero;
