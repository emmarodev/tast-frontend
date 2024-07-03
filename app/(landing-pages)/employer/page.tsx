"use client";
import React, { useState } from 'react';
import Navbar from "@/app/components/Navbar";
import { Footer } from "../home/page";
import Line from "@/app/components/Line";
import Image from "next/image";
import { IoMdList } from "react-icons/io";
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { TiSocialPinterest, TiSocialVimeo  } from "react-icons/ti";

const items = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  position: 'Project Manager',
  image: '/order.png', // replace with actual image paths
}));

const Employers = () => {
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
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
          {currentItems.map(item => (
            <EmployerCard key={item.id} name={item.name} position={item.position} image={item.image} />
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

export default Employers;

const Hero = () => {
  return (
    <section className="sm:py-20 relative bg-gray-500">
      <div className="w-full h-full sm:flex items-center text-white">
        <div className="hidden sm:block"></div>
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y-2 flex-col items-start">
          <Line />
          <h1 className="text-3xl max-w-[740px] font-bold leading-[60px] capitalize">
            Our
            <span className="text-[#ffb200]"> Employees</span>
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

type EmployerCardProps = {
  name: string;
  position: string;
  image: string;
};

const EmployerCard: React.FC<EmployerCardProps> = ({ name, position, image }) => {
  return (
    <div className="card bg-[#B0B0B0] rounded-xl border-2 border-slate w-72 py-6 shadow-xl">
      <div className="flex justify-center">
        <div className="relative w-20 h-20 rounded-full border-4 border-yellow-500 overflow-hidden">
          <Image alt={name} src={image} layout="fill" objectFit="cover" className="rounded-full" />
        </div>
      </div>
      <div className='mt-4 flex justify-center'>
        <h2 className="card-title text-[#0F0D69] text-lg font-bold">{name}</h2>
      </div>
      <div className="text-center">
        <p className="text-gray-600">{position}</p>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <SocialIcon icon={<FaFacebookF className='flex justify-center text-purple-900'/>} className="item-center text-center flex justify-center w-10 h-10 bg-transparent rounded-full border-4 border-blue-700" />
        <SocialIcon icon={<FaInstagram className='flex justify-center text-red-500'/>} className="item-center text-center flex justify-center w-10 h-10 bg-transparent rounded-full border-4 border-red-800" />
        <SocialIcon icon={<TiSocialPinterest className='flex justify-center text-red-700'/>} className="item-center text-center flex justify-center w-10 h-10 bg-transparent rounded-full border-4 border-red-950" />
        <SocialIcon icon={<FaTwitter className='flex justify-center text-blue-500'/>} className="item-center text-center flex justify-center w-10 h-10 bg-transparent rounded-full border-4 border-blue-500" />
        <SocialIcon icon={<TiSocialVimeo  className='flex justify-center text-green-800' />} className="item-center text-center flex justify-center w-10 h-10 bg-transparent rounded-full border-4 border-green-800" />
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
    <div className={`bg-gray-200 rounded-full p-2 hover:bg-gray-300 ${className}`}>
      {icon}
    </div>
  );
};
