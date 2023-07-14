"use client";

import React, { useEffect, useState } from "react";
import {GiOrangeSlice, GiCoconuts} from "react-icons/gi"
import { useTheme } from "next-themes";

const Themechanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";
  return (
    <button className="fixed z-40 bottom-5 right-5 dark:bg-gray-900 dark:text-yellow-400 bg-slate-300 text-gray-900 w-10 h-10 rounded-full flex justify-center items-center">
      {light ? (
        <GiCoconuts color="#965a3e" onClick={() => setTheme("dark")} size={27} />
      ) : (
        <GiOrangeSlice onClick={() => setTheme("light")} size={27} />
      )}
    </button>
  );
};

export default Themechanger;
