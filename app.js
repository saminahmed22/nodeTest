const express = require("express");
const fs = require("fs");
const app = express();

// Listen for requests
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Router
app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./contact-me.html", { root: __dirname });
});

// 404 page
app.use((req, res) => {
  res.sendFile("./404.html", { root: __dirname });
});
