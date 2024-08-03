import Link from "next/link";
import getData from "../api/getProfileData";
import { editSocialLink } from "./action";
import {
  CompanyInfoForm,
  PermanentAddressForm,
  PersonalInfoForm,
  PresentAddressForm,
  SocialLinksForm,
} from "./edit-form";

export default async function EditProfile() {
  const data = await getData();

  return (
    <section className="rounded-xl bg-[#F2E6C9] px-6 py-5">
      <header className="mb-4 flex items-end justify-between">
        <div className="flex items-end gap-x-4">
          <div className="h-16 w-16 rounded-full border border-black" />
          <div>
            <h3 className="font-semibold">{data.name}</h3>
            <p className="text-sm">Username: {data.name}</p>
          </div>
        </div>

        <Link href="/dashboard" className="text-lg font-semibold text-blue-700">
          Back
        </Link>
      </header>

      <main className="flex items-start gap-x-2">
        <section className="grid w-1/2 gap-y-2">
          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-lg font-semibold">
              Personal Information
            </h2>
            <PersonalInfoForm userData={data} />
          </section>

          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-lg font-semibold">
              Company Information
            </h2>
            <CompanyInfoForm companyInfo={data.company_info} />
          </section>
        </section>

        <section className="grid w-1/2 gap-y-2">
          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-lg font-semibold">
              Present Address
            </h2>
            <PresentAddressForm addressInfo={data.present_address} />
          </section>

          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-lg font-semibold">
              Permanent Address
            </h2>
            <PermanentAddressForm addressInfo={data.permanent_address} />
          </section>

          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-lg font-semibold">
              Social Links
            </h2>
            <SocialLinksForm
              socialLink={data.social_link}
              editSocials={editSocialLink}
            />
          </section>
        </section>
      </main>
    </section>
  );
}
