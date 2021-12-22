import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Servidor rodando",
  });
});

app.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
