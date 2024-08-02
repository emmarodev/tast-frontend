"use server";

import { SERVER_URL } from "@/app/constants/api";
import { signUpSchema } from "./validate";
import { permanentRedirect, RedirectType } from "next/navigation";
import { FormState } from "./definition";

export async function signup(
  prevState: any,
  formData: FormData,
): Promise<FormState> {
  const validateFields = signUpSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return validateFields.error.flatten().fieldErrors;
  }

  try {
    const res = await fetch(`${SERVER_URL}/user/signup`, {
      method: "POST",
      body: JSON.stringify(validateFields.data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const { data } = await res.json();

    if (!data.status) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }

  permanentRedirect("/sign-in-success", RedirectType.replace);
}
