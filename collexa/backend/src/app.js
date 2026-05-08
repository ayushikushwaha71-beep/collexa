const express = require("express");
const cors = require("cors");

const collegeRoutes = require("./routes/college.routes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/colleges", collegeRoutes);

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

module.exports = app;