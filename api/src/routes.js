import express from "express";
const routes = express.Router();

routes.post("/certificates", async (req, res) => {
  //TODO: Call microservice
  console.log(req.producer);

  return res.json({
    ok: true
  });
});

export default routes;
