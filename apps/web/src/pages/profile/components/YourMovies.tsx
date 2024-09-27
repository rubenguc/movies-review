import { useTranslation } from "react-i18next";
import { MOVIES_MOCK } from "../../../mocks/movies";

export default function YourMovies() {
  const { t } = useTranslation("profile");

  return (
    <>
      <p className="font-bold">{t("your_movies")}</p>
      <div className="flex w-full overflow-scroll gap-4 py-1">
        {MOVIES_MOCK.map((movie) => (
          <img
            className="min-w-[200px] object-cover"
            width={300}
            height={200}
            key={movie.id}
            src={movie.poster}
          />
        ))}
      </div>
    </>
  );
}
