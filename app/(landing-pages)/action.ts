import { SERVER_URL } from "@/app/constants/api";

export async function getData(path: string) {
  try {
    const res = await fetch(`${SERVER_URL}/${path}`);

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      throw new Error("Failed to fetch data");
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
}
