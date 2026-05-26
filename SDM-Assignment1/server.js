const express = require("express");
const app = express(); //
const port = 3000; //

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    hostname: os.hostname(),
    platform: os.platform(),
    memoryUsage: process.memoryUsage(),
    nodeVersion: process.version,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
