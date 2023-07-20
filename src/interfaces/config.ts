import config from "../utils/tmdbConfig.json";

const posterSize = [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original",
] as const;

export type TMDBConfig = typeof config;

export type TMDBPosterSizes = (typeof posterSize)[number];
