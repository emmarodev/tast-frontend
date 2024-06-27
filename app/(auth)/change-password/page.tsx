import CreateNewPassword from "./components/create-new-password-form";

function CreatePassword() {
  return (
    <>
      <header className="text-center mb-[78px]">
        <h1 className="text-3xl font-extrabold lg:text-5xl 2xl:text-[80px] 2xl:leading-[97.52px] mb-[13px] text-left">
          Enter new password!
        </h1>
        <p className="sm:text-[18px] 2xl:text-[25px]">
          Please enter a password for your security.
        </p>
      </header>

      <main>
        <CreateNewPassword />
      </main>
    </>
  );
}

export default CreatePassword;
