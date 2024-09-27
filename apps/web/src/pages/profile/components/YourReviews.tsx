import { useTranslation } from "react-i18next";
import { REVIEWS_MOCKS } from "../../../mocks/reviews";
import ReactStars from "react-stars";

export default function YourReviews() {
  const { t } = useTranslation("profile");

  return (
    <>
      <p className="font-bold">{t("your_reviews")}</p>
      <div className="flex w-full overflow-scroll gap-4 py-1">
        {REVIEWS_MOCKS.map((movie) => (
          <div className="flex justify-between p-4 min-w-[90%] w-[70%] flex-1 shadow border">
            <div className="flex flex-col justify-between">
              <p>{movie.content}</p>
              <ReactStars
                count={5}
                size={14}
                edit={false}
                value={movie.starts}
              />
            </div>
            <img src={movie.poster} height={100} width={80} />
          </div>
        ))}
      </div>
    </>
  );
}
