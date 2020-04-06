import React, { useContext, useState } from "react";
import style from "./style.js";
import theme from "@core/theme/ligth";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Grade from "@material-ui/icons/Grade";
import LoadImage from "@core/components/LoadImage";
import Comments from "@core/components/Comments";
import RankingModal from "@core/components/Modals/RankingModal";
import RankingStars from "@core/components/RankingStars";
import Tooltip from "@material-ui/core/Tooltip";
import { ThemeProvider } from "@material-ui/core/styles";
import { FeedContext } from "@core/context/FeedContext";
import useIntersection from "@core/hooks/useIntersection";
import services from "@core/services";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
const { StreamPromises } = services;
export const httpStream = new StreamPromises(1)

export default function Movies() {
  const classes = style();
  const [displayModal, setDisplayModal] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const { movies = [], loadingMore, onReachBottom, userId } = useContext(
    FeedContext
  );
  useIntersection(
    ".movie-item:last-child",
    (entries) => {
      const [entry] = entries;
      const reachBottom = entry.isIntersecting === true && !loadingMore;
      if (reachBottom) {
        onReachBottom();
      }
    },
    [movies]
  );


  function handleConfirmRate(rate) {
    setDisplayModal(false);
    movieSelected.stars = rate;
    setMovieSelected(null);
  }

  function handleDisplayModal(movie) {
    setDisplayModal(true);
    setMovieSelected(movie);
  }

  function handleCancelRate() {
    setDisplayModal(false);
    setMovieSelected(null);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {movies.map((movie, i, entire) => {
          let { title, poster_path, release_date, id, stars } = movie;
          return (
            <div
              key={id}
              style={{
                animationDelay: `${(i / entire.length) * 0.5}s`,
              }}
              className={`appear ${classes.container} movie-item `}
              data-movie-id={id}
            >
              <div className={classes.container_item}>
                <Typography
                  className={classes.container_item_text_header}
                  variant="overline"
                >
                  <b>Fecha de publicación:</b>
                  <span>
                    {moment(new Date(release_date)).format(
                      "dddd, MMMM Do YYYY"
                    )}
                  </span>
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.container_item_text}
                >
                  {title}
                </Typography>
                <Tooltip title={title} placement="right">
                  <div className={classes.container_item_image}>
                    <LoadImage
                      size={"contain"}
                      src={`http://image.tmdb.org/t/p/w185${poster_path}`}
                    />
                  </div>
                </Tooltip>
                {stars ? (
                  <RankingStars value={stars} mode="display"></RankingStars>
                ) : null}
                <Button
                  className={classes.container_item_button}
                  variant="text"
                  size="small"
                  onClick={() => handleDisplayModal(movie)}
                  onCancel={handleCancelRate}
                >
                  <Grade className={classes.container_item_icon} />
                  <span className={classes.container_item_icon_text}>
                    Puntuar
                  </span>
                </Button>
                <Comments movies={movies} userId={userId} movie={movie}></Comments>
              </div>
            </div>
          );
        })}
        <RankingModal
          onCancel={() => setDisplayModal(false)}
          onConfirm={handleConfirmRate}
          open={displayModal}
          movie={movieSelected}
        ></RankingModal>
      </div>
      {loadingMore && (
        <div style={{ textAlign: "center", marginTop: "-20px" }}>
          <CircularProgress></CircularProgress>
        </div>
      )}
    </ThemeProvider>
  );
}
