"use client";
import Skeleton from "react-loading-skeleton";

export function MovieListSkeletons() {
  return (
    <div className=" grid grid-cols-5 gap-4">
      {Array.from(Array(20)).map((i) => (
        <Skeleton key={i} width="100%" height={500} />
      ))}
    </div>
  );
}
