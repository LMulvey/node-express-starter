import Express from "express";
const router = Express.Router();

router.get("/", validateDistance, (req, res) => {
  res.json({ success: true });
});

export default router;
