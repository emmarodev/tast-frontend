import { SERVER_URL } from "@/app/constants/api";
import { cookies } from "next/headers";
import { getOrders } from "../get-orders";
import Image from "next/image";
import Line from "@/app/components/Line";
import getData from "../../api/getProfileData";
import { profile } from "console";

async function generateStaticParams() {
  const data: any = getOrders();

  return data.map((orders: any) => {
    id: orders.id;
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  const userId = cookies().get("userId")?.value;
  const token = cookies().get("token")?.value;

  async function getSingleOrder(id: string) {
    const res = await fetch(
      `${SERVER_URL}/user/retrieve/single/order/${userId}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    return data;
  }

  const { data } = await getSingleOrder(params.id);
  const profileData = await getData();

  return (
    <div className="bg-white p-10">
      <section className="mb-8 flex items-center justify-between">
        <Image
          src="/logos/sun-life-logo.png"
          alt="Sun life logo"
          width={220}
          height={44}
        />
        <div className="flex flex-col items-center gap-y-3">
          <Line width="57px" />
          <p className="text-2xl font-medium">Stunning Design</p>
        </div>
        <div className="text-xs">
          <p>Order ID: 5432</p>
          <p>Order Date: 02-02-2024</p>
        </div>
      </section>

      <section className="mb-10">
        <div className="mb-8 text-center">
          <h2 className="text-xl">Personal Information</h2>
          <p className="text-sm">
            Want to add more information to your profile?
          </p>
        </div>
        <form>
          <div className="grid grid-cols-3 items-end gap-5">
            <TextInput
              name="fullName"
              label="Applicant's Full Name"
              value={profileData.name}
            />
            <TextInput
              name="fullName"
              label="What's your occupation"
              value={profileData.occupation}
            />
            <TextInput
              name="fullName"
              label="What language can you speak"
              value={profileData.language.join(" ")}
            />
            <TextInput
              name="fullName"
              label="Date of Birth"
              value={profileData.dob}
            />
            <TextInput
              name="fullName"
              label="National Identification Number / Passport Number"
              value={profileData.identification}
            />
            <TextInput
              name="fullName"
              label="Permanent Address"
              value={`${profileData.permanent_address.city} ${profileData.permanent_address.state} ${profileData.permanent_address.country}`}
            />
            <TextInput name="fullName" label="Phone Number" value="" />
            <TextInput
              name="fullName"
              label="Email"
              value={profileData.email}
            />
            <TextInput
              name="fullName"
              label="Company Name"
              value={profileData.company_info.company_name}
            />
          </div>
        </form>
      </section>

      <section>
        <div className="mb-8 text-center">
          <h2 className="text-xl">Essential Details Of The Project</h2>
        </div>
        <form>
          <div className="grid grid-cols-3 gap-5">
            <TextInput
              name="fullName"
              label="Project Requirements"
              value={data.project_requirement}
            />
            <TextInput
              name="fullName"
              label="Type of Project"
              value={data.project_type}
            />
            <TextInput
              name="fullName"
              label="Pay Currency"
              value={data.pay_currency}
            />
            <TextInput name="fullName" label="Budget" value={data.budget} />
            <TextInput
              name="fullName"
              label="Project Deadline"
              value={data.project_deadline}
            />
            <TextInput
              name="fullName"
              label="Reference Name"
              value={data.reference_name}
            />
            <TextInput
              name="fullName"
              label="Project Work Location"
              value={data.work_location}
            />
            <TextInput
              name="fullName"
              value={data.project_files[0].file_url}
              type="file"
              label="Provide the related files"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor={"details"}
              className="mb-1 block text-sm font-medium"
            >
              Give some details about the project
            </label>
            <textarea
              name=""
              id="details"
              readOnly
              value={data.project_details}
              className="border-[#00000026 h-[345px] w-full resize-none rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
            ></textarea>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-x-4">
              <input type="checkbox" checked id="tac" readOnly />
              <label htmlFor="tac">
                I consent to the use of my data according to the privacy policy.
              </label>
            </div>
            <div className="flex items-center gap-x-4">
              <input type="checkbox" checked id="tac" readOnly />
              <label htmlFor="tac">
                I confirm that the information provided is accurate and
                complete.
              </label>
            </div>
            <div className="flex items-center gap-x-4">
              <input type="checkbox" checked id="tac" readOnly />
              <label htmlFor="tac">
                I am applying by agreeing to all terms and conditions
              </label>
            </div>
          </div>

          <section className="mt-5 flex justify-between">
            <div className="h-[135px] w-[280px]">
              <div className="h-full w-full rounded border-2 border-[#00000026] bg-[#D9D9D91A]">
                <div className="flex h-full w-full items-center justify-center rounded border-2 border-[#00000026] bg-[#D9D9D91A]">
                  <input
                    type={data.user_signatory.signature_type}
                    name="signature"
                    readOnly
                    className={`w-4/5 ${data.user_signatory.signature_type === "file" ? "text-sm" : "text-center text-3xl"} bg-transparent focus:outline-none`}
                    value={
                      data.user_signatory.signature_type === "text"
                        ? data.user_signatory.signature
                        : data.user_signatory.signature
                    }
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-xs">
                Applicant&apos;s signature
              </p>
            </div>
            <div className="h-[135px] w-[280px]">
              <div className="h-full w-full rounded border-2 border-[#00000026] bg-[#D9D9D91A]">
                <div className="flex h-full w-full items-center justify-center rounded border-2 border-[#00000026] bg-[#D9D9D91A]">
                  <input
                    type={data.admin_signatory.signature_type}
                    name="signature"
                    readOnly
                    className={`w-4/5 ${data.admin_signatory.signature_type === "file" ? "text-sm" : "text-center text-3xl"} bg-transparent focus:outline-none`}
                    value={
                      data.admin_signatory.signature_type === "text"
                        ? data.admin_signatory.signature
                        : data.admin_signatory.signature
                    }
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-xs">
                Signature of Project Manager
              </p>
            </div>
          </section>
        </form>
      </section>
    </div>
  );
}

const TextInput = ({
  type = "text",
  name,
  value,
  label,
}: {
  type?: string;
  name: string;
  value: string;
  label: string;
}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        readOnly
        name={name}
        defaultValue={value}
        className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
      />
    </div>
  );
};
