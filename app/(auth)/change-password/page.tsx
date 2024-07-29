import CreateNewPassword from "./components/create-new-password-form";

function CreatePassword() {
  return (
    <>
      <header className="text-center mb-[78px] mb-10">
        <h1 className="text-xl font-extrabold lg:text-3xl text-[80px] leading-[97.52px] mb-[13px]">
          Enter new password!
        </h1>
        <p className="sm:text-[18px] text-[25px]">
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
