"use client";

import { useFormState } from "react-dom";
import { FormState } from "./definition";
import { signup } from "./action";
import TextInput from "../components/text-input";
import SubmitButton from "../components/submit-button";

const initialState: FormState = {
  email: [],
  password: [],
  name: [],
  message: [],
};

export default function SignupForm() {
  const [state, formAction] = useFormState(signup, initialState);

  return (
    <form action={formAction} className="w-full">
      {state.message && state.message?.length > 0 && (
        <p aria-live="polite" className="mb-4 text-center text-sm text-red-500">
          {state.message[0]}
        </p>
      )}

      <div className="flex flex-col gap-y-6">
        <TextInput
          label="Username"
          name="name"
          placeholder=" "
          icon="./icons/profile.svg"
          type="text"
          errors={state}
        />
        <TextInput
          label="Email"
          name="email"
          icon="./icons/message.svg"
          placeholder=" "
          type="text"
          errors={state}
        />
        <div>
          <TextInput
            label="Password"
            name="password"
            type="password"
            icon="./icons/password-check.svg"
            placeholder=" "
            errors={state}
          />
          <p className="text-medium mt-1 text-xs text-[#656565]">
            Password should be at least 8 characters long
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <SubmitButton pendingText="Signing up..." text="Sign Up" />
      </div>
    </form>
  );
}
