import express from "express";
import userRouters from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";
import authRoutes from "./routes/authRoutes";
import { authenticateToken } from "./middlewares/authMiddleware";

const app = express();
app.use(express.json());
app.use("/user", authenticateToken, userRouters);
app.use("/tweet", authenticateToken, tweetRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("Hello world, updated again");
});

app.listen(3000, () => {
	console.log("Server ready at localhost:3000");
});
