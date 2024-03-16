// src/database.ts

import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://roshan5050:roshan5050@cluster0.md0cpyx.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

export default mongoose.connection;
