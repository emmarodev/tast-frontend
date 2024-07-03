import { z } from "zod";

export const EditPersonalInfoFormValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  language: z.string(),
  dob: z.string(),
  phone: z.string(),
  identification: z.string(),
  email: z
    .string({
      required_error: "Please input your email address",
    })
    .email(),
});
export type EditPersonalInfoFormValueType = z.infer<
  typeof EditPersonalInfoFormValidationSchema
>;

export const EditPresentAddressFormValidationSchema = z.object({
  country: z.string(),
  city: z.string(),
  state: z.string(),
  postalzone: z.string(),
});
export type EditPresentAddressFormValueType = z.infer<
  typeof EditPresentAddressFormValidationSchema
>;

export const EditCompanyInfoFormValidationSchema = z.object({
  company_name: z.string(),
  phone: z.string(),
  email: z.string(),
  website_url: z.string(),
});
export type EditCompanyInfoFormValueType = z.infer<
  typeof EditCompanyInfoFormValidationSchema
>;
