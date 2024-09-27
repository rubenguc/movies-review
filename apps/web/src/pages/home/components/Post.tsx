import Stars from 'react-stars'

interface PostProps {
  id: string;
  username: string;
  profile_picture: string;
  content: string;
  stars: number;
  movie_poster: string;
}


export default function Post({
  content,
  id,
  profile_picture,
  stars,
  username,
  movie_poster,
}: PostProps) {

  return (
    <div className="border rounded-lg w-full max-w-80 overflow-hidden shadow">
      <img alt="example" src={movie_poster} className="object-cover w-full aspect-auto h-96" />
      <div className="flex flex-col p-3">
        <div className="flex gap-3">
          <img
            className="flex rounded-full object-cover w-10 h-10"
            src={profile_picture}
          />
          <div className="flex flex-col">
            <p className="text-gray-600 -mb-1">{username}</p>
            <Stars
              count={5}
              size={14}
              edit={false}
              value={stars}
            />
          </div>
        </div>
        <p className="overflow-hidden w-full box text-sm mt-3 text-gray-700">
          {content}
        </p>
      </div>
    </div>
  );
}
