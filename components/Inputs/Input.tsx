"use client";

import { motion } from "framer-motion";

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: { isError: boolean; errorMessage: string };
  onFocus?: () => void;
}

export default function Input({
  type,
  value,
  onChange,
  error,
  onFocus,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 font-bold relative transition-all">
      <h1 className="tracking-widest uppercase text-sm text-SmokeyGrey">
        {type}
      </h1>
      <input
        type="text"
        className={`md:text-2xl text-lg w-full h-full rounded-md py-4 sm:px-6 px-4 placeholder:text-lg md:placeholder:text-2xl outline  outline-1 focus:outline-Purple transition-all ${
          error?.isError ? "outline-LightRed" : "outline-gray-300"
        }`}
        placeholder={type === "day" ? "DD" : type === "month" ? "MM" : "YYYY"}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      <motion.h1
        layout
        className="text-LightRed italic font-normal h-full text-sm absolute top-[105%]"
      >
        {error?.errorMessage}
      </motion.h1>
    </div>
  );
}
