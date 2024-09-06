import { Flex, Image } from "antd";
import { useTranslation } from "react-i18next";
import { MOVIES_MOCK } from "../../../mocks/movies";
import styles from "../index.module.css";

export default function YourMovies() {
  const { t } = useTranslation("profile");

  return (
    <>
      <p>{t("your_movies")}</p>

      <Flex className={styles.movies_container} gap="middle">
        {MOVIES_MOCK.map((movie) => (
          <Image
            className={styles.movie}
            width={300}
            height={200}
            key={movie.id}
            src={movie.poster}
          />
        ))}
      </Flex>
    </>
  );
}
