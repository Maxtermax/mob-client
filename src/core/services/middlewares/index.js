import AuthMiddleware from "./AuthMiddleware.js";

function middlewareProxy(middlewares = [], payload) {
  let prevResult;
  for (const middleware of middlewares) {
    const result = middleware(prevResult, payload);
    prevResult = result;
  }
}

export default (payload) => middlewareProxy([AuthMiddleware], payload);
