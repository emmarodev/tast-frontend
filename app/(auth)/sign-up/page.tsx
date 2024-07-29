import Link from "next/link";
import SignUpForm from "./components/signup-form";

function SignUp() {
  return (
    <>
      <header className="text-center mb-[30px]">
        <h1 className="text-xl font-extrabold lg:text-3xl  mb-[13px]">
          Create Account!
        </h1>
        <p className="sm:text-[18px]">
          Register your details to get started
        </p>
      </header>
      <main>
        <SignUpForm />
      </main>
      <footer className="mt-3 text-center">
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-bold text-base">
            Sign in
          </Link>
        </p>
      </footer>
    </>
  );
}

export default SignUp;
