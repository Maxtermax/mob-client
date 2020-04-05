import Movies from "./Movies";
import middlewares from "./middlewares";
import StreamPromises from "./StreamPromises";
import fetchComments from "./fetchComments";
import createComment from "./createComment";
const BASE_URL = "https://mobapp-api.herokuapp.com";

export default {
  BASE_URL,
  Movies,
  middlewares,
  fetchComments,
  createComment,
  StreamPromises,
};
