import { useEffect } from "react";
import { fetchMovies } from "@core/services/Movies";
export function useFethMoreEffect({
  page,
  setLoadingMore,
  year,
  setFetchResult,
}) {
  useEffect(() => {
    if (page) {
      setLoadingMore(true);
      fetchMovies({ page, year }).then((response) => {
        setFetchResult(response);
        setLoadingMore(false);
      });
    }
  }, [page, setLoadingMore, year, setFetchResult]);
}
