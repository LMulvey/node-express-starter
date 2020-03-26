import Express from "express";

/**
 * Method to allow asynchronous route handlers while still bubbling
 * errors up to Express to be handled by middleware properly.
 * See: https://stackoverflow.com/a/51391081/8246359
 * @param {Function} fn
 */
const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

function toAsyncRouter(router) {
  const methods = ["get", "post", "delete", "patch"];
  for (let key in router) {
    if (methods.includes(key)) {
      const method = router[key];
      router[key] = (path, ...callbacks) =>
        method.call(router, path, ...callbacks.map((cb) => asyncHandler(cb)));
    }
  }
  return router;
}

const router = Express.Router();
export default toAsyncRouter(router);
