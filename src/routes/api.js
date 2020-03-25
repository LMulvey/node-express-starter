import Express from "express";
const router = Express.Router();

router.get("/", (req, res) => {
  res.json({ success: true });
});

export default router;
