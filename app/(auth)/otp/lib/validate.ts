import { z } from "zod";

export const OTPFormValidationSchema = z.object({
  num1: z.number({
    required_error: "",
  }),
  num2: z.number({
    required_error: "",
  }),
  num3: z.number({
    required_error: "",
  }),
  num4: z.number({
    required_error: "",
  }),
});
export type SignUpFormValueType = z.infer<typeof OTPFormValidationSchema>;
