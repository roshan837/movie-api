import { Request, Response } from "express";
import MovieModel, { Movie } from "../models/movie";
import ReviewModel from "../models/review";
let id = 0;
export const create = async (req: Request, res: Response) => {
  try {
    await MovieModel.create({ ...req.body, id: id++ });
    res.status(201).json("Movie Added Successfully");
  } catch (error) {
    res.status(500).json({ message: "Failed to create movie" });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const movies: Movie[] = await MovieModel.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;
    const movie: Movie | null = await MovieModel.findById(movieId);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;
    const updatedMovie: Movie | null = await MovieModel.findByIdAndUpdate(
      movieId,
      req.body,
      { new: true }
    );
    if (updatedMovie) {
      res.status(200).json(updatedMovie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update movie" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;
    const deletedMovie: Movie | null = await MovieModel.findOneAndDelete({
      id: movieId,
    });
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    const deleteReviewsResult = await ReviewModel.deleteMany({
      movieId: deletedMovie.id,
    });

    if (deleteReviewsResult.deletedCount === 0) {
      console.log("No reviews found for deletion.");
    }
    res.status(200).json(deletedMovie);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie" });
  }
};
