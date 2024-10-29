
import { Router } from "express";
import {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/authController"; // Adjust the import path as necessary
import { authenticate } from "../middlewares/authMiddleware"; // Make sure this path is correct

const router = Router();

// Register a new user
router.post("/register", register);

// Login an existing user
router.post("/login", login);

// Get all users (protected)
router.get("/",authenticate, getAllUsers);

// Get user by ID (protected)
router.get("/:id",authenticate, getUserById);

// Update user (protected)
router.put("/:id",authenticate, updateUser);

// Delete user (protected)
router.delete("/:id",authenticate,  deleteUser);

export default router;
