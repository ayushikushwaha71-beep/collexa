const express = require("express");
const router = express.Router();
const {
  getColleges,
  getCollegeById
} = require("../controllers/college.controller");

router.get("/", getColleges);
router.get("/:id", getCollegeById);

module.exports = router;