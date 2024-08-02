import Link from "next/link";
import SignUpForm from "./signup-form";

function SignUp() {
  return (
    <>
      <header className="mb-10 text-center">
        <h1 className="mb-3 font-extrabold lg:text-5xl">Create Account!</h1>
        <p>Register your details to get started</p>
      </header>

      <main>
        <SignUpForm />
      </main>

      <footer className="mt-10 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/sign-in" className="font-bold">
            Sign in
          </Link>
        </p>
      </footer>
    </>
  );
}

export default SignUp;
