const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("All books with author's name"));

indexRouter.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Book's name: ${name}`);
});

module.exports = indexRouter;
