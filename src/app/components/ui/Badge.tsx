import React from "react";

interface BadgeProps {
  color: string; 
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ color, children }) => {
  return (
    <div
      className={`${color} rounded-full w-[20px] h-[20px] flex items-center justify-center text-white text-[12px]`}
    >
      {children}
    </div>
  );
};

export default Badge;
