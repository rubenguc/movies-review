import { Flex, Image, Rate, Typography } from "antd"
import { useState } from "react"
import styles from "../index.module.css"
import { useTranslation } from "react-i18next"
import { RightOutlined } from "@ant-design/icons"
import { MOVIE_MOCK } from "../../../mocks/movies"

export default function MovieReviews() {
  const { t } = useTranslation("movie")

  const [reviews, setReviews] = useState(MOVIE_MOCK.comments)

  const goToSeeAllReviews = () => {
    console.log("pending...")
  }

  return (
    <>
      <Flex className={styles.see_all_reviews} justify="space-between" onClick={goToSeeAllReviews}>
        <Typography.Paragraph>{t("see_all_reviews")}</Typography.Paragraph>
        <RightOutlined />
      </Flex>
      <Flex vertical gap={10}>
        {
          reviews.map(review => (
            <Flex className={styles.review}>
              <Image
                className={styles.review_username_profile}
                src={review.poster}
                width={50}
                height={50}
              />
              <Flex vertical className={styles.review_data}>
                <Typography.Paragraph className={styles.review_username}>{review.username}</Typography.Paragraph>
                <Rate
                  className={styles.review_stars}
                  disabled
                  value={review.starts}
                />
                <Typography.Paragraph className={styles.review_comment}>{review.content}</Typography.Paragraph>
              </Flex >
            </Flex>
          ))
        }
      </Flex>
    </>
  )
}
