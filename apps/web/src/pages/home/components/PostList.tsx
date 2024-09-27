import { POSTS_MOCKS } from "../../../mocks/posts";
import Post from "./Post";

export default function PostList() {
  return (
    <div className="flex flex-col gap-2 items-center mt-4">
      {POSTS_MOCKS.map(({ id, stars, content, user, movie_poster }) => (
        <Post
          id={id}
          content={content}
          stars={stars}
          profile_picture={user.profile_picture}
          username={user.username}
          movie_poster={movie_poster}
        />
      ))}
    </div>
  );
}
