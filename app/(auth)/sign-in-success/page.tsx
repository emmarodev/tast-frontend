import Image from "next/image";
import SubmitButton from "../components/submit-button";
import { goToDashboard } from "./action";

function Success() {
  return (
    <div className="grid gap-y-6 text-center">
      <Image
        src="/images/login-success.png"
        alt="a paper with a blue complete stamp"
        width={150}
        height={150}
        className="mx-auto"
      />

      <div>
        <h1 className="mb-4 text-3xl font-extrabold">Login Successfully!</h1>
        <p>
          You have successfully login your details and now you are ready to go.
        </p>
      </div>

      <form action={goToDashboard}>
        <div className="flex justify-center">
          <SubmitButton text={"Continue"} pendingText="Waiting..." />
        </div>
      </form>
    </div>
  );
}

export default Success;
