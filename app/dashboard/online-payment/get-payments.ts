import { SERVER_URL } from "@/app/constants/api";
import { cookies } from "next/headers";

export async function getPayments(id?: string) {
  const token = cookies().get("token")?.value;
  const userId = cookies().get("userId")?.value;

  if (!token || !userId) {
    throw new Error("Missing token or userId");
  }

  const url = id
    ? `${SERVER_URL}/user/payment/dashboard/${userId}/${id}`
    : `${SERVER_URL}/user/payment/dashboard/${userId}`;

  try {
    const res = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["payments"] },
    });

    const data = await res.json();
    console.log(data.data.userpayments);

    if (!data.status || data.status_code === 400) {
      throw new Error("Failed to fetch data");
    }

    if (id) return data;

    return data.data;
  } catch (error) {
    console.error(error);
  }
}
