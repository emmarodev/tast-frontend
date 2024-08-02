"use server";

import { SERVER_URL } from "@/app/constants/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function verifyToken(token: string, verificationFor: string) {
  const fetchPath =
    verificationFor === "signup"
      ? "/user/confirmcode"
      : "/user/confirm/forgotpassword/code";

  const redirectPath =
    verificationFor === "signup" ? "/sign-up-success" : "/change-password";

  const email = cookies().get("email");

  const body =
    verificationFor === "signup"
      ? { code: token }
      : { code: token, email: email!.value };

  try {
    const res = await fetch(`${SERVER_URL}${fetchPath}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "Something went wrong try again."],
      };
    }
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }

  redirect(redirectPath);
}
