import { SERVER_URL } from "@/app/constants/api";
import { cookies } from "next/headers";

export async function getPayments() {
  const token = cookies().get("token")?.value;
  const userId = cookies().get("userId")?.value;

  if (!token || !userId) {
    throw new Error("Missing token or userId");
  }

  try {
    const res = await fetch(`${SERVER_URL}/user/payment/dashboard/${userId}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["payments"] },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      throw new Error("Failed to fetch data");
    }

    return data.data.userpayments;
  } catch (error) {
    console.error(error);
  }
}
