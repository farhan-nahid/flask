import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Prisma is awesome!" });
});

app.post("/", async (req: Request, res: Response) => {
  const { title, content } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    res.json({ data: post });
  } catch (error: any) {
    res.json({ error: error.message });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
