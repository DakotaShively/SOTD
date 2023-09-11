import { Router } from "express";

const router = Router();
//Tweet CRUD

//Create Tweet
router.post("/", (req, res) => {
	res.status(501).json({ error: "Not Implemented" });
});
//Get list of Tweet
router.get("/", (req, res) => {
	res.status(501).json({ error: "Not Implemented" });
});

//Get one tweet
router.get("/:id", (req, res) => {
	const { id } = req.params;
	res.status(501).json({ error: "Not Implemented: ${id}" });
});

//Update tweet
router.put("/:id", (req, res) => {
	const { id } = req.params;
	res.status(501).json({ error: "Not Implemented: ${id}" });
});

//Delete tweet
router.delete("/:id", (req, res) => {
	const { id } = req.params;
	res.status(501).json({ error: "Not Implemented: ${id}" });
});

export default router;
