const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Hello CI/CD 🚀" }));
app.get("/health", (req, res) => res.json({ status: "ok" }));



app.get("/api/todos", (req, res) => {
  res.json([{ id: 1, title: "Learn CI/CD", done: false }]);
});

module.exports = app;
