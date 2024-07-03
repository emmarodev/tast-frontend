"use client";
import React, { useState } from 'react';
import Navbar from "@/app/components/Navbar";
import { Footer } from "../home/page";
import Line from "@/app/components/Line";
import Image from "next/image";
import { IoMdList, IoMdShare } from "react-icons/io";
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { TiSocialPinterest, TiSocialVimeo  } from "react-icons/ti";
import { IoEyeSharp } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';

const items = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  position: 'Project Manager',
  image: '/order.png', // replace with actual image paths
}));

const Blogs = () => {
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
            <BlogCard key={item.id} name={item.name} position={item.position} image={item.image} />
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

export default Blogs;

const Hero = () => {
  return (
    <section className="sm:py-20 relative bg-gray-500">
      <div className="w-full h-full sm:flex items-center text-white">
        <div className="hidden sm:block"></div>
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y-2 flex-col items-start">
          <Line />
          <h1 className="text-3xl max-w-[740px] font-bold leading-[60px] capitalize">
            OUR LATEST
            <span className="text-[#ffb200]"> NEWS</span>
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

type BlogCardProps = {
  name: string;
  position: string;
  image: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ name, position, image }) => {
  return (
    <div className="flip-card shadow-xl">
      <div className="flip-card-inner transform transition duration-500 ease-in-out hover:rotate-y-180 h-fit">
       <article className="flip-card-front rounded-md bg-slate-50 h-96 flex flex-col">
     
        <div className="w-full h-80 overflow-hidden mt-4 mx-4">
          <Image alt={name} src={image} height={120} width={240} />
        </div>
     
      <div className="p-4">
      <p className="mb-1 tracking-wider">NOV. 12, 2024</p>
            <Line />
            <h3 className="text-black text-xl font-bold mt-2">
              Stunning Designs
            </h3>
            <p className="text-xs"> Of Scripture chosen especially for the su
            </p>
          </div> 
        <div className="flex items-center gap-x-4 text-base px-6 mb-6">
          <div className="flex gap-x-2 items-center">
            <IoEyeSharp className="text-black text-2xl font-bold" />
            <p className="text-[#79797999] font-semibold">1.2k</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <IoMdShare className="text-black text-2xl font-bold" />
            <p className="text-[#79797999] font-semibold">1.2k</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <CiHeart className="text-black text-2xl font-bold" />
            <p className="text-[#79797999] font-semibold">1.2k</p>
          </div>
        </div>  
    </article>
    </div>   
    </div>     
  );
};

