'use client';
import React, { useState } from 'react';
import Navbar from "@/app/components/Navbar";
import { Footer } from "../home/page";
import Line from "@/app/components/Line";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

const items = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  flag: '/flag.png', 
  country: 'Country Name',
  address: 'Enzo Massart,Boulevard Ceulemans,832,Hannut Mortselt 0748',
  phone: '+19293237981',
  email: 'Abc@Apple.Com',
}));

const Globals = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
        <Hero />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
          {currentItems.map(item => (
            <GlobalCard key={item.id} flag={item.flag} country={item.country} address={item.address} phone={item.phone} email={item.email} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <ReactPaginate
            previousLabel={<FaArrowLeft />}
            nextLabel={<FaArrowRight />}
            breakLabel="..."
            onPageChange={handlePageClick}
            pageCount={pageCount}
            containerClassName="flex items-center space-x-2"
            pageClassName="mx-1"
            pageLinkClassName="px-3 py-1 border rounded-md hover:font-bold"
            previousClassName="mx-1"
            previousLinkClassName="px-3 py-1 border rounded-md hover:font-bold"
            nextClassName="mx-1"
            nextLinkClassName="px-3 py-1 border rounded-md hover:font-bold"
            breakClassName="mx-1"
            breakLinkClassName="px-3 py-1 border rounded-md hover:font-bold"
            activeClassName="font-bold bg-[#FFBA1A] text-white"
          />
        </div>
      </div>
      <div className="px-14 pb-4 bg-[#231B7D] relative">
        <Footer />
      </div>
    </div>
  );
};

export default Globals;

const Hero = () => {
  return (
    <section className="sm:py-20 relative bg-gray-500">
      <div className="w-full h-full sm:flex items-center text-white">
        <div className="hidden sm:block"></div>
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y-2 flex-col items-start">
          <Line />
          <h1 className="text-3xl max-w-[740px] font-bold leading-[60px] capitalize">
           GLOBAL
            <span className="text-[#ffb200]"> Our Branches</span>
          </h1>
          <div>
            <input
              type="search"
              placeholder="Search here..."
              className="py-3 border rounded-lg shadow-xl px-3 mr-2 focus:outline-none focus:border-[#FFB200] min-w-[280px]"
            />
            <button className="py-3 px-6 bg-[#FFB200] font-semibold rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

type GlobalCardProps = {
  flag: string;
  country: string;
  address: string;
  phone: string;
  email: string;
};

const GlobalCard: React.FC<GlobalCardProps> = ({ flag, country, address, phone, email }) => {
  return (
    <div className="shadow-xl bg-[#B0B0B0] p-4 flex flex-col items-center">
      <div className="w-60 -mb-6 z-10 text-center flex justify-center">
        <Image alt={country} src={flag} width={180} height={100} className="" />
      </div>
     <div className='w-60 h-60 rounded-full items-center text-center bg-gray-400'>
     <h3 className="text-xl font-bold mb-2 mt-16">{country}</h3>
      <p className="text-sm text-center">{address}</p>
      <p className="text-sm mt-2">{phone}</p>
      <p className="text-sm">{email}</p>
     </div>
     <div className="flex justify-center gap-2 mt-4">
        <SocialIcon icon={<FaFacebookF className='flex justify-center text-center items-center text-white'/>} className="item-center text-center flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full" />
        <SocialIcon icon={<FaWhatsapp className='flex justify-center text-center items-center text-white'/>} className="item-center text-center flex justify-center items-center w-10 h-10 bg-green-600 rounded-full" />
        <SocialIcon icon={<FaYoutube className='flex justify-center text-center items-center text-white'/>} className="item-center text-center flex justify-center items-center w-10 h-10 bg-orange-700 rounded-full" />
        <SocialIcon icon={<FaGooglePlusG className='flex justify-center text-center items-center text-white'/>} className="item-center text-center flex justify-center items-center w-10 h-10 bg-red-600 rounded-full" />
        </div>
    </div>

  );
};
type SocialIconProps = {
    icon: React.ReactNode;
    className: string;
  };
  
  const SocialIcon: React.FC<SocialIconProps> = ({ icon, className }) => {
    return (
      <div className={className}>
        {icon}
      </div>
    );
  };
