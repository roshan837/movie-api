import { Request, Response } from "express";
import ReviewModel, { Review } from "../models/review";
let id = 0;
export const create = async (req: Request, res: Response) => {
  try {
    await ReviewModel.create({ ...req.body, id: id++ });
    res.status(201).json("Review Added Successfully");
  } catch (error) {
    res.status(500).json({ message: "Failed to create review" });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const reviews: Review[] = await ReviewModel.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.id;
    const review: Review | null = await ReviewModel.findById(reviewId);
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch review" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.id;
    const updatedReview: Review | null = await ReviewModel.findByIdAndUpdate(
      reviewId,
      req.body,
      { new: true }
    );
    if (updatedReview) {
      res.status(200).json(updatedReview);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update review" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.id;
    const deletedReview: Review | null = await ReviewModel.findByIdAndDelete(
      reviewId
    );
    if (deletedReview) {
      res.status(200).json(deletedReview);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review" });
  }
};

export const search = async (req: Request, res: Response) => {
  try {
    const searchParam = req.query.search as string;
    const regex = new RegExp(searchParam, "i");
    const reviews: Review[] = await ReviewModel.find({ reviewComments: regex });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to search reviews" });
  }
};
