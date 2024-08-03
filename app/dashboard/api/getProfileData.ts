"use server";

import { cookies } from "next/headers";
import { ProfileDataProps } from "../definition";
import { SERVER_URL } from "@/app/constants/api";

export default async function getData(): Promise<ProfileDataProps> {
  const token = cookies().get("token");
  const userId = cookies().get("userId");

  if (!token || !userId) {
    throw new Error("Missing token or userId");
  }

  const res = await fetch(`${SERVER_URL}/user/retrieve/profile`, {
    method: "POST",
    body: JSON.stringify({ userid: userId!.value }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token!.value}`,
    },
    next: { tags: ["personalDetails"] },
    cache: "force-cache",
  });

  const data = await res.json();

  if (!data.status || data.status_code === 400) {
    throw new Error("Failed to fetch data");
  }

  return data.data;
}
