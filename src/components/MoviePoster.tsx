"use client";
import { MovieData } from "@/interfaces/movie";
import { getPosterImage } from "@/utils/assets";
import Image from "next/image";

interface MoviePosterProps {
  movie: MovieData;
}

export function MoviePoster({ movie }: MoviePosterProps) {
  return (
    <Image
      className="rounded-md min-h-[550px]"
      key={movie.id}
      width={500}
      height={0}
      src={getPosterImage(movie.poster_path)}
      alt={movie.original_title}
    />
  );
}
