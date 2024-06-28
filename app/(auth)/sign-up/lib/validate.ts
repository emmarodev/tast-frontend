import { z } from "zod";

export const SignUpFormValidationSchema = z.object({
  email: z
    .string({
      required_error: "Please input your email address",
    })
    .email({ message: "Invalid email address" }),
  password: z.string({
    required_error: "Please input your password",
  }),
  name: z.string({
    required_error: "Please input your user name",
  }),
});
export type SignUpFormValueType = z.infer<typeof SignUpFormValidationSchema>;
