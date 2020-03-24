import Express from "express";
const router = Express.Router();

router.get("/", (req, res) => {
  res.send("Please use the API at /api/");
});

export default router;
