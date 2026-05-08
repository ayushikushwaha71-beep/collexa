const express = require("express");

const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Collexa Backend Running 🚀" });
});

// IMPORTANT: server start
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});