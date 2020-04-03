import { useEffect } from "react";
import { fetchMovies } from "@core/services/Movies";
export function useSetYearEffect({
  year,
  setPage,
  setLoading,
  setFetchResult,
}) {
  useEffect(() => {
    if (year) {
      setPage(null);
      setLoading(true);
      fetchMovies({ year, page: 1 }).then((response) => {
        setFetchResult(response);
        setLoading(false);
      });
    }
  }, [year, setPage, setLoading, setFetchResult]);
}
