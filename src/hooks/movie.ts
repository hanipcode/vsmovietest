import { DiscoverMovieResponse } from "@/interfaces/movie";
import generateHook from "@/utils/generateHooks";

export const useMovieList =
  generateHook<DiscoverMovieResponse>("/discover/movie");

export const useSearchMovie =
  generateHook<DiscoverMovieResponse>("/search/movie");
