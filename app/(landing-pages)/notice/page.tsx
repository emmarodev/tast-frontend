"use client"
import Navbar from "@/app/components/Navbar";
import { Footer } from "../home/page";
import Line from "@/app/components/Line";
import ReactPaginate from "react-paginate";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import React from "react";

function Notices() {
    return (
      <div className="">
        <Navbar />
        <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
          <Hero />
        </div>
        <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
          <Notice />
        </div>
        <div className="px-14 pb-4 bg-[#231B7D] relative">
          <Footer />
        </div>
      </div>
    );
  }
  
  export default Notices;
  const Hero = () => {
    return (
      <section className="sm:py-20 relative bg-gray-500">
        <div className="w-full h-full sm:flex items-center text-white">
          <div className="hidden sm:block">
            {/* <Image
                alt="Mountains"
                src={}
                placeholder="blur"
                quality={100}
                layout="fill"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  zIndex: -5,
                }}
              /> */}
          </div>
          <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y-2 flex-col items-start">
            <Line />
            <h1 className="text-3xl max-w-[740px] font-bold leading-[60px] capitalize">
              NOTICE
              <span className="text-[#ffb200]"> Board</span>
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
  interface NoticeItem {
    id: number;
    title: string;
    date: string;
    status: string;
  }
  
  const Notice = () => {
    const items: NoticeItem[] = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      title: `Notice Title ${i + 1}`,
      date: '2023-10-20',
      status: 'Status',
    }));
  
    const itemsPerPage = 12;
    const [currentItems, setCurrentItems] = React.useState<NoticeItem[]>(items.slice(0, itemsPerPage));
    const [pageCount, setPageCount] = React.useState<number>(Math.ceil(items.length / itemsPerPage));
    const [itemOffset, setItemOffset] = React.useState<number>(0);
  
    const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
      setCurrentItems(items.slice(newOffset, newOffset + itemsPerPage));
    };
  
    return (
      <div className="max-w-[1200px] mx-auto py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-[#FFB200]">
              <tr>
                <th className="py-2 px-4 border">SL</th>
                <th className="py-2 px-4 border">Notice Title</th>
                <th className="py-2 px-4 border">Upload Date</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">View</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <NoticeRow key={item.id} item={item} index={index + itemOffset} />
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="flex max-w-6xl mx-auto justify-between items-center px-4 py-2 bg-white shadow-md rounded-full mt-4">
          <span className="text-gray-700 font-bold">
            Showing {itemOffset + 1} to {Math.min(itemOffset + itemsPerPage, items.length)} of {items.length} Results
          </span>
          <span className='border-2 border-slate px-4 rounded-full'>
            <ReactPaginate
              previousLabel={<FaArrowLeftLong />}
              nextLabel={<FaArrowRightLong />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination flex space-x-2'}
              pageClassName={'px-2 py-1 border rounded'}
              activeClassName={'bg-secondary text-white'}
              previousClassName={'px-2 py-1 border rounded'}
              nextClassName={'px-2 py-1 border rounded'}
            />
          </span>
        </div> */}
      </div>
    );
  };
  
  interface NoticeRowProps {
    item: NoticeItem;
    index: number;
  }
  
  const NoticeRow: React.FC<NoticeRowProps> = ({ item, index }) => {
    return (
      <tr className="even:bg-gray-100">
        <td className="py-2 px-4 border text-center">{index + 1}</td>
        <td className="py-2 px-4 border">{item.title}</td>
        <td className="py-2 px-4 border text-center">{item.date}</td>
        <td className="py-2 px-4 border text-center">{item.status}</td>
        <td className="py-2 px-4 border text-center">
          <button className="btn bg-secondary border-none text-xs px-8 hover:bg-secondary">
            VIEW
          </button>
        </td>
      </tr>
    );
  };

