//npm imports:
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

//local imports:
import articleRoutes from "./routes/articleRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use("/api/wiki-ideas", articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
