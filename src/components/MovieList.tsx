"use client";

import { useMovieList } from "@/hooks/movie";
import { MovieListSkeletons } from "./MovieListSkeletons";
import { MoviePoster } from "./MoviePoster";

export default function MovieList() {
  const { data, isLoading } = useMovieList();
  if (!data || isLoading) return <MovieListSkeletons />;
  return (
    <div className=" grid grid-cols-5 gap-4">
      {data.results.map((movie) => (
        <MoviePoster movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
