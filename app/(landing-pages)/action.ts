"use server";

import { SERVER_URL } from "@/app/constants/api";
import { cookies } from "next/headers";
import { contactUsSchema } from "./schema";
import { revalidatePath } from "next/cache";

export async function getData(path: string) {
  try {
    const res = await fetch(`${SERVER_URL}/${path}`);

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      throw new Error("Failed to fetch data");
    }
    console.log(data);

    return data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function subscribe(formData: FormData) {
  const body = {
    email: formData.get("email"),
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/subscribe`, {
      method: "POST",
      body: JSON.stringify(body),
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
    console.log(error);
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}

export async function contactUs(formData: FormData) {
  const validatedFields = contactUsSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }

  const userId = cookies().get("userId")?.value;

  const body = {
    ...validatedFields.data,
    userid: userId,
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/contactus`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();
    console.log(data);

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }

    return {
      message: ["Message submitted sucessfully"],
    };
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}

export const viewFavShare = async (
  body: {
    [index: string]: string;
    contain: string;
  },
  urlPath: string,
  refetchPath: string,
) => {
  try {
    const res = await fetch(`${SERVER_URL}/${urlPath}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const resData = await res.json();

    console.log(resData);
  } catch (error) {
    console.log(error);
  }

  revalidatePath(refetchPath, "page");
};
