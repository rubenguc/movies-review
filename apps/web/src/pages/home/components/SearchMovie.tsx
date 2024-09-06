import { useState } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { SearchOutlined } from "@ant-design/icons";
import styles from "../index.module.css";

export default function SearchMovie() {
  const { t } = useTranslation("home");

  const [data, setData] = useState<any[]>([]);

  const onSearch = (value: string) => {
    console.log("searching:", value);
    setData([
      {
        value: "1",
        label: "Fake Data 1",
      },
      {
        value: "2",
        label: "Fake Data 2",
      },
    ]);
  };

  return (
    <Select
      showSearch
      onSearch={onSearch}
      placeholder={t("search_movie_placeholder")}
      className={styles.search}
      options={data}
      suffixIcon={<SearchOutlined />}
      filterOption={false}
    />
  );
}
