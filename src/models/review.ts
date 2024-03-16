import mongoose, { Document, Schema } from "mongoose";

export interface Review extends Document {
  id?: number;
  movieId: string;
  reviewerName?: string;
  rating: number;
  reviewComments: string;
}

const reviewSchema = new Schema<Review>({
  id: { type: String },
  movieId: { type: String, required: true },
  reviewerName: { type: String },
  rating: { type: Number, required: true },
  reviewComments: { type: String, required: true },
});

export default mongoose.model<Review>("Review", reviewSchema);
