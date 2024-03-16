import mongoose, { Document, Schema } from "mongoose";

export interface Movie extends Document {
  id: number;
  name: string;
  releaseDate: Date;
  averageRating?: number;
}

const movieSchema = new Schema<Movie>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  averageRating: { type: Number, default: null },
});

export default mongoose.model<Movie>("Movie", movieSchema);
