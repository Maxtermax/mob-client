import React from "react";
import UserComments from "@core/components/Lists/UserComments";
import CommentForm from "@core/components/Forms/Comment";

export default function Comments(props) {
  const { movie } = props;
  const comments = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and ",
      id: 1,
      createAt: new Date(),
      user: {
        name: "Esneyder",
      },
    },
  ];
  return (
    <div data-movie-id={movie.id}>
      <CommentForm></CommentForm>
      <UserComments comments={comments}></UserComments>
    </div>
  );
}
