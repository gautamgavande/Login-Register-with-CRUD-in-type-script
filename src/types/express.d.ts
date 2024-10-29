
import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: string; // or whatever type your user ID is (e.g., User type)
    }
  }
}
