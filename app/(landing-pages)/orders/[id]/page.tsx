import { cookies } from "next/headers";
import Image from "next/image";
import Line from "@/app/components/Line";
import { getOrders } from "@/app/dashboard/orders/get-orders";
import { SERVER_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";
import getData from "@/app/dashboard/api/getProfileData";
import ImageOrFile from "@/app/components/ImageOrFile";
import SubmitButton from "@/app/(auth)/components/submit-button";

async function generateStaticParams() {
  const data: any = getOrders();

  return data.map((orders: any) => {
    id: orders.id;
  });
}

const createOrder = async (formData: FormData) => {
  "use server";

  const data = {
    work_location: formData.get("work_location"),
    reference_name: formData.get("reference_name"),
    pay_currency: formData.get("pay_currency"),
    project_deadline: formData.get("project_deadline"),
    project_type: formData.get("project_type"),
    project_requirement: formData.get("project_requirement"),
    project_files: formData.getAll("project_files"),
    project_details: formData.get("project_details"),
    budget: Number(formData.get("budget")),
    signature: formData.get("signature"),
  };

  let { project_files, signature, ...others } = data;
  const filesArray: { file_type: string; file_url: string }[] = [];

  project_files.forEach((file: any) => {
    const { type, name } = file;
    filesArray.push({ file_type: type, file_url: name });
  });

  let signature_value, signature_type;
  if (typeof signature !== "string" && signature !== undefined) {
    signature_value = signature?.name;
    signature_type = "image";
  } else {
    (signature_type = "text"), (signature_value = signature);
  }

  const token = cookies().get("token")?.value;
  const userId = cookies().get("userId")?.value;

  const body = {
    ...others,
    project_files: filesArray,
    userid: userId,
    signature_type: signature_type,
    signature: signature_value,
  };

  try {
    const res = await fetch(`${SERVER_URL}/user/create/order`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "Something went wrong try again."],
      };
    }
  } catch (error) {
    console.log(error)
  }
};

export default async function Page({ params }: { params: { id: string } }) {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;
  if (!token) redirect("/sign-in");

  const data = await getData();

  return (
    <div className="mb-10 bg-white p-10 px-28">
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
          <div className="grid grid-cols-3 gap-5">
            <TextInput
              name="fullName"
              label="Applicant's Full Name"
              value={data.name}
            />
            <TextInput
              name="fullName"
              label="What's your occupation"
              value={data.occupation}
            />
            <TextInput
              name="fullName"
              label="What language can you speak"
              value={data.language.join(", ")}
            />
            <TextInput name="fullName" label="Date of Birth" value={data.dob} />
            <TextInput
              name="fullName"
              label="National Identification Number / Passport Number"
              value={data.identification}
            />
            <TextInput
              name="fullName"
              label="Permanent Address"
              value={`${data.permanent_address.city} ${data.permanent_address.state} ${data.permanent_address.country} `}
            />
            <TextInput name="fullName" label="Phone Number" value={""} />
            <TextInput name="fullName" label="Email" value={data.email} />
            <TextInput
              name="fullName"
              label="Company Name"
              value={data.company_info.company_name}
            />
          </div>
        </form>
      </section>

      <section>
        <div className="mb-8 text-center">
          <h2 className="text-xl">Essential Details Of The Project</h2>
        </div>
        <form action={createOrder}>
          <div className="grid grid-cols-3 gap-5">
            <TextInput
              name="project_requirement"
              label="Project Requirements"
              required
            />
            <TextInput name="project_type" label="Type of Project" required />
            <TextInput name="pay_currency" label="Pay Currency" required />
            <TextInput name="budget" label="Budget" required type="number" />
            <TextInput
              name="project_deadline"
              label="Project Deadline"
              type="date"
              required
            />
            <TextInput name="reference_name" label="Reference Name" required />
            <TextInput
              name="work_location"
              label="Project Work Location"
              required
            />
            <TextInput
              name="project_files"
              required
              label="Provide the related files"
              type="file"
              multiple
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
              name="project_details"
              id="details"
              required
              className="border-[#00000026 h-[345px] w-full resize-none rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
            ></textarea>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-x-4">
              <input type="checkbox" checked id="tac" required />
              <label htmlFor="tac">
                I consent to the use of my data according to the privacy policy.
              </label>
            </div>
            <div className="flex items-center gap-x-4">
              <input type="checkbox" checked id="tac" required />
              <label htmlFor="tac">
                I confirm that the information provided is accurate and
                complete.
              </label>
            </div>
            <div className="flex items-center gap-x-4">
              <input type="checkbox" checked id="tac" required />
              <label htmlFor="tac">
                I am applying by agreeing to all terms and conditions
              </label>
            </div>
          </div>

          <section className="mt-5 flex items-end justify-between">
            <ImageOrFile />
            <div>
              {/* <button className="flex gap-x-4 rounded-full bg-[#3C5A99] px-8 py-3 font-bold text-white">
                Submit <span className="">{">>"}</span>
              </button> */}
              <SubmitButton pendingText="Submiting..." text={"Submit >>"} />
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
  required,
  multiple,
}: {
  type?: string;
  name: string;
  value?: string;
  label: string;
  required?: boolean;
  multiple?: boolean;
}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        required={required}
        multiple={multiple}
        className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
      />
    </div>
  );
};
