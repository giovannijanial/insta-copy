import express from "express";
const router = express();

router.get("/", (req, res) => {
	res.send("API working!");
});

export default router;
