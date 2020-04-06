import React, { useState } from "react";
import { prefetch } from "react-suspense-fetch";
import { fetchMovies } from "@core/services/Movies";
import Button from "@material-ui/core/Button";
import services from "@core/services";
import Movies from "@core/components/Lists/Movies";
import PlaceCenter from "@core/components/PlaceCenter";
import NavBar from "@core/components/NavBar";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import YearSelector from "@core/components/Selects/YearSelector";
import { FeedContext } from "@core/context/FeedContext";
import { useAddMovieEffect } from "./useAddMovieEffect";
import { useSetYearEffect } from "./useSetYearEffect";
import { useFethMoreEffect } from "./useFethMoreEffect";
import { useAuth0 } from "@/react-auth0-spa.js";
import useStyle from "./style.js";
import { useSignUser } from "./useSignUser";
const initialFetch = prefetch(fetchMovies, {});
const { StreamPromises } = services;
export const httpStream = new StreamPromises(1);

export default function Feed() {
  const classes = useStyle();
  const [fetchResult, setFetchResult] = useState(initialFetch);
  const [movies, setMovies] = useState(fetchResult.results);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [page, setPage] = useState(null);
  const [year, setYear] = useState(null);
  const [userId, setUserId] = useState(null);
  const { user, getTokenSilently } = useAuth0();

  useSignUser(getTokenSilently, setUserId, user, userId);

  useFethMoreEffect({ page, setLoadingMore, year, setFetchResult });

  useAddMovieEffect({ movies, fetchResult, setMovies, page });

  useSetYearEffect({ year, setPage, setLoading, setFetchResult });

  function onSuccess() {
    setSuccess(true);
  }

  function onFail() {
    setFail(true);
  }

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
        setMovies,
        user,
        userId,
        onSuccess,
        onFail,
      }}
    >
      <>
        <NavBar user={user}></NavBar>
        <div className={classes.wrapContent}>
          <YearSelector></YearSelector>
          <Movies></Movies>
        </div>
        <Snackbar
          color="success"
          message="Operacion exitosa!"
          open={success}
          autoHideDuration={2500}
          onClose={() => setSuccess(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          action={
            <Button
              color="secondary"
              size="small"
              onClick={() => setSuccess(false)}
            >
              ok
            </Button>
          }
        />

        <Snackbar
          color="error"
          message="Ooops, ocurrio un error, intenta mas tarde."
          open={fail}
          autoHideDuration={2500}
          onClose={() => setFail(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          action={
            <Button
              color="secondary"
              size="small"
              onClick={() => setFail(false)}
            >
              ok
            </Button>
          }
        />
      </>
    </FeedContext.Provider>
  );
}
