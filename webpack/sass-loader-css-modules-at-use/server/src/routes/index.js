import express from "express";
import { PageProps } from "#classes/props";
const router = express.Router();

// GET home page.
router.get("*", (req, res, next) => {
  const props = new PageProps("GG Test");
  res.render("index.pug", props);
});

export default router;
