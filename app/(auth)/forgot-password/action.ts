"use server";

import { cookies } from "next/headers";
import { permanentRedirect, RedirectType } from "next/navigation";
import { SERVER_URL } from "@/app/constants/api";
import { forgetPasswordSchema } from "./validate";
import { FormState } from "./definition";

export async function updatePassword(
  prevState: any,
  formData: FormData,
): Promise<FormState> {
  const validateFields = forgetPasswordSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validateFields.success) {
    return validateFields.error.flatten().fieldErrors;
  }

  try {
    const res = await fetch(`${SERVER_URL}/user/forgot/password`, {
      method: "POST",
      body: JSON.stringify(validateFields.data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const { data } = await res.json();

    if (!data.status) {
      return {
        message: [data.message || "An unknown error occured"],
      };
    }

    cookies().set("email", validateFields.data.email);
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }

  permanentRedirect("otp" + "?" + "reset-password", RedirectType.replace);
}
