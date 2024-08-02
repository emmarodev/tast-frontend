"use client";

import { useFormState } from "react-dom";
import TextInput from "../components/text-input";
import SubmitButton from "../components/submit-button";
import { createNewPassword } from "./action";
import { FormState } from "./definition";

const initialState: FormState = {
  currentpassword: [],
  newpassword: [],
  message: [],
};

export default function CreateNewPassword() {
  const [state, formAction] = useFormState(createNewPassword, initialState);

  return (
    <form action={formAction} className="w-full">
      {state.message && state.message?.length > 0 && (
        <p aria-live="polite" className="mb-4 text-center text-sm text-red-500">
          {state.message[0]}
        </p>
      )}

      <div className="flex flex-col gap-y-6">
        <TextInput
          label="Current Password"
          name="currentpassword"
          type="password"
          icon="./icons/password-check.svg"
          placeholder=" "
          errors={state}
        />

        <TextInput
          label="New Password"
          name="newpassword"
          type="password"
          icon="./icons/password-check.svg"
          placeholder=" "
          errors={state}
        />
      </div>

      <div className="mt-6 flex justify-center">
        <SubmitButton pendingText="Updating..." text="Continue" />
      </div>
    </form>
  );
}
