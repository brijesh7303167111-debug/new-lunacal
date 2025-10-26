import { useState } from "react";
import { HelpCircle, Grid } from "lucide-react"; // icons
import Subsec1 from "./Subsec1";
import "./subesec1.css";

const GRADIENT_START = "#A3ADBA";
const GRADIENT_END = "#4A4E54";
const IconHelpCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style={{ stopColor: GRADIENT_START, stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: GRADIENT_END, stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>

    <circle cx="12" cy="12" r="10" stroke="url(#iconGradient)"></circle>
    <path
      d="M9.5 8.5a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2.5-1.5 3.5m0 3h.01"
      stroke="url(#iconGradient)"
    ></path>
  </svg>
);

export default function Sec1() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <style>
        {`
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 24px;
  }


  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%);
    border-radius: 8px;
    box-shadow: 4px 4px 4.9px 0px #00000040;
    opacity: 1;
  }
`}
      </style>

      <div className=" w-full   flex">
        <div className="flex ml-[10px] h-[159.69px] w-6 gap-[105px] flex-col items-center justify-content-center   pt-[20px] ">
          <div className="w-[24px] h-[24px] ">
            <IconHelpCircle className="w-6 h-6" />{" "}
          </div>
          <div className="w-full flex items-center justify-center gap-[1.3px]">
            <div className="flex flex-col items-center gap-[1.3px]">
              <div className="w-[9.13px] h-[9.13px] bg-[#4A4E54] rounded-[0.5px]"></div>
              <div className="w-[9.13px] h-[9.13px] bg-[#4A4E54] rounded-[0.5px]"></div>
              <div className="w-[9.13px] h-[9.13px] bg-[#4A4E54] rounded-[0.5px]"></div>
            </div>
            <div className="flex flex-col items-center gap-[1.3px]">
              <div className="w-[9.13px] h-[9.13px] bg-[#4A4E54] rounded-[0.5px]"></div>
              <div className="w-[9.13px] h-[9.13px] bg-[#4A4E54] rounded-[0.5px]"></div>
              <div className="w-[9.13px] h-[9.13px] bg-[#4A4E54] rounded-[0.5px]"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-[22px] pb-2  mt-[17px] mr-[53px] ">
          <div className=" relative flex justify-between  items-center w-[614px] h-[57px]  pt-1.5 pb-1.5 bg-[#171717] rounded-[23px] pr-2.5 pl-2 overflow-hidden">
            <div
              className="absolute top-2 left-2 h-[42px] w-[195px] rounded-2xl bg-[#28292e] shadow-[0_0_15px_rgba(40,41,46,1)] transition-transform duration-800 z-0 ease-in-out"
              style={{
                transform: `translateX(${
                  ["about", "experience", "recommended"].indexOf(activeTab) *
                  200
                }px)`,
              }}
            ></div>

            {["about", "experience", "recommended"].map((tab) => (
              <button
                key={tab}
                style={{ fontFamily: "Poppins" }}
                onClick={() => setActiveTab(tab)}
                className={`relative overflow-hidden w-[195px] h-full text-[18px] font-medium text-center leading-[16.12px] rounded-2xl transition-all duration-500 
      ${
        activeTab === tab ? "  text-white" : "text-gray-400 hover:text-white"
      } group`}
              >
              
                <span className=" absolute left-0 top-0 h-full w-0   bg-gradient-to-r from-[#28292e]/20 to-[#28292e]/70
                  transition-all duration-700 ease-in-out
                  group-hover:w-full
                  z-0
                "
                ></span>

                <span className="relative  ">
                  {tab === "about"
                    ? "About Me"
                    : tab === "experience"
                    ? "Experiences"
                    : "Recommended"}
                </span>
              </button>
            ))}
          </div>

          
          <div className="max-h-[150px] mt-[32px]  w-[614px] overflow-y-auto pr-2 custom-scrollbar ">
            <Subsec1 activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  );
}
