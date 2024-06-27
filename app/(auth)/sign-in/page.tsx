import LoginForm from "./components/login-form";

function SignIn() {
  return (
    <>
      <header className="text-center 2xl:mb-[78px] mb-10">
        <h1 className="text-3xl font-extrabold lg:text-5xl 2xl:text-[80px] 2xl:leading-[97.52px] mb-[13px]">
          Login!
        </h1>
        <p className="sm:text-[18px] 2xl:text-[25px] ">
          Login with your details to get started now.
        </p>
      </header>
      <main>
        <LoginForm />
      </main>
    </>
  );
}

export default SignIn;
