"use client";

import Link from "next/link";
import Details from "./components/Details";
import { useEffect, useState } from "react";

function Profile() {
  const [data, setData] = useState<any>();
  const [errMsg, setErrMsg] = useState();
  console.log(data);

  useEffect(() => {
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    fetch("https://tast-pwvf.onrender.com/user/retrieve/profile", {
      method: "POST",
      body: JSON.stringify({ userid: userid }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);

        if (data.status && data.status_code === 200) {
          setData(data.data);
        } else {
          setErrMsg(data.message);
        }
      }),
    );
  }, []);

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

          <Details
            label="Full Name"
            data={data?.name === "" ? "-" : data?.name}
          />
          <Details
            label="Occupation"
            data={data?.occupation === "" ? "-" : data?.occupation}
          />
          <Details
            label="Speaking Language"
            data={data?.language.length === 0 ? "-" : data?.language.join(", ")}
          />
          <Details
            label="Date of Birth"
            data={data?.dob === "" ? "-" : data?.dob}
          />
          <Details
            label="National Identification Number/Passport Number"
            data={data?.identification === "" ? "-" : data?.identification}
          />
          <Details
            label="Present Address"
            data={[
              data?.present_address.city,
              data?.present_address.state,
              data?.present_address.country,
            ].join(" ")}
          />
          <Details
            label="Permanent Address"
            data={[
              data?.permanent_address.city,
              data?.permanent_address.state,
              data?.permanent_address.country,
            ].join(" ")}
          />
          <Details
            label="Phone No"
            data={data?.phone_no === undefined ? "-" : data?.phone_no}
          />
          <Details
            label="Email "
            data={data?.email === "" ? "-" : data?.email}
          />
        </section>

        <section className="grid w-full gap-y-2 xl:w-1/2">
          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-xl font-semibold">
              Company Information
            </h2>

            <Details
              label="Company Name"
              data={
                data?.company_info?.company_name === ""
                  ? "-"
                  : data?.company_info.company_name
              }
            />
            <Details
              label="Phone No."
              data={
                data?.company_info?.phone === ""
                  ? "-"
                  : data?.company_info.phone
              }
            />
            <Details
              label="Email"
              data={
                data?.company_info?.email === ""
                  ? "-"
                  : data?.company_info.email
              }
            />
            <Details
              label="Website Url"
              data={
                data?.company_info?.website_url === ""
                  ? "-"
                  : data?.company_info.website_url
              }
            />
          </section>
          <section className="rounded-lg bg-white py-4">
            <h2 className="mb-4 text-center text-xl font-semibold">
              Social Links
            </h2>

            <div className="flex justify-center gap-x-4">
              {data?.social_link.length === 0 ? (
                <p>No link available</p>
              ) : (
                data?.social_link.map((d: any, i: number) => (
                  <div
                    key={d._id}
                    className="h-10 w-10 rounded-full border border-black"
                  ></div>
                ))
              )}
            </div>
          </section>
        </section>
      </main>
    </section>
  );
}

export default Profile;
