import AuthMiddleware from "./AuthMiddleware.js";

function middlewareProxy(middlewares = []) {
  let prevResult;
  for (const middleware of middlewares) {
    const result = middleware(prevResult);
    prevResult = result;
  }
}

export default () => middlewareProxy([AuthMiddleware]);
