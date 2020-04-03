import React, { useState, useEffect } from "react";
import { prefetch } from "react-suspense-fetch";
import { fetchMovies } from "@core/services/Movies";
import Movies from "@core/components/Lists/Movies";
import PlaceCenter from "@core/components/PlaceCenter";
import CircularProgress from "@material-ui/core/CircularProgress";
import YearSelector from "@core/components/Selects/YearSelector";
import { FeedContext } from "@core/context/FeedContext";
const initialFetch = prefetch(fetchMovies, {});

function useFethMoreEffect({ page, setLoadingMore, year, setFetchResult }) {
  useEffect(() => {
    if (page) {
      setLoadingMore(true);
      fetchMovies({ page, year }).then(response => {
        setFetchResult(response);
        setLoadingMore(false);
      });
    }
  }, [page, setLoadingMore, year, setFetchResult]);
}

function useAddMovieEffect({ movies, fetchResult, page, setMovies }) {
  useEffect(() => {
    if (page === null) {
      setMovies(fetchResult.results);
      return;
    }
    const isNew = !movies.some(movie =>
      fetchResult.results.some(item => item.id === movie.id)
    );
    if (isNew) {
      setMovies(movies.concat(fetchResult.results));
    }
  }, [movies, fetchResult, page, setMovies]);
}

function useSetYearEffect({ year, setPage, setLoading, setFetchResult }) {
  useEffect(() => {
    if (year) {
      setPage(null);
      setLoading(true);
      fetchMovies({ year, page: 1 }).then(response => {
        setFetchResult(response);
        setLoading(false);
      });
    }
  }, [year, setPage, setLoading, setFetchResult]);
}

export default function Feed() {
  const [fetchResult, setFetchResult] = useState(initialFetch);
  const [movies, setMovies] = useState(fetchResult.results);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(null);
  const [year, setYear] = useState(null);

  useFethMoreEffect({ page, setLoadingMore, year, setFetchResult });

  useAddMovieEffect({ movies, fetchResult, setMovies, page });

  useSetYearEffect({ year, setPage, setLoading, setFetchResult });

  function onReachBottom() {
    if (page === null) return setPage(2);
    setPage(page + 1);
  }

  function onYearChange(event) {
    setLoadingMore(true);
    setYear(event.target.value);
  }

  if (loading) {
    return (
      <PlaceCenter>
        <CircularProgress />
      </PlaceCenter>
    );
  }

  return (
    <FeedContext.Provider
      value={{
        loadingMore,
        setLoadingMore,
        onReachBottom,
        year,
        onYearChange,
        movies
      }}
    >
      <>
        <YearSelector></YearSelector>
        <Movies></Movies>
      </>
    </FeedContext.Provider>
  );
}
