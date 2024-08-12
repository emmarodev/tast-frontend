import { SERVER_URL } from "@/app/constants/api";
import { cookies } from "next/headers";

export async function getOrders() {
  const token = cookies().get("token")?.value;
  const userId = cookies().get("userId")?.value;

  if (!token || !userId) {
    throw new Error("Missing token or userId");
  }

  try {
    const res = await fetch(`${SERVER_URL}/user/order/dashboard/${userId}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["orders"] },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      throw new Error("Failed to fetch data");
    }

    return data.data.userorders;
  } catch (error) {
    console.error(error);
  }
}

export async function getBankDetails() {
  const userId = cookies().get("userId")?.value;
  const token = cookies().get("token")?.value;

  try {
    const res = await fetch(`${SERVER_URL}/user/retrieve/bank/`, {
      method: "POST",
      body: JSON.stringify({ userid: userId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "Something went wrong try again."],
      };
    }

    return data.data;
  } catch (error) {
    console.log(error);
  }
}
