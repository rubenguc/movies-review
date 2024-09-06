import { BellOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import SearchMovie from "./components/SearchMovie";
import PostList from "./components/PostList";



export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <Flex justify="space-between">
        <h2>{t("todays_reviews")}</h2>
        <BellOutlined />
      </Flex>
      <SearchMovie />
      <PostList />
    </>
  );
}
