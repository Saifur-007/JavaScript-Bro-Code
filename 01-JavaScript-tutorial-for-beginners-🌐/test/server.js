const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Send the files in the public folder to the browser.
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Live clock is running at http://localhost:${port}`);
});
