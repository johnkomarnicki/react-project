const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

// Import routes
const jobsRoute = require("./routes/jobs");
const jobRoute = require("./routes/job");

app.use(cors());

// Use routes
app.use("/api/jobs", jobsRoute);
app.use("/api/job", jobRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
