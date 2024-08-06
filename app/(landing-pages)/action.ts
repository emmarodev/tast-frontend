import { SERVER_URL } from "@/app/constants/api";

// This is for a regular fetch that doesn't need any authorization or auth
// where SERVER_URL is the live server url hostname https://tast-pwvf.onrender.com
// the path variable is the path name anything that follows after the hostname

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
