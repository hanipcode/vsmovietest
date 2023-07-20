"use client";

import { useSearchMovie } from "@/hooks/movie";
import { MovieListSkeletons } from "./MovieListSkeletons";
import { MoviePoster } from "./MoviePoster";

interface SearchResultProps {
  query: string;
}

function SearchResult({ query }: SearchResultProps) {
  const { data, isLoading } = useSearchMovie({ query });
  if (!data || isLoading) return <MovieListSkeletons />;
  return (
    <div className=" grid grid-cols-5 gap-4">
      {data.results.map((movie) => (
        <div key={movie.id}>
          <MoviePoster movie={movie} key={movie.id} />
          <h2 className="text-white font-bold my-2">
            {movie.title} ({movie.release_date})
          </h2>
        </div>
      ))}
    </div>
  );
}

export default function SearchResultPage({ query }: SearchResultProps) {
  return (
    <div className="p-4">
      <h1 className="text-white font-bold text-2xl mb-2">Search Result</h1>
      <SearchResult query={query} />
    </div>
  );
}
