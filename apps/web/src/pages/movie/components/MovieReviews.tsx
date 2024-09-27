import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MOVIE_MOCK } from "../../../mocks/movies";
import { BsChevronBarRight } from "react-icons/bs";
import ReactStars from "react-stars";

export default function MovieReviews() {
  const { t } = useTranslation("movie");

  const [reviews, setReviews] = useState(MOVIE_MOCK.comments);

  const goToSeeAllReviews = () => {
    console.log("pending...");
  };

  return (
    <>
      <div
        className="flex justify-between border-t border-b mb-8 items-center text-sm py-2"
        onClick={goToSeeAllReviews}
      >
        <p>{t("see_all_reviews")}</p>
        <BsChevronBarRight />
      </div>
      <div className="flex flex-col gap-2">
        {reviews.map((review) => (
          <div className="flex w-full gap-3">
            <img
              className="rounded-full w-14 h-14 object-cover aspect-auto"
              src={review.poster}
            />
            <div className="flex flex-1 flex-col w-full border-b">
              <p className="text-sm">{review.username}</p>
              <ReactStars
                count={5}
                size={14}
                edit={false}
                value={review.starts}
              />

              <p className="text-xs text-gray-400">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
