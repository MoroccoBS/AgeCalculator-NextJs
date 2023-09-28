"use client";
import { useError, useInput } from "@/store/store";
import Input from "./Input";
import { ChangeEvent } from "react";

export default function InputCont() {
  const { input, setDay, setMonth, setYear } = useInput();
  const { error, setDayError, setMonthError, setYearError } = useError();
  const checkInput = (
    e: ChangeEvent<HTMLInputElement>,
    numbersAllowed: number
  ) => {
    const input = e.target.value;
    const regex = new RegExp(`^\\d{0,${numbersAllowed}}$`);
    if (!regex.test(input)) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="w-full flex items-center justify-between gap-4 sm:gap-10">
      <Input
        type="day"
        value={input.day}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (checkInput(e, 2)) {
            setDay(e.target.value);
          }
        }}
        error={{
          isError: error.day.isError,
          errorMessage:
            error.day.errorMessage !== "" &&
            error.day.errorMessage === "Must be a valid"
              ? `${error.day.errorMessage} Day`
              : error.day.errorMessage,
        }}
        onFocus={() => {
          setDayError(false, "");
        }}
      />
      <Input
        type="month"
        value={input.month}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (checkInput(e, 2)) {
            setMonth(e.target.value);
          }
        }}
        error={{
          isError: error.month.isError,
          errorMessage:
            error.month.errorMessage !== "" &&
            error.month.errorMessage === "Must be a valid"
              ? `${error.month.errorMessage} Month`
              : error.month.errorMessage,
        }}
        onFocus={() => {
          setMonthError(false, "");
        }}
      />
      <Input
        type="year"
        value={input.year}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (checkInput(e, 4)) {
            setYear(e.target.value);
          }
        }}
        error={{
          isError: error.year.isError,
          errorMessage: error.year.errorMessage,
        }}
        onFocus={() => {
          setYearError(false, "");
        }}
      />
    </div>
  );
}
