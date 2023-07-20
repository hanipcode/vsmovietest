"use client";

import MovieList from "@/components/MovieList";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-white font-bold text-2xl mb-2">Discover</h1>
      <MovieList />
    </div>
  );
}
