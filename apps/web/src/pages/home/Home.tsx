import { useTranslation } from "react-i18next";
import SearchMovie from "./components/SearchMovie";
import PostList from "./components/PostList";
import { BsFillBellFill } from "react-icons/bs"

export default function Home() {
  const { t } = useTranslation("home");


  return (
    <>
      <div className="flex justify-between mb-4 px-4">
        <h2 className="text-2xl">{t("todays_reviews")}</h2>
        <BsFillBellFill size={20} color="#aaa" />
      </div>
      <SearchMovie />
      <PostList />
    </>
  );
}
