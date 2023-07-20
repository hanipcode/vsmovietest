import useSWR from "swr";

const fetcher = (path: string) =>
  fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  }).then((res) => res.json());

const generateHook =
  <T>(path: string) =>
  (params?: Record<string, string>) => {
    if (!params) {
      return useSWR<T>(path, fetcher);
    }
    const urlParam = new URLSearchParams(params);
    return useSWR<T>(`${path}?${urlParam.toString()}`, fetcher);
  };

export default generateHook;
