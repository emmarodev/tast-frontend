"use server";

import { cookies } from "next/headers";
import { permanentRedirect, RedirectType } from "next/navigation";
import { SERVER_URL } from "@/app/constants/api";
import { loginSchema } from "./validate";
import { FormState } from "./definition";

export async function signIn(
  prevState: any,
  formData: FormData,
): Promise<FormState> {
  const validateFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return validateFields.error.flatten().fieldErrors;
  }

  try {
    const res = await fetch(`${SERVER_URL}/user/login`, {
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

    cookies().set("token", data.token);
    cookies().set("userId", data.userDetails._id);
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }

  permanentRedirect("/sign-in-success", RedirectType.replace);
}
