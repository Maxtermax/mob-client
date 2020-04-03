import React, { useState } from "react";
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
        name: "esneyder"
      }
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      id: 2,
      createAt: new Date(),
      user: {
        name: "esneyder"
      }
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      id: 3,
      createAt: new Date(),
      user: {
        name: "esneyder"
      }
    }
  ];
  return (
    <div data-movie-id={movie.id}>
      <CommentForm></CommentForm>
      <UserComments comments={comments}></UserComments>
    </div>
  );
}
