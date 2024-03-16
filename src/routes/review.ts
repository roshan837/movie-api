// src/routes/reviewRoutes.ts

import express from 'express';
import { create, getAll, getById, update, remove, search } from '../controllers/review';

const router = express.Router();

// Create a new review
router.post('/reviews', create);

// Get all reviews
router.get('/reviews', getAll);

// Get a single review by ID
router.get('/reviews/:id', getById);

// Update a review by ID
router.put('/reviews/:id', update);

// Delete a review by ID
router.delete('/reviews/:id', remove);

// Search reviews
router.get('/reviews/search', search);

export default router;
