import { z } from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please input your email" })
    .email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password should be a min of 8 characters" }),
  name: z.string().min(1, { message: "Please input your name" }),
});
