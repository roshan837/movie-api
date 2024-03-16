import express from "express";
import movieRoutes from "./routes/movie";
import reviewRoutes from "./routes/review";
import database from "./db";
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use("/", movieRoutes);
app.use("/", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

database.once("open", () => {
  console.log("Database connected");
});
