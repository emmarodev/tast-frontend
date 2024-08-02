"use server";

import { cookies } from "next/headers";
import { permanentRedirect, redirect } from "next/navigation";

export async function goToDashboard() {
  const token = cookies().get("token");

  if (!token) redirect("/sign-in");

  permanentRedirect("/dashboard");
}
