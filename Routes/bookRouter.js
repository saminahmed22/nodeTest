const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));

bookRouter.get("/:bookID", (req, res) => {
  const { bookID } = req.params;
  res.send(`Book ID: ${bookID}`);
});

module.exports = bookRouter;
