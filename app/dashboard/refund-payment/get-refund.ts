import { SERVER_URL } from "@/app/constants/api";
import { cookies } from "next/headers";

export async function getRefunds() {
  const token = cookies().get("token")?.value;
  const userId = cookies().get("userId")?.value;

  if (!token || !userId) {
    throw new Error("Missing token or userId");
  }

  try {
    const res = await fetch(`${SERVER_URL}/user/refund/dashboard/${userId}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["refunds"] },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      throw new Error("Failed to fetch data");
    }

    return data.data.userrefunds;
  } catch (error) {
    console.error(error);
  }
}
