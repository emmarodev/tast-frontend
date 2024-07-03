import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoMdList, IoMdPricetag, IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Footer } from "../home/page";
import { GrServices } from "react-icons/gr";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

function Orders() {
    const categories = [
        "All",
        "Market Construction",
        "Mosque Construction",
        "Airport Construction",
        "School Construction",
        "Home Construction",
        "Road Construction",
      ];
  return (
    <div className="">
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
        <Hero />

        <div className="flex gap-x-4 items-center">
          <button className="flex justify-center items-center h-8 w-8 bg-[#ffb200] rounded-full text-[#231B7D] hover:bg-[#ffb200]/90">
            <FaArrowLeft />
          </button>
          <div className="flex grow gap-x-2">
            {categories.map((category, i) => {
              return (
                <button
                  key={i}
                  className="bg-white hover:bg-black w-40 hover:text-white rounded py-3 w- uppercase font-semibold text-center grow transition-all duration-150"
                >
                  {category}
                </button>
              );
            })}
          </div>
          <button className="flex justify-center items-center h-8 w-8 bg-[#ffb200] rounded-full text-[#231B7D] hover:bg-[#ffb200]/90">
            <FaArrowRight />
          </button>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Order />
      </div>
      <div className="px-14 pb-4 bg-[#231B7D] relative">
        <Footer />
      </div>
    </div>
  );
}

export default Orders;

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
            
            <span className="text-[#ffb200]"> Orders</span>
          </h1>
          <div>
            <select
              name=""
              id=""
              className="py-3 rounded-lg mr-1 text-black px-4 focus:outline-none"
            >
               
              <option value="videos">Category</option>
              <option value="photo">All</option>
              <option value="photo">App Dev</option>
              <option value="photo">Bug</option>
              <option value="photo">Orders</option>
            </select>
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

const Order = () => {
  return (
    <div className='bg-[#F2E6C9] py-14'>
      <section className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </section>
    </div>
  );
};

const OrderCard = () => {
  return (
    <div className="card bg-white border-2 border-slate w-72 shadow-xl">
                 <div className='py-4 flex justify-center'>
                 <h2 className="card-title text-xl text-left font-semibold">Stunning Design</h2>
                 </div>
                <figure>
                  <div className="items-center text-center flex justify-center">
                    <Image alt='icon' src='/order.png' width={260} height={180} />
                  </div>
                </figure>
                <div className="card-body items-center text-center py-4 flex justify-center">
                 
                    <button className="btn px-5 py-2 flex items-center gap-2 text-center bg-[#FFB200] border-none text-xs hover:bg-secondary"> <IoMdList />ORDER NOW</button>
                 
                </div>
              </div>
  );
};
