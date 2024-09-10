import { Flex, Image, Typography } from "antd"
import styles from "../index.module.css";

interface MovieInfoProps {
  poster: string;
  title: string;
  author: string;
  categories: string[]
}

export default function MovieInfo({
  poster,
  author,

  categories,
  title
}: MovieInfoProps) {
  return (
    <Flex>
      <Image src={poster} width={180} className={styles.poster} />
      <Flex className={styles.movie_info_container} vertical gap={2}>
        <Typography.Text className={styles.title}>
          {title}
        </Typography.Text>
        <Typography.Paragraph className={styles.author}>
          {author}
        </Typography.Paragraph>
        <Flex wrap="wrap" gap={4}>
          {categories.map((category) => (
            <Typography.Text className={styles.categorie}>
              {category}
            </Typography.Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
