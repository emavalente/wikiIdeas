export const invalidRoutes = (req, res, next) => {
  res.status(404).json({
    message: "Invalid route",
  });
};
