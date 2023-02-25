export const verifyPagination = (req, res, next) => {
  const { take, skip } = req.query;
  if (take && skip) {
    if (isNaN(take) || isNaN(skip))
      return res.status(400).send({ message: "Bad request" });
  } else if (!take) {
    return res.status(400).send({ message: "Bad request" });
  } else if (!skip) {
    if (isNaN(take)) return res.status(400).send({ message: "Bad request" });
  }
  next();
};
