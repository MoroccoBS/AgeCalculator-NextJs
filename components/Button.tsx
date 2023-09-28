"use client";
import Image from "next/image";
import Arrow from "@/assets/images/icon-arrow.svg";
import { motion } from "framer-motion";
import { CalculateAge } from "../utils/calculateage";
import { useInput, useDisplay, useError } from "@/store/store";
import MagneticWrapper from "./MagneticWrapper";

const Errors = [
  "This field is required",
  "Must be a valid",
  "Must be in the past",
  "Must be in the future",
];

export default function Button() {
  const { input } = useInput();
  const { setDisplay } = useDisplay();
  const { setDayError, setMonthError, setYearError } = useError();

  const validateInput = () => {
    let isValid = true;

    if (input.day === "") {
      setDayError(true, Errors[0]);
      isValid = false;
    }
    if (parseInt(input.day) < 1 || parseInt(input.day) > 31) {
      setDayError(true, Errors[1]);
      isValid = false;
    }
    if (input.month === "") {
      setMonthError(true, Errors[0]);
      isValid = false;
    }
    if (parseInt(input.month) < 1 || parseInt(input.month) > 12) {
      setMonthError(true, Errors[1]);
      isValid = false;
    }
    if (input.year === "") {
      setYearError(true, Errors[0]);
      isValid = false;
    }
    if (parseInt(input.year) < 1900) {
      setYearError(true, Errors[3]);
      isValid = false;
    } else if (parseInt(input.year) > new Date().getFullYear()) {
      setYearError(true, Errors[2]);
      isValid = false;
    }

    return isValid;
  };
  const handleClick = () => {
    if (!validateInput()) {
      return;
    }
    const age = CalculateAge(input);
    setDisplay(age);
    console.log(age);
  };
  return (
    <div className="flex h-max md:justify-end justify-center items-center w-full relative after">
      <MagneticWrapper>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="md:w-24 sm:w-20 w-16  aspect-square rounded-full bg-OffBlack flex cursor-pointer relative z-10"
          onClick={() => handleClick()}
        >
          <Image
            src={Arrow}
            width={20}
            height={20}
            alt="Arrow"
            className="w-3/5 aspect-square m-auto pointer-events-none"
            priority={true}
          />
        </motion.div>
      </MagneticWrapper>
    </div>
  );
}
