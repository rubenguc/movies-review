import { useState } from "react";
import { Flex, Image } from "antd";
import { USER_MOCK } from "../../mocks/user";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import YourMovies from "./components/YourMovies";
import YourReviews from "./components/YourReviews";

export default function Profile() {
  const [user] = useState(USER_MOCK);

  return (
    <>
      <Flex justify="space-between">
        <h2>{user.username}</h2>
        <SettingOutlined />
      </Flex>
      <Flex
        justify="space-between"
        style={{
          marginTop: "1rem",
        }}
      >
        <Image
          width={80}
          src={user.profile_picture}
          className={styles.profile_picture}
        />
        <Flex align="end" className={styles.stats} gap="middle">
          <Flex vertical>
            <p className={styles.stats_number}>{user.following}</p>
            <p className={styles.stats_text}>Following</p>
          </Flex>
          <Flex vertical>
            <p className={styles.stats_number}>{user.followers}</p>
            <p className={styles.stats_text}>Followers</p>
          </Flex>
        </Flex>
      </Flex>

      <p className={styles.description}>" {user.description}</p>
      <YourMovies />
      <YourReviews />
    </>
  );
}
