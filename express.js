const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Server is started on port : ", PORT));
