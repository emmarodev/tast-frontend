"use client";

// import Input from "../components/TextInput";

function Verification() {
  // const email = localStorage.getItem("email");

  return (
    <section className="text-center">
      <h1 className="font-extrabold text-[50px] leading-[97.52px] ">
        Enter Verification Code!
      </h1>
      <p className="font-normal text-[25px] leading-[30.48px]">
        We have sent a 4 digit verification code on{" "}
        <span>
          email
          <div />
        </span>
      </p>

      <form className="mt-[71px] max-w-[714px]">
        <ul className="flex gap-x-[36.95px]">
          {/* <Input />
          <Input />
          <Input />
          <Input /> */}
        </ul>

        {/* <Button text={"Verify"} /> */}
      </form>
    </section>
  );
}

export default Verification;
