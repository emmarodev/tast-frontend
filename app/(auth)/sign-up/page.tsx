import SignUpForm from "./components/signup-form";

function SignUp() {
  return (
    <>
      <header className="text-center 2xl:mb-[78px] mb-[30px]">
        <h1 className="text-2xl font-extrabold lg:text-5xl 2xl:text-[80px] 2xl:leading-[97.52px] mb-[13px]">
          Create Account!
        </h1>
        <p className="sm:text-[18px] 2xl:text-[25px] ">
          Register your details to get started
        </p>
      </header>
      <main>
        <SignUpForm />
      </main>
    </>
  );
}

export default SignUp;
