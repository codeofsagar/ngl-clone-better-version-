import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be between 3 and 20 characters long")
  .max(20, "Username must be between 3 and 20 characters long")
  .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores");

export const signupSchema=z.object({
username:usernameValidation, email:z.string().email({message :"Please enter a valid email"}),
password:z.string().min(8,{message:"Password must be at least 8 characters long"}),



   })
