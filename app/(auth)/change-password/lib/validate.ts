import { z } from "zod";

export const ChangePasswordFormValidationSchema = z.object({
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
