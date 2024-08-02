import Link from "next/link";
import LoginForm from "./login-form";

function SignIn() {
  return (
    <>
      <header className="mb-10 text-center">
        <h1 className="mb-3 font-extrabold lg:text-4xl">Login!</h1>
        <p>Login with your details to get started now.</p>
      </header>

      <main>
        <LoginForm />
      </main>

      <footer className="mt-10 text-center">
        <p>
          Dont have an account?{" "}
          <Link href="/sign-up" className="font-bold">
            Sign up
          </Link>
        </p>
      </footer>
    </>
  );
}

export default SignIn;
