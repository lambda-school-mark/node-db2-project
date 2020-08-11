const router = require("express").Router();

const carsRouter = require("../api/cars-router");

router.use("/cars", carsRouter);

router.get("/", (req, res) => {
  res.status(200).json({ message: "api works!" });
});

module.exports = router;
