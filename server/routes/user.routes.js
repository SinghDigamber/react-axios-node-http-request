let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let user = require("../models/user-schema");

router.route("/create").post(async (req, res, next) => {
  await user
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/").get(async (req, res, next) => {
  await user
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/edit/:id").get(async (req, res, next) => {
  await user
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/update/:id").put(async (req, res, next) => {
  await user
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/delete/:id").delete(async (req, res, next) => {
  await user
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
