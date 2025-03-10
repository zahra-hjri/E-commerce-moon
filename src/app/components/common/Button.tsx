import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="bg-orange-400 rounded-[30px] max-w-[180px] cursor-pointer hover:bg-orange-500 text-white text-[24px] px-5 py-1 font-bold items-center justify-center inline-flex">
      {children}
    </div>
  );
};

export default Button;
