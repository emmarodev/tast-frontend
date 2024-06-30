import ForgotPasswordForm from "./components/forgot-password-form";

function ForgotPassword() {
  return (
    <>
      <header className="text-center 2xl:mb-[78px] mb-10">
        <h1 className="text-2xl font-extrabold lg:text-5xl 2xl:text-[80px] 2xl:leading-[97.52px] mb-[13px]">
          Forget password
        </h1>
        <p className="sm:text-[18px] 2xl:text-[25px] ">
          Enter your valid email address where you receive otp.
        </p>
      </header>
      <main>
        <ForgotPasswordForm />
      </main>
    </>
  );
}

export default ForgotPassword;
