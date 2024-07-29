import Link from "next/link";
import LoginForm from "./components/login-form";

function SignIn() {
  return (
    <>
      <header className="text-center mb-10">
        <h1 className="text-2xl font-extrabold lg:text-4xl mb-[13px]">
          Login!
        </h1>
        <p className="sm:text-[18px]">
          Login with your details to get started now.
        </p>
      </header>
      <main>
        <LoginForm />
      </main>
      <footer className="mt-3 text-center">
        <p className="text-sm">
          Dont have an account?{" "}
          <Link href="/sign-up" className="font-bold text-base">
            Sign up
          </Link>
        </p>
      </footer>
    </>
  );
}

export default SignIn;
