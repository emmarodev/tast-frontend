export interface CompanyInfoProps {
  phone: string;
  email: string;
  company_name: string;
  website_url: string;
}

export interface AddressProps {
  country: string;
  city: string;
  state: string;
  postalzone: string;
}

export interface SocialLink {
  url: string;
  logo: string;
}

export interface ProfileDataProps {
  present_address: AddressProps;
  permanent_address: AddressProps;
  company_info: CompanyInfoProps;
  name: string;
  email: string;
  language: string[];
  occupation: string;
  dob: string;
  identification: string;
  social_link: SocialLink[];
}
