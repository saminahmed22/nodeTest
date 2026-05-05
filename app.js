const express = require("express");
const app = express();
const path = require("node:path");

const authorRouter = require("./Routes/authorRouter");
const bookRouter = require("./Routes/bookRouter");
const indexRouter = require("./Routes/indexRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Listen for requests
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`My first Express app - listening on port ${PORT}!`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Router
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

// 404 page
app.use((req, res) => {
  res.sendFile("./404.html", { root: __dirname });
});
