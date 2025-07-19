// ✅ 修正後
import Header from "../components/Header";
import CategoryBtn from "../components/CategoryBtn";
import NewsList from "../components/NewsList";
import ThemaBtn from "../components/ThemaBtn";
import Link from "next/link";

export default function NewsAll() {
  return (
    <div className="theme-change min-h-screen bg-white">
      <Header />
      <Link href="/news">
        <NewsList />
      </Link>
      <Link href="/">
        <ThemaBtn
          label1="TOPへ"
          label2="戻る"
          disableToggle
          className="absolute right-[10px] bottom-[110px]"
        />
      </Link>
      <CategoryBtn />
    </div>
  );
}
