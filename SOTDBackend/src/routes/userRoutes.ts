import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//User CRUD

//Create User
router.post("/", async (req, res) => {
	const { email, name, username } = req.body;
	console.log(email, name, username);

	try {
		const result = await prisma.user.create({
			data: {
				email,
				name,
				username,
				bio: "Is this how I post?",
			},
		});

		res.json(result);
	} catch (e) {
		res.status(400).json({ error: "username should be unique" });
	}
});

//Get list of Users
router.get("/", async (req, res) => {
	const allUser = await prisma.user.findMany({
		// select: {
		// 	id: true,
		// 	name: true,
		// 	image: true,
		// },
	});

	res.json(allUser);
});

//Get one user
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	const user = await prisma.user.findUnique({
		where: { id: Number(id) },
		include: { tweets: true },
	});

	res.json(user);
});

//Update user
router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { bio, name, image } = req.body;
	try {
		const result = await prisma.user.update({
			where: { id: Number(id) },
			data: { bio, name, image },
		});
		res.json(result);
	} catch (e) {
		res.status(400).json({ error: "failed to update the user" });
	}
});

//Delete User
router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	prisma.user.delete({ where: { id: Number(id) } });
	res.sendStatus(200).json({ error: "Failed to update user" });
});

export default router;
