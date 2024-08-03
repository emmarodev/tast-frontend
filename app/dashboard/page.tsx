import Link from "next/link";
import Details from "./components/Details";
import { ProfileDataProps } from "./definition";
import getData from "./api/getProfileData";
import Image from "next/image";

export default async function Profile() {
  let data: ProfileDataProps | null = null;
  try {
    data = await getData();
  } catch (error) {
    console.error(error);
    return <p>Error fetching profile data</p>;
  }

  return (
    <section className="rounded-xl bg-[#F2E6C9] px-6 py-5">
      <header className="mb-4 flex items-end justify-between">
        <div className="flex items-end gap-x-4">
          <div className="h-16 w-16 rounded-full border border-black" />
          <div>
            <h3 className="font-semibold">Mr. Jack</h3>
            <p className="text-sm">Username: {data && data.name}</p>
          </div>
        </div>

        <Link
          href="/dashboard/edit-profile"
          className="text-lg font-semibold text-blue-700"
        >
          Edit
        </Link>
      </header>

      <main className="flex items-start gap-x-4 gap-y-2 lg:flex-col xl:flex-row">
        <section className="w-full rounded-lg bg-white py-4 xl:w-1/2">
          <h2 className="mb-4 text-center text-xl font-semibold">
            Personal Information
          </h2>
          <Details label="Full Name" data={data.name || "-"} />
          <Details label="Occupation" data={data.occupation || "-"} />
          <Details
            label="Speaking Language"
            data={data.language?.length ? data.language.join(", ") : "-"}
          />
          <Details label="Date of Birth" data={data.dob || "-"} />
          <Details
            label="National Identification Number/Passport Number"
            data={data.identification || "-"}
          />
          <Details
            label="Present Address"
            data={
              data.present_address
                ? [
                    data.present_address.city,
                    data.present_address.state,
                    data.present_address.country,
                  ].join(" ")
                : "-"
            }
          />
          <Details
            label="Permanent Address"
            data={
              data.permanent_address
                ? [
                    data.permanent_address.city,
                    data.permanent_address.state,
                    data.permanent_address.country,
                  ].join(" ")
                : "-"
            }
          />
          <Details label="Phone No" data={"-"} />
          <Details label="Email" data={data.email || "-"} />
        </section>

        <section className="grid w-full gap-y-2 xl:w-1/2">
          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-xl font-semibold">
              Company Information
            </h2>

            <Details
              label="Company Name"
              data={data.company_info?.company_name || "-"}
            />
            <Details label="Phone No." data={data.company_info?.phone || "-"} />
            <Details label="Email" data={data.company_info?.email || "-"} />
            <Details
              label="Website Url"
              data={data.company_info?.website_url || "-"}
            />
          </section>

          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-xl font-semibold">
              Social Links
            </h2>

            <ul className="px-4">
              {data.social_link.length !== 0 ? (
                data.social_link.map((obj, i) => (
                  <li key={i}>
                    <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#172554]">
                      {/* <Image
                        src={"obj.logo"}
                        alt="icon"
                        width={30}
                        height={30}
                      /> */}
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-center">No link available</p>
              )}
            </ul>
          </section>
        </section>
      </main>
    </section>
  );
}
