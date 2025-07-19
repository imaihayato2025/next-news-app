import "./globals.css";
import Link from "next/link";
import ThemaBtn from "./components/ThemaBtn";

export default function Home() {
  return (
    <div className="theme-change min-h-screen bg-white">
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="theme-change text-5xl font-bold text-black">NEWS NOW</h1>
        <Link href="/newslist">
          <button className="theme-change-btn mt-[50px] h-[50px] w-[200px] cursor-pointer rounded-full bg-[#23282f] font-bold text-white transition-transform duration-500 hover:scale-110">
            記事一覧へ
          </button>
        </Link>
        <ThemaBtn
          label1="テーマ"
          label2="変更"
          className="absolute right-[10px] bottom-[10px]"
        />
      </div>
    </div>
  );
}
