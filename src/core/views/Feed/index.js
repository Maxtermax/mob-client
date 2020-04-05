import React, { useState } from "react";
import { prefetch } from "react-suspense-fetch";
import { fetchMovies } from "@core/services/Movies";
import Movies from "@core/components/Lists/Movies";
import PlaceCenter from "@core/components/PlaceCenter";
import NavBar from "@core/components/NavBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import YearSelector from "@core/components/Selects/YearSelector";
import { FeedContext } from "@core/context/FeedContext";
import { useAddMovieEffect } from "./useAddMovieEffect";
import { useSetYearEffect } from "./useSetYearEffect";
import { useFethMoreEffect } from "./useFethMoreEffect";
import { useAuth0 } from "@/react-auth0-spa.js";
const initialFetch = prefetch(fetchMovies, {});

export default function Feed() {
  const [fetchResult, setFetchResult] = useState(initialFetch);
  const [movies, setMovies] = useState(fetchResult.results);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(null);
  const [year, setYear] = useState(null);
  const { user } = useAuth0();

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
        movies,
      }}
    >
      <>
        <NavBar></NavBar>
        <YearSelector></YearSelector>
        <Movies></Movies>
      </>
    </FeedContext.Provider>
  );
}
