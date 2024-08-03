import { z } from "zod";

export const personalInfoSchema = z.object({
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

export const addressSchema = z.object({
  country: z.string(),
  city: z.string(),
  state: z.string(),
  postalzone: z.string(),
});

export const companyInfoSchema = z.object({
  company_name: z.string(),
  phone: z.string(),
  email: z.string(),
  website_url: z.string(),
});

export const socialLinkSchema = z.object({
  url: z.string(),
  logo: z.string(),
});
