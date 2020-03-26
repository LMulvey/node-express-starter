import router from "../lib/asyncRouter";

router.get("/", (req, res) => {
  res.json({ success: true });
});

export default router;
