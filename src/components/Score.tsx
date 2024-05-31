import React from "react";

type RatingProps = {
  rating: number;
};

const Score = ({ rating }: RatingProps) => {
  const borderColorClasses = {
    green: "border-green-400",
    yellow: "border-yellow-400",
    red: "border-[#FF001F]",
    blue: "border-blue-400",
  };

  const borderColor =
    rating >= 85
      ? borderColorClasses.blue
      : rating >= 65
      ? borderColorClasses.green
      : rating >= 50
      ? borderColorClasses.yellow
      : borderColorClasses.red;

  const hoverColorClasses = {
    blue: "hover:stroke-blue-300 hover:border-blue-300",
    green: "hover:stroke-green-300 hover:border-green-300",
    yellow: "hover:stroke-yellow-300 hover:border-yellow-300",
    red: "hover:stroke-red-400 hover:border-red-300",
  };

  const hoverColor =
    rating >= 85
      ? hoverColorClasses.blue
      : rating >= 65
      ? hoverColorClasses.green
      : rating >= 50
      ? hoverColorClasses.yellow
      : hoverColorClasses.red;

  const biasText =
    rating > 85 ? "Trustworthy" : rating >= 65 ? "Authentic" : "Biased";

  return (
    <div className={`flex flex-col border   ${borderColor} p-8`}>
      <p className="text-[8.5px] font-light">Trustworthiness</p>
      <span className="text-[10px] mb-4 leading-3">{biasText}</span>
      <div
        className={`flex rounded-full justify-center items-center border-4 ${borderColor} h-5 w-5 p-10`}
      >
        {rating}%
      </div>

      <div className="flex  justify-around items-center mt-10 border-b border-[#C3C3C3] w-[50px] mx-auto pb-2 ">
        <div className={`border ${hoverColor} rounded-full p-[5px] `}>
          <svg
            width="6"
            height="7"
            viewBox="0 0 6 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${hoverColor}`}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.323164 0C0.144687 0 0 0.137535 0 0.30719V6.45098C0 6.62064 0.144687 6.75817 0.323164 6.75817C0.501641 6.75817 0.646328 6.62064 0.646328 6.45098V3.87007C0.796929 3.7988 1.03501 3.69945 1.29023 3.63881C1.74803 3.53004 2.11542 3.57019 2.31644 3.85676C2.69163 4.3917 3.40815 4.43883 3.9596 4.38661C4.54152 4.3315 5.11724 4.15035 5.40828 4.04802C5.664 3.95814 5.81695 3.72731 5.81695 3.48378V1.45097C5.81695 0.974396 5.28625 0.696165 4.86326 0.878504C4.52025 1.02638 4.06456 1.19151 3.65275 1.24605C3.22191 1.30312 2.97169 1.2259 2.85418 1.0584C2.43022 0.453912 1.70488 0.382347 1.18502 0.423525C0.985456 0.439336 0.800021 0.472507 0.646328 0.507628V0.30719C0.646328 0.137535 0.501641 0 0.323164 0ZM0.646328 1.14307V3.19621C0.788788 3.14092 0.955324 3.0851 1.13349 3.04277C1.64519 2.92119 2.40886 2.88104 2.85418 3.51594C3.00885 3.73647 3.36527 3.82546 3.89551 3.77527C4.38721 3.7287 4.89341 3.57326 5.17062 3.47653V1.45097C5.17062 1.43701 5.14092 1.43342 5.13023 1.43803C4.76909 1.59371 4.24624 1.78776 3.74195 1.85455C3.25672 1.91883 2.6533 1.87954 2.31644 1.39921C2.09407 1.08218 1.68834 1.00017 1.2387 1.03578C1.00958 1.05393 0.796363 1.10166 0.646328 1.14307Z"
              fill="#B5B5B5"
            />
          </svg>
        </div>

        <div className={`border rounded-full px-2 py-1 ${hoverColor}`}>
          <svg
            width="2"
            height="9"
            viewBox="0 0 2 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${hoverColor}`}
          >
            <path
              d="M1.6 1.608H0.496V0.504H1.6V1.608ZM1.54 9H0.556V3.06H1.54V9Z"
              fill="#BEBEBE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Score;
