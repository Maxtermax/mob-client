import { useEffect } from "react";
export function useAddMovieEffect({ movies, fetchResult, page, setMovies }) {
  useEffect(() => {
    if (page === null) {
      setMovies(fetchResult.results);
      return;
    }
    const isNew = !movies.some((movie) =>
      fetchResult.results.some((item) => item.id === movie.id)
    );
    if (isNew) {
      setMovies(movies.concat(fetchResult.results));
    }
  }, [movies, fetchResult, page, setMovies]);
}
