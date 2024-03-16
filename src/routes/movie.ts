// src/routes/movieRoutes.ts

import express from "express";
import { create, getAll, getById, update, remove } from "../controllers/movie";

const router = express.Router();

// Create a new movie
router.post("/movies", create);

// Get all movies
router.get("/movies", getAll);

// Get a single movie by ID
router.get("/movies/:id", getById);

// Update a movie by ID
router.put("/movies/:id", update);

// Delete a movie by ID
router.delete("/movies/:id", remove);

export default router;
