import { Flex, Image, Rate } from "antd";
import { useTranslation } from "react-i18next";
import styles from "../index.module.css";
import { REVIEWS_MOCKS } from "../../../mocks/reviews";

export default function YourReviews() {
  const { t } = useTranslation("profile");

  return (
    <>
      <p>{t("your_reviews")}</p>

      <Flex className={styles.movies_container}>
        {REVIEWS_MOCKS.map((movie) => (
          <Flex className={styles.review} justify="space-between">
            <Flex vertical justify="space-between">
              <p>{movie.content}</p>
              <Rate disabled value={movie.starts} />
            </Flex>
            <Image src={movie.poster} height={100} width={80} />
          </Flex>
        ))}
      </Flex>
    </>
  );
}
