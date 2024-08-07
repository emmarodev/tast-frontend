import Image from "next/image";
import { BsBrightnessHigh, BsTwitterX } from "react-icons/bs";
import { IoCall, IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../public/logo.svg";
import usa from "../../public/icons/usa.png";
import bitcoin from "../../public/logos/bitcoin.png";
import payoneer from "../../public/logos/payoneer.png";
import master from "../../public/logos/master.png";
import paypl from "../../public/logos/paypal.png";
import sbi from "../../public/logos/sbi.png";
import Link from "next/link";
import { SERVER_URL } from "../constants/api";
import { getData } from "../(landing-pages)/action";
import { Suspense } from "react";
import ContactUs from "./ContactUs";

export default async function Footer() {
  const data = await getData("user/footer");

  return (
    <footer className="bg-[#231B7D] px-14 pb-2">
      <section className="relative -top-10 bg-[#ffb200] px-10 py-10 text-sm">
        <div className="mb-10 flex justify-between">
          <ul>
            <li className="flex items-center gap-x-4">
              <Image src={logo} alt="Logo" />
              <p className="text-2xl font-bold tracking-wider text-[#14208F]">
                NASA
              </p>
            </li>
            <li className="mt-8">
              <ul className="flex flex-col gap-y-2">
                <li>
                  <Image
                    src={usa}
                    alt="text with USA flag text color"
                    width={100}
                  />
                </li>
                <li className="flex items-center gap-x-1">
                  <FaLocationDot /> London, Vladivostok named Sergey
                </li>
                <li className="flex items-center gap-x-1">
                  <MdOutlineEmail /> sampleemail@email.com
                </li>
                <li className="flex items-center gap-x-1">
                  <IoCall />
                  +1 949494+99
                </li>
                <li className="flex items-center gap-x-1">
                  <IoCall />
                  +44 496961999
                </li>
              </ul>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="mb-2 text-base font-bold">Company</li>
            <Suspense>
              {data?.company?.map((obj: any) => (
                <FooterLink key={obj._id}>{obj.note}</FooterLink>
              ))}
            </Suspense>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <Suspense>
              <li className="mb-2 text-base font-bold">
                Information technology
              </li>
              {data?.infotech?.map((obj: any) => (
                <FooterLink key={obj._id}>{obj.note}</FooterLink>
              ))}
            </Suspense>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="mb-2 text-base font-bold">Civil Engineering</li>
            <Suspense>
              {data?.civil?.map((obj: any) => (
                <FooterLink key={obj._id}>{obj.note}</FooterLink>
              ))}
            </Suspense>
          </ul>
        </div>

        <div className="flex justify-between gap-x-5">
          <div className="flex items-center gap-x-4">
            <Switch />
            <Subscribe />
          </div>
          <div className="flex flex-col items-end">
            <ContactUs />

            <div className="flex items-center gap-x-4">
              <Image src={bitcoin} alt="bitcoin logo" width={60} />
              <Image src={payoneer} alt="Payoneer logo" width={50} />
              <Image src={master} alt="Master card logo" width={40} />
              <Image src={paypl} alt="Paypal logo" width={50} />
              <Image src={sbi} alt="SBI logo" width={50} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <ul className="flex gap-x-2">
          <SocialLink link="">
            <FaFacebookF />
          </SocialLink>
          <SocialLink link="">
            <FaYoutube />
          </SocialLink>
          <SocialLink link="">
            <IoLogoTiktok />
          </SocialLink>
          <SocialLink link="">
            <BsTwitterX />
          </SocialLink>
        </ul>
        <p className="text-sm text-[#FFFFFFB2]">
          © 2024 Sample. All rights reserved.
        </p>
      </section>
    </footer>
  );
}

const SocialLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb200] text-xl"
    >
      {children}
    </Link>
  );
};

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      href=""
      className="font-medium capitalize transition-all duration-150 hover:text-blue-800"
    >
      {children}
    </Link>
  );
};

const Switch = () => {
  return (
    <div className="relative h-10 w-20 rounded-full bg-orange-800 p-2">
      <div className="absolute right-1 top-1 h-8 w-8 rounded-full bg-white" />
      <BsBrightnessHigh className="absolute left-2 top-2 text-2xl text-white" />
    </div>
  );
};

const Subscribe = () => {
  const languages = [
    "Afrikaans",
    "Azərbaycan",
    "Bahasa Indonesia",
    "Bahasa Malaysia",
    "Bosanski",
    "Català",
    "Čeština",
    "Dansk",
    "Deutsch",
    "Eesti",
    "English (India)",
    "English (UK)",
    "English (US)",
    "Español (España)",
    "Español (Latinoamérica)",
    "Español (US)",
    "Euskara",
    "Filipino",
    "Français",
    "Français (Canada)",
    "Galego",
    "Hrvatski",
    "IsiZulu",
    "Íslenska",
    "Italiano",
    "Kiswahili",
    "Latviešu valoda",
    "Lietuvių",
    "Magyar",
    "Nederlands",
    "Norsk",
    "O‘zbek",
    "Polski",
    "Português",
    "Português (Brasil)",
    "Română",
    "Shqip",
    "Slovenčina",
    "Slovenščina",
    "Srpski",
    "Suomi",
    "Svenska",
    "Tiếng Việt",
    "Türkçe",
    "Беларуская",
    "Български",
    "Кыргызча",
    "Қазақ Тілі",
    "Македонски",
    "Монгол",
    "Русский",
    "Српски",
    "Українська",
    "Ελληνικά",
    "Հայերեն",
    "עברית",
    "اردو",
    "فارسی",
    "नेपाली",
    "मराठी",
    "हिन्दी",
    "অসমীয়া",
    "বাংলা",
    "ਪੰਜਾਬੀ",
    "ગુજરાતી",
    "ଓଡ଼ିଆ",
    "தமிழ்",
    "తెలుగు",
    "ಕನ್ನಡ",
    "മലയാളം",
    "සිංහල",
    "ภาษาไทย",
    "ລາວ",
    "ဗမာ",
    "ქართული",
    "አማርኛ",
    "ខ្មែរ",
    "中文 (简体)",
    "中文 (繁體)",
    "中文 (香港)",
    "日本語",
    "한국어",
  ];

  async function subscribe(formData: FormData) {
    "use server";

    const body = {
      email: formData.get("email"),
    };

    try {
      const res = await fetch(`${SERVER_URL}/user/subscribe`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await res.json();

      if (!data.status || data.status_code === 400) {
        return {
          message: [data.message || "An unknown error occurred."],
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: ["Failed to connect to the server. Please try again later."],
      };
    }
  }

  return (
    <form action={subscribe}>
      <select className="mr-4 rounded-lg border border-black px-3 py-2">
        {languages.map((l, i) => (
          <option value="english" key={i}>
            {l}
          </option>
        ))}
      </select>

      <input
        type="text"
        className="rounded-l-full px-6 py-3 text-sm font-semibold"
        placeholder="tact@gmail.com"
        name="email"
      />

      <button className="rounded-r-full bg-[#231B7D] px-6 py-3 text-sm font-semibold text-white">
        Subscribe
      </button>
    </form>
  );
};
