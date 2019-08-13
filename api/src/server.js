import express from "express";

const app = express();

app.post("/certificates", (req, res) => {
  //TODO: Call microservice
  return res.json({ ok: true });
});

app.listen(3333);
