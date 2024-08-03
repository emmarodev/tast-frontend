"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import TextInput from "./input-text";
import {
  editCompanyInfo,
  editPermanentAddress,
  editPersonalInfo,
  editPresentAddress,
} from "./action";
import {
  AddressProps,
  CompanyInfoProps,
  ProfileDataProps,
  SocialLink,
} from "../definition";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className="mt-[2rem] flex justify-center">
      <button
        type="submit"
        className="rounded-[30px] bg-[#0077B6] px-10 py-1 text-base font-medium text-white"
      >
        {pending ? "Editting..." : "Edit"}
      </button>
    </div>
  );
};

export function PersonalInfoForm({ userData }: { userData: ProfileDataProps }) {
  return (
    <form action={editPersonalInfo}>
      <div className="grid gap-y-2">
        <TextInput
          label="Full Name"
          name="name"
          type="text"
          defaultValue={userData.name}
        />
        <TextInput
          label="Occupation"
          name="occupation"
          type="text"
          defaultValue={userData.occupation}
        />

        <TextInput
          label="Speaking Language"
          name="language"
          type="text"
          defaultValue={userData.language.join(", ")}
          optional
        />

        <TextInput
          label="Date of Birth"
          name="dob"
          type="date"
          defaultValue={userData.dob}
        />
        <TextInput
          label="National Identification Number/Passport Number"
          name="identification"
          type="text"
          defaultValue={userData.identification}
        />
        <TextInput label="Phone No" name="phone" type="tel" defaultValue={""} />
        <TextInput
          label="Email"
          name="email"
          type="text"
          defaultValue={userData.email}
        />
      </div>

      <SubmitButton />
    </form>
  );
}

export function CompanyInfoForm({
  companyInfo,
}: {
  companyInfo: CompanyInfoProps;
}) {
  return (
    <form action={editCompanyInfo}>
      <div className="flex flex-col gap-y-2">
        <TextInput
          label="Company Name"
          name="company_name"
          type="text"
          defaultValue={companyInfo.company_name}
        />
        <TextInput
          label="Phone No."
          name="phone"
          type="text"
          defaultValue={companyInfo.phone}
        />
        <TextInput
          label="Email"
          name="email"
          type="text"
          defaultValue={companyInfo.email}
        />
        <TextInput
          label="Website Url"
          name="website_url"
          type="text"
          defaultValue={companyInfo.website_url}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

export function PresentAddressForm({
  addressInfo,
}: {
  addressInfo: AddressProps;
}) {
  return (
    <form action={editPresentAddress}>
      <div className="flex flex-col gap-y-2">
        <TextInput
          label="Country"
          name="country"
          type="text"
          defaultValue={addressInfo.country}
        />
        <TextInput
          label="City"
          name="city"
          type="text"
          defaultValue={addressInfo.city}
        />
        <TextInput
          label="State/Province"
          name="state"
          type="text"
          defaultValue={addressInfo.state}
        />
        <TextInput
          label="Postal Zone/ZIP Code"
          name="postalzone"
          type="text"
          defaultValue={addressInfo.postalzone}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

export function PermanentAddressForm({
  addressInfo,
}: {
  addressInfo: AddressProps;
}) {
  return (
    <form action={editPermanentAddress}>
      <div className="flex flex-col gap-y-2">
        <TextInput
          label="Country"
          name="country"
          type="text"
          defaultValue={addressInfo.country}
        />
        <TextInput
          label="City"
          name="city"
          type="text"
          defaultValue={addressInfo.city}
        />
        <TextInput
          label="State/Province"
          name="state"
          type="text"
          defaultValue={addressInfo.state}
        />
        <TextInput
          label="Postal Zone/ZIP Code"
          name="postalzone"
          type="text"
          defaultValue={addressInfo.postalzone}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

export function SocialLinksForm({
  socialLink,
  editSocials,
}: {
  socialLink: SocialLink[];
  editSocials: any;
}) {
  const src = [
    "/icons/facebook.png",
    "/icons/youtube.png",
    "/icons/twitter.png",
  ];
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<null | HTMLDivElement>(null);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [link, setLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hostname, setHostname] = useState("");
  const [protocol, setProtocol] = useState("");

  const handleSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await editSocials({ logo: selectedIcon, url: link });

    setIsSubmitting(false);
  };

  // Configures images path to display proper path and not encoded path
  const loaderProp = ({ src }: { src: string }) => {
    return src;
  };

  // Close the dropdown when we click on surrounding components
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // figure out the hostname and protocol name of the website we are on
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHostname(window.location.hostname);
      setProtocol(window.location.protocol);
    }
  }, []);

  return (
    <div>
      <form action="" className="flex gap-x-3 px-4" onSubmit={handleSubmission}>
        <div className="relative" ref={dropdownRef}>
          {showDropDown && (
            <article className="absolute bottom-full my-2 flex w-full flex-wrap justify-between gap-y-4 rounded bg-white p-3 shadow">
              {src.map((path, i) => (
                <Image
                  key={i}
                  src={path}
                  alt="icon"
                  width={30}
                  height={30}
                  onClick={(e) => {
                    setSelectedIcon(e.currentTarget.src);
                    setShowDropDown(false);
                  }}
                />
              ))}
            </article>
          )}

          <button
            type="button"
            className="flex h-full w-[100px] items-center justify-between gap-x-1 rounded border border-[#B9B9B9] bg-transparent px-3 font-semibold"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            {!selectedIcon ? (
              "Select"
            ) : (
              <Image
                src={selectedIcon}
                alt="icon"
                width={20}
                height={20}
                loader={loaderProp}
              />
            )}
            <BiChevronDown className="text-2xl font-black" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Paste Link"
          onChange={(e) => setLink(e.target.value)}
          className="w-full max-w-[308px] rounded border border-[#B9B9B9] px-3"
        />
        <button
          type="submit"
          className="relative rounded bg-[#172554] px-10 py-3 font-medium text-white"
        >
          {isSubmitting ? "Adding..." : "Add"}
        </button>
      </form>

      <ul className="mt-6 px-4">
        {socialLink.length !== 0 &&
          socialLink.map((obj, i) => (
            <li key={i}>
              <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#172554]">
                {/* <Image
                  src={`${protocol}${hostname}/${obj.logo}`}
                  alt="icon"
                  width={30}
                  height={30}
                /> */}
                <button className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#EE1212] text-xl text-white">
                  <MdDeleteOutline />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
