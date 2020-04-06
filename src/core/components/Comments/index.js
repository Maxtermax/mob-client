import React, { useState, useEffect } from "react";
import UserComments from "@core/components/Lists/UserComments";
import useIntersection from "@core/hooks/useIntersection";
import CommentForm from "@core/components/Forms/Comment";
import { MovieContext } from "@core/context/MovieContext";
import { useAuth0 } from "@/react-auth0-spa.js";
import services from "@core/services";

const { StreamPromises, fetchComments } = services;
export const httpStream = new StreamPromises(4);

export default function Comments(props) {
  const { movie, userId = "", movies = [] } = props;
  const { user, getTokenSilently } = useAuth0();
  const [comments, setComments] = useState([]);
  function addComment(comment) {
    comment.user = user;
    setComments([...comments, comment]);
  }

  function generateRequest(movie, token) {
    const { id } = movie;
    return {
      id,
      onResponse(response) {
        const alreadyIn = comments.some((comment) =>
          response.some((item) => Number(item.id) === Number(comment.id))
        );
        if (alreadyIn) return;
        const result = comments.concat(response);
        setComments(result);
        movie.comments = comments;
      },
      definition: () => {
        return fetchComments({
          token,
          path: `/api/v1/comments/find/by/movie/${id}`,
        });
      },
    };
  }
  useEffect(() => {
    function generateRequest(movie, token) {
      const { id } = movie;
      return {
        id,
        onResponse(response) {
          setComments(comments.concat(response));
          movie.comments = comments;
        },
        definition: () => {
          return fetchComments({
            token,
            path: `/api/v1/comments/find/by/movie/${id}`,
          });
        },
      };
    }
    async function getComments() {
      const token = await getTokenSilently();
      httpStream.push(generateRequest(movie, token));
    }
    const alreadyHaveComments = movie.hasOwnProperty("comments");
    if (!alreadyHaveComments) getComments();
  }, [comments, getTokenSilently, movie]);

  return (
    <MovieContext.Provider value={{ movie, userId, addComment }}>
      <div data-movie-id={movie.id}>
        <CommentForm></CommentForm>
        <UserComments comments={comments}></UserComments>
      </div>
    </MovieContext.Provider>
  );
}
