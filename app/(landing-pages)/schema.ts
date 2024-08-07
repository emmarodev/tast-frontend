import { z } from "zod";

export const contactUsSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please input your email" })
    .email({ message: "Invalid Email" }),
  message: z.string().min(1, { message: "What is your message" }),
  name: z.string().min(1, { message: "Please input your name" }),
  subject: z.string().min(1, { message: "Please input a message title" }),
});
