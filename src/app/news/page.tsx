import Header from "../components/Header";
import NewsContent from "../components/NewsContent";
import ThemaBtn from "../components/ThemaBtn";
import SnsBtn from "../components/SnsBtn";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="theme-change h-screen">
      <Header />
      <NewsContent />
      <Link href="/newslist">
        <ThemaBtn
          label1="一覧へ"
          label2="戻る"
          disableToggle
          className="absolute right-[10px] bottom-[110px]"
        />
      </Link>
      <SnsBtn />
    </div>
  );
}
