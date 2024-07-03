import Link from "next/link";
import Details from "../components/Details";

function Profile() {
  return (
    <section className="bg-[#F2E6C9] rounded-xl py-5 px-6">
      <header className="flex justify-between items-end mb-4">
        <div className="flex items-end gap-x-4">
          <div className="h-16 w-16 rounded-full border border-black" />
          <div>
            <h3 className="font-semibold">Mr. Jack</h3>
            <p className="text-sm">Username: Jack1542</p>
          </div>
        </div>

        <Link
          href="/dashboard/edit-profile"
          className="text-lg text-blue-700 font-semibold"
        >
          Edit
        </Link>
      </header>
      <main className="flex gap-x-2 items-start">
        <section className="bg-white w-1/2 rounded-lg py-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Personal Information
          </h2>

          <Details label="Full Name" data="jack" />
          <Details label="Occupation" data="Student" />
          <Details label="Speaking Language" data="English" />
          <Details label="Date of Birth" data="02-03-2024" />
          <Details
            label="National Identification Number/Passport Number"
            data="466566556"
          />
          <Details label="Present Address" data="canada.sudo.UF46.NST" />
          <Details label="Permanent Address" data="canada.sudo.UF46.NST" />
          <Details label="Phone No" data="+44 56412646" />
          <Details label="Email " data="abc@gmail.com" />
        </section>

        <section className="w-1/2 grid gap-y-2">
          <section className="bg-white rounded-lg py-4">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Company Information
            </h2>

            <Details label="Company Name" data="tast.LTD" />
            <Details label="Phone No." data="+1466644661" />
            <Details label="Email" data="abc@gmail.com" />
            <Details label="Website Url" data="www.abc.com" />
          </section>
          <section className="bg-white rounded-lg py-4">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Social Links
            </h2>

            <div className="flex justify-center gap-x-4">
              <div className="h-10 w-10 border rounded-full border-black"></div>
              <div className="h-10 w-10 border rounded-full border-black"></div>
              <div className="h-10 w-10 border rounded-full border-black"></div>
              <div className="h-10 w-10 border rounded-full border-black"></div>
            </div>
          </section>
        </section>
      </main>
    </section>
  );
}

export default Profile;
