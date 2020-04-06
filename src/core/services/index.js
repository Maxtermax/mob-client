import { fetchMovies } from "./Movies";
import middlewares from "./middlewares";
import StreamPromises from "./StreamPromises";
import { fetchComments, createComment } from "./Comments";
import { registerUser } from "./Users";
export const BASE_URL = "https://mobapp-api.herokuapp.com";

export default {
  BASE_URL,
  fetchMovies,
  registerUser,
  middlewares,
  fetchComments,
  createComment,
  StreamPromises,
};
