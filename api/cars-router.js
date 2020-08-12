const router = require("express").Router();

const db = require("../data/db-config");

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then((car) => {
      res.status(200).json({ message: "cars api works" });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/", (req, res) => {
  db("cars").then((cars) => {
    res.status(200).json(cars);
  });
});

router.delete("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .del()
    .then((car) => {
      res.status(200).json({ message: "Deleted!" });
    });
});

router.put("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .update(req.body)
    .then((car) => {
      res.status(200).json({ message: "updated" });
    });
});

module.exports = router;
