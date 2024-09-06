import { Card, Flex, Rate } from "antd";
import cssStyles from "../index.module.css";
import { createStyles } from "antd-style";

interface PostProps {
  id: string;
  username: string;
  profile_picture: string;
  content: string;
  stars: number;
  movie_poster: string;
}

const useStyles = createStyles(({ css }) => ({
  rating: css`
    &.ant-rate {
      font-size: 1rem;
    }
  `,
}));

export default function Post({
  content,
  id,
  profile_picture,
  stars,
  username,
  movie_poster,
}: PostProps) {
  const { styles } = useStyles();

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={movie_poster} />}
    >
      <Card.Meta
        title={
          <Flex>
            <img
              className={cssStyles.profile_picture}
              src={profile_picture}
              width={40}
              height={40}
            />

            <Flex vertical>
              <p className={cssStyles.username}>{username}</p>
              <Rate disabled value={stars} className={styles.rating} />
            </Flex>
          </Flex>
        }
        description={<p className={cssStyles.post_description}>{content}</p>}
      />
    </Card>
  );
}
