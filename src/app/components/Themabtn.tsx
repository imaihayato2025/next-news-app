"use client";

import React from "react";
import { useTheme } from "../hooks/useTheme"; // パスは調整してね

type ThemaBtnProps = {
  label1: string;
  label2: string;
  className?: string;
  disableToggle?: boolean; // ← 追加
};

export default function ThemaBtn({
  label1,
  label2,
  className = "",
  disableToggle = false, // ← デフォルト false
}: ThemaBtnProps) {
  const { toggleTheme } = useTheme();

  const handleClick = () => {
    if (!disableToggle) {
      toggleTheme();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`theme-button h-[75px] w-[75px] cursor-pointer rounded-full bg-[#d9d9d9] leading-[1.2] font-bold transition-transform duration-500 hover:scale-110 ${className}`}
    >
      {label1}
      <br />
      {label2}
    </button>
  );
}
