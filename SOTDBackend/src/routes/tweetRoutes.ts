import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();
//Tweet CRUD

//Create Tweet
router.post("/", async (req, res) => {
	const { content, image, userId } = req.body;
	console.log(content, image, userId);

	try {
		const result = await prisma.tweet.create({
			data: {
				content,
				image,
				userId,
			},
		});

		res.json(result);
	} catch (e) {
		res.status(400).json({ error: "username should be unique" });
	}
});
//Get list of Tweet
router.get("/", async (req, res) => {
	const allTweets = await prisma.tweet.findMany({
		include: {
			user: {
				select: {
					id: true,
					name: true,
					username: true,
					image: true,
				},
			},
		},
	});
	res.json(allTweets);
});

//Get one tweet
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } });
	if (!tweet) {
		return res.status(404).json({ error: "Post not found" });
	}
	res.status(501).json({ error: "Not Implemented: ${id}" });
});

//Delete tweet
router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	await prisma.tweet.delete({ where: { id: Number(id) } });
	res.status(200);
});

export default router;
