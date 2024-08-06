"use server";

import { SERVER_URL } from "@/app/constants/api";
import { signUpSchema } from "./validate";
import { redirect } from "next/navigation";
import { FormState } from "./definition";
import { cookies } from "next/headers";

//Where the formData is gotten on clicking on the form and automatically sent to the server as it would in custom html, so we catch in using actions in forms in React
// The prevState is a behaviour of useFormState a hook we use to return some messaege from this server action
// I used zod to validate the inputs I would show you my schema
// After validating the input the next thing would be a return a message to the user based on the validating we are only concerned if there is an error
// If validation passes we proceed to the try and catch block where we interact with the api
// Just go through it is a fetch request to the endpoint provided, the you pass in an object whch contains the method and the header object also
// Then on successful authorization of the credentials we redirect the user to the protected route

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

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }

    cookies().set("email", validateFields.data.email);
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }

  redirect("/otp?verify=signup");
}
