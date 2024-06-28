import { z } from "zod";

export const ChangePasswordFormValidationSchema = z.object({
  email: z
    .string({
      required_error: "Please input your email address",
    })
    .email({ message: "Invalid email address" }),
  currentpassword: z.string({
    required_error: "Please input your previous password",
  }),
  newpassword: z.string({
    required_error: "Please a new password",
  }),
});
export type ChangePasswordFormValueType = z.infer<
  typeof ChangePasswordFormValidationSchema
>;
