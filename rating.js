import express from "express";
import { createProductReview } from "../controllers/productController.js";

router.route("/:id/reviews").post(protect, createProductReview);
