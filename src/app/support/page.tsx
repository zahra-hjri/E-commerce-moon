"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "@/redux/crmSlice";
import { RootState } from "@/redux/store";

const Support = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.crm.Counter);
  return (
    <div className="w-full flex h-[500px] items-center justify-center gap-4">
      <button
        onClick={() => dispatch(decrease(1))}
        className="bg-orange-500 w-[50px] h-[20px]"
      >
        -
      </button>
      <p>Counter value: {counter}</p> {/* Displaying initial counter value */}
      <button
        onClick={() => dispatch(increase(1))}
        className="bg-green-500 w-[50px] h-[20px]"
      >
        +
      </button>
      <button
        onClick={() => dispatch(reset(0))}
        className="bg-slate-500 w-[50px] h-[20px]"
      >
        reset
      </button>
    </div>
  );
};

export default Support;
