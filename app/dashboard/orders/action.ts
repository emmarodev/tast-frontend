"use server";

import { SERVER_URL } from "@/app/constants/api";
import { cookies } from "next/headers";
import { z } from "zod";

export async function createPaymentForWallet(
  prevState: any,
  formData: FormData,
) {
  const createPaymentSchema = z.object({
    additional_note: z.string(),
    transaction_receipt: z.instanceof(File),
    transaction_id: z
      .string()
      .min(1, { message: "Please input your transaction ID" }),
    account_number: z
      .string()
      .min(1, { message: "Please input your account number" }),
    bank_wallet: z
      .string()
      .min(1, { message: "Please input your bank wallet" }),
    account_name: z
      .string()
      .min(1, { message: "Please input your account name" }),
    bankid: z.string().min(1, { message: "Please input bank id" }),
    orderid: z.string().min(1, { message: "Please input order id" }),
    bank_number: z
      .string()
      .min(1, { message: "Please input your account name" }),
    bank_name: z.string().min(1, { message: "Please input your account name" }),
    amount: z.string().min(1, { message: "Please input your account name" }),
  });

  const validatedFields = createPaymentSchema.safeParse({
    additional_note: formData.get("additional_note"),
    transaction_receipt: formData.get("transaction_receipt"),
    transaction_id: formData.get("transaction_id"),
    account_number: formData.get("account_number"),
    bank_wallet: formData.get("bank_wallet"),
    account_name: formData.get("account_name"),
    orderid: formData.get("orderid"),
    amount: formData.get("amount"),
    bankid: formData.get("bankid"),
    bank_number: formData.get("bank_number"),
    bank_name: formData.get("bank_name"),
  });

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }

  const token = cookies().get("token")?.value;
  const userId = cookies().get("userId")?.value;
  const { transaction_receipt, ...rest } = validatedFields.data;
  const body = {
    ...rest,
    transaction_receipt: transaction_receipt.name,
    userid: userId,
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/create/payment`, {
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

    return { success: true };
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}

export async function createRefund(formData: FormData) {
  const token = cookies().get("token")?.value;
  const userId = cookies().get("userId")?.value;

  const body = {
    account_name: formData.get("account_name"),
    orderid: formData.get("orderid"),
    bank_wallet: formData.get("bank_wallet"),
    amount: formData.get("amount"),
    transaction_receipt: formData.get("transaction_receipt"),
    bank_name: formData.get("bank_name"),
    account_number: formData.get("account_number"),
    routing_number: formData.get("routing_number"),
    code: formData.get("code"),
    reason: formData.get("reason"),
    currency: formData.get("currency"),
    userid: userId,
    additional_note: formData.get("additional_note"),
  };

  const { transaction_receipt, ...rest } = body;
  const payload = { ...rest, transaction_receipt: "*******" };

  try {
    const res = await fetch(`${SERVER_URL}/user/create/refund`, {
      method: "POST",
      body: JSON.stringify(payload),
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
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}
