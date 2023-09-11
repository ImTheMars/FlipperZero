const express = require("express");
const app = express();
const port = 3001;

app.get("/download", (req, res) => {
  // Simulate a file download by waiting for 3 seconds
  setTimeout(() => {
    res.status(200).send("File downloaded");
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
