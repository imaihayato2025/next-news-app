"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const categories = ["ビジネス", "エンタメ", "一般", "健康", "科学", "スポーツ"];

export default function Category() {
  const [selected, setSelected] = useState<string | null>(null);
  const { theme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <footer
      className={`theme-change fixed bottom-0 flex h-[100px] w-full flex-col justify-center border-t border-gray-300 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <ul className="mx-auto flex w-[95%] justify-between">
        {categories.map((category) => {
          const isSelected = selected === category;
          return (
            <li
              key={category}
              onClick={() => setSelected(category)}
              className={`cursor-pointer rounded-xl p-2 text-[clamp(0.625rem,0.333rem+1.46vw,1.5rem)] transition-colors duration-300 ${
                isSelected ? "bg-blue-600 text-white" : "bg-transparent"
              }`}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
