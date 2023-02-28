//npm imports:
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

//local imports:
import articleRoutes from "./routes/articleRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import { invalidRoutes } from "./utils/invalidRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use("/api/wiki-ideas", articleRoutes, categoryRoutes);

app.use(invalidRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
