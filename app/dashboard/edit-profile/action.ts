"use server";

import { SERVER_URL } from "@/app/constants/api";
import {
  addressSchema,
  companyInfoSchema,
  personalInfoSchema,
  socialLinkSchema,
} from "./validate";
import { cookies } from "next/headers";
import { SocialLink } from "../definition";
import { revalidateTag } from "next/cache";

export async function editPersonalInfo(formData: FormData) {
  const validatedInputs = personalInfoSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    occupation: formData.get("occupation"),
    language: formData.get("language"),
    dob: formData.get("dob"),
    phone: formData.get("phone"),
    identification: formData.get("identification"),
  });

  if (!validatedInputs.success) {
    return validatedInputs.error.flatten().fieldErrors;
  }

  const { language, ...rest } = validatedInputs.data;
  const userId = cookies().get("userId")?.value;
  const token = cookies().get("token")?.value;

  const body = {
    ...rest,
    userid: userId,
    language: language.split(","),
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/update/details`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    console.log(data);

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }

    revalidateTag("personalDetails");
    return {
      message: ["Your personal details have been updated successfully"],
    };
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}

export async function editCompanyInfo(formData: FormData) {
  const validatedInputs = companyInfoSchema.safeParse({
    email: formData.get("email"),
    phone: formData.get("phone"),
    website_url: formData.get("website_url"),
    company_name: formData.get("company_name"),
  });

  if (!validatedInputs.success) {
    return validatedInputs.error.flatten().fieldErrors;
  }

  const userId = cookies().get("userId")?.value;
  const token = cookies().get("token")?.value;
  const body = {
    ...validatedInputs.data,
    userid: userId,
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/update/company/info`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }

    return {
      message: ["Your company info have been successfully updated"],
    };
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}

export async function editPresentAddress(formData: FormData) {
  const validatedInputs = addressSchema.safeParse({
    country: formData.get("country"),
    city: formData.get("city"),
    state: formData.get("state"),
    postalzone: formData.get("postalzone"),
  });

  if (!validatedInputs.success) {
    return validatedInputs.error.flatten().fieldErrors;
  }

  const userId = cookies().get("userId")?.value;
  const token = cookies().get("token")?.value;
  const body = {
    ...validatedInputs.data,
    userid: userId,
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/update/present/address`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }

    revalidateTag("personalDetails");
    return {
      message: ["Your present address have been updated"],
    };
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}

export async function editPermanentAddress(formData: FormData) {
  const validatedInputs = addressSchema.safeParse({
    country: formData.get("country"),
    city: formData.get("city"),
    state: formData.get("state"),
    postalzone: formData.get("postalzone"),
  });

  if (!validatedInputs.success) {
    return validatedInputs.error.flatten().fieldErrors;
  }

  const userId = cookies().get("userId")?.value;
  const token = cookies().get("token")?.value;
  const body = {
    ...validatedInputs.data,
    userid: userId,
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/update/permanent/address`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }

    revalidateTag("personalDetails");
    return {
      message: ["Your permanent address have been updated"],
    };
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}

export async function editSocialLink(formData: SocialLink) {
  const validatedInputs = socialLinkSchema.safeParse({
    url: formData.url,
    logo: formData.logo,
  });

  if (!validatedInputs.success) {
    return validatedInputs.error.flatten().fieldErrors;
  }

  const userId = cookies().get("userId")?.value;
  const token = cookies().get("token")?.value;
  const body = {
    social_link: [validatedInputs.data],
    userid: userId,
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/update/social_link`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data);

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }

    revalidateTag("personalDetails");
    return {
      message: ["You have successfully updated your social links"],
    };
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}
