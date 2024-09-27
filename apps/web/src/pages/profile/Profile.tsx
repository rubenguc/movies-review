import { useState } from "react";
import { USER_MOCK } from "../../mocks/user";
import YourMovies from "./components/YourMovies";
import YourReviews from "./components/YourReviews";
import { BsGear } from "react-icons/bs";

export default function Profile() {
  const [user] = useState(USER_MOCK);

  return (
    <>
      <div className="px-3">
        <div className="flex justify-between">
          <h2 className="text-xl">{user.username}</h2>
          <BsGear size={20} />
        </div>
        <div className="flex justify-between mt-4  items-end">
          <img width={60} src={user.profile_picture} className="rounded-full" />
          <div className="flex justify-end text-center gap-14">
            <div className="flex flex-col">
              <p className="text-2xl">{user.following}</p>
              <p className="text-xs text-gray-400">Following</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl">{user.followers}</p>
              <p className="text-xs text-gray-400">Followers</p>
            </div>
          </div>
        </div>
        <p className="my-4 text-gray-400">" {user.description}</p>
      </div>

      <div className="flex flex-col gap-5">
        <YourMovies />
        <YourReviews />
      </div>
    </>
  );
}
