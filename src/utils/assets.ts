import { TMDBPosterSizes } from "@/interfaces/config";
import config from "./tmdbConfig.json";

export function getPosterImage(path: string, config: TMDBPosterSizes = "w500") {
  if (!path) {
    return `https://placehold.jp/8d99ae/ffffff/640x960.png?text=NO%20IMAGE`;
  }
  return `https://www.themoviedb.org/t/p/${config}${path}`;
}
