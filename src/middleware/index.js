/**
 * Middleware for catching and handling error responses.
 */
export function handleErrorResponse(err, req, res, next) {
  if (err) {
    res.status(500).json({
      success: false,
      errorMessage: err.message || "An error occurred."
    });
    return;
  }

  return next();
}
