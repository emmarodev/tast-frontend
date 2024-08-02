"use server";

import { permanentRedirect, RedirectType } from "next/navigation";
import { changePasswordSchema } from "./validate";
import { SERVER_URL } from "@/app/constants/api";
import { FormState } from "./definition";
import { cookies } from "next/headers";

export async function createNewPassword(
  prevState: any,
  formData: FormData,
): Promise<FormState> {
  const validateFields = changePasswordSchema.safeParse({
    newpassword: formData.get("newpassword"),
    currentpassword: formData.get("currentpassword"),
  });

  if (!validateFields.success) {
    return validateFields.error.flatten().fieldErrors;
  }

  const email = cookies().get("email");

  try {
    const res = await fetch(`${SERVER_URL}/user/reset/password`, {
      method: "POST",
      body: JSON.stringify({ ...validateFields.data, email: email!.value }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }

  permanentRedirect("/change-password-success", RedirectType.replace);
}
