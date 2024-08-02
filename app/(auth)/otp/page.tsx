import OTPForm from "./otp-form";
import { cookies } from "next/headers";

function Verification() {
  const email = cookies().get("email");

  return (
    <>
      <header className="mb-10 text-center">
        <h1 className="mb-3 font-extrabold lg:text-3xl">
          Enter Verification Code!
        </h1>
        <p>
          We have sent a 4 digit verification code on{" "}
          <span className="flex items-center justify-center gap-x-2 font-bold">
            {String(email)}
            <div className="h-4 w-4 rounded-full bg-[#004485]" />
          </span>
        </p>
      </header>

      <main>
        <OTPForm />
      </main>

      <footer className="mt-10 text-center">
        <p>
          Didn&apos;t receive code?{" "}
          <button className="font-bold">Resend Again</button>
        </p>
      </footer>
    </>
  );
}

export default Verification;
