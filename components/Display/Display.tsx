"use client";
import { useDisplay } from "@/store/store";
import DisplayElement from "./DisplayElement";
import { motion } from "framer-motion";

export default function Display() {
  const { display } = useDisplay();
  return (
    <div className="w-full h-full flex flex-col font-semibold">
      <DisplayElement value={display.year} type="years" />
      <DisplayElement value={display.month} type="months" />
      <DisplayElement value={display.day} type="days" />
    </div>
  );
}
