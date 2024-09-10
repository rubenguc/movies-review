import { useState } from "react";
import { useParams } from "@tanstack/react-router";
import { MOVIE_MOCK } from "../../mocks/movies";
import MovieInfo from "./components/MovieInfo";
import MovieTabs from "./components/MovieTabs";
import MovieReviews from "./components/MovieReviews";

export default function Movie() {
  const { id } = useParams({
    from: "/movie/$id",
  });

  const [movie, setMovie] = useState(MOVIE_MOCK);



  return (
    <>
      <MovieInfo
        author={movie.Author}
        categories={movie.categories}
        poster={movie.poster}
        title={movie.title}
      />
      <MovieTabs
        storyline="storyline placeholder"
        cast={["cast"]}
        photos={["photo"]}
      />
      <MovieReviews />
    </>
  );
}
