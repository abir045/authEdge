import React from "react";
import logo from "../assets/logo.svg";
import correct from "../assets/correct.svg";
import notepad from "../assets/Notepad.svg";
import vector from "../assets/Vector.svg";
import info from "../assets/info.svg";
import rectangle from "../assets/Rectangle.svg";
import arrow from "../assets/arrow.svg";
import eally from "../assets/eally.svg";
import filter from "../assets/Filter.svg";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col mt-14">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" width="273px" />
      </div>

      <div className="hidden  md:flex flex-col mt-6">
        <div className="flex">
          <p className="mx-[24%] font-thin text-[10px] ">
            Categories <span>&gt;</span> E-Commerce Platform <span>&gt;</span>{" "}
            Online Shopping <span>&gt;</span>{" "}
          </p>
        </div>

        {/* hero  section web*/}
        <div className="border-[#C2D5F7] border rounded flex justify-between gap-16 mt-2 p-10 mx-auto">
          {/* left side */}
          <div className="flex gap-4">
            <div>
              <img src={eally} alt="eally pic" />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-medium text-[15px] ">Eally Bangladesh Ltd.</p>
              <p className="font-light text-[12px] ">((eally.com.bd))</p>
              <button className="bg-[#C9CBF9] text-[11px] font-light w-[46px] mt-4">
                SAFE
              </button>
              <div className="border border-[#C2D5F7] rounded flex items-center justify-between mt-5 p-3">
                <img src={rectangle} alt="rectangle logo" />
                <span className="text-sm font-medium text-[#436CFF]">
                  Visit Website
                </span>
                <img src={arrow} alt="right arrow" />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-flex-col mt-6">
            <div className="flex gap-3 ">
              <img src={correct} alt="correct logo" />
              <p className="text-[9px]">Verified Company</p>
            </div>

            <div className="flex gap-3 mt-3">
              <img src={notepad} alt="correct logo" />
              <p className="text-[9px]">
                Replied to 0% of authentic negative reviews.
              </p>
            </div>

            <div className="flex gap-3 mt-3">
              <img src={vector} alt="correct logo" />
              <p className="text-[9px]">Doesn’t reply to reviews</p>
            </div>

            <div className="flex gap-3 mt-3">
              <img src={info} alt="correct logo" />
              <p className="text-[9px] text-[#005BFF]">Website Details...</p>
            </div>
          </div>
        </div>
      </div>

      {/* mb view */}
      <div className="flex flex-col text-left px-10 sm:hidden">
        <div className="">
          <p className="font-light text-[12px] mt-2">((eally.com.bd))</p>
          <button className="bg-[#C9CBF9] text-[11px] font-light px-2">
            SAFE
          </button>
        </div>

        <div className="flex-flex-col mt-8 ">
          <div className="flex gap-3">
            <img src={correct} alt="correct logo" />
            <p className="text-[9px]">Verified Company</p>
          </div>

          <div className="flex gap-3 mt-3">
            <img src={notepad} alt="correct logo" />
            <p className="text-[9px]">
              Replied to 0% of authentic negative reviews.
            </p>
          </div>

          <div className="flex gap-3 mt-3">
            <img src={vector} alt="correct logo" />
            <p className="text-[9px]">Doesn’t reply to reviews</p>
          </div>

          <div className="flex gap-3 mt-3">
            <img src={info} alt="correct logo" />
            <p className="text-[9px] text-[#005BFF]">Website Details...</p>
          </div>
        </div>

        <div className="border border-[#C2D5F7] rounded flex items-center justify-between mt-8 p-3">
          <img src={rectangle} alt="rectangle logo" />
          <span className="text-sm font-medium text-[#436CFF]">
            Visit Website
          </span>
          <img src={arrow} alt="right arrow" />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="flex flex-col border border-[#C2D5F7] w-[292px] p-5  mt-10">
          <div className="flex justify-around">
            <div className="flex flex-col">
              <p className="text-[14px] font-medium">Filter Reviews</p>
              <div className="flex font-light text-[11px]">
                <p>Total 480</p>
                <span>&bull;</span>
                <p>Authentic 15</p>
              </div>
            </div>
            <div>
              <img src={filter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
