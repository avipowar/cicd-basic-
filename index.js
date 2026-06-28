import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  res.json({ message: "server is healthy v1", github: "actions v1" });
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
