import { z } from "zod";

export const SignUpFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  username: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
});
