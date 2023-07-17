const notFound = (req, res, next) => {
  console.log("klasjfdl1111");
  //   res.status(404).send("does not exists");
  next();
};

module.exports = notFound;
