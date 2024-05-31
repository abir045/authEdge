import React from "react";
import cred from "../assets/cred.svg";
import avatar from "../assets/avatar.svg";
import ScoreRating from "../assets/Score.svg";
import location from "../assets/Location.svg";
import time from "../assets/time.svg";
import Score from "./Score";

type Props = {};

interface ReviewCardProps {
  username: string;
  reviewTitle: string;
  reviewText: string;
  replyText: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  username,

  reviewText,
  reviewTitle,
  replyText,
  date,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300 w-full">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-gray-200 p-2">
              <img src={avatar} alt="avatar profile" className="w-8" />
            </div>
            {/* username section */}
            <div className="flex items-center gap-4">
              <div className="flex-col items-center mt-2 leading-3">
                <div className=" text-lg font-bold">{username}</div>

                <div className="">
                  <p className="w-full text-left text-[10px]">20% AuthScore</p>
                </div>
              </div>
              <div className="flex  items-center">
                <img src={location} width="28px" height="15px" alt="location" />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <div className="flex sm:gap-8 gap-4 items-center mb-4">
            <div className="text-left  font-bold sm:text-[13px] text-[10px] ">
              {reviewTitle}
            </div>
            <div className="flex items-center">
              <img src={time} alt="time" className="w-[11.63px]" />
              <p className=" w-full text-[7.5px]">{date}</p>
            </div>
          </div>

          <div className="text-left mb-4 text-[11.5px]  w-full">
            {reviewText}
          </div>
        </div>
        {/* right side */}
        <div className="w-full flex  justify-center  sm:justify-end">
          {/* <img src={ScoreRating} className="min-w-[144px]" alt="svg icon" /> */}
          <Score rating={15} />
        </div>
      </div>
      <div className="flex  mb-2 mt-4">
        <p className="text-blue-400">Reply from Eally Bangladesh</p>
      </div>
      <div className="flex  bg-blue-100 px-4 py-2 gap-2 rounded mb-4 w-full">
        <span className="border-l-2  border-[#becdd4] "></span>
        <p className="text-gray-600">{replyText}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
