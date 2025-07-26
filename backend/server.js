const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const logger = require("./middlewares/logger");
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
