import CreateNewPassword from "./create-new-password-form";

function CreatePassword() {
  return (
    <>
      <header className="mb-10 text-center">
        <h1 className="mb-3 font-extrabold lg:text-4xl">Enter new password!</h1>
        <p>Please enter a password for your security.</p>
      </header>

      <main>
        <CreateNewPassword />
      </main>
    </>
  );
}

export default CreatePassword;
