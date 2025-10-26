import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
// import static from "../assets/static.jpg";
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

export default function Sec2() {
  const [images, setImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const fileInputRef = useRef(null);

  // // // const staticImages = [static, static, static];

  useEffect(() => {
    
    const storedImages = localStorage.getItem('galleryImages');
    if (storedImages) {
      try {
        setImages(JSON.parse(storedImages));
      } catch (e) {
        console.error('Failed to parse stored images:', e);
        localStorage.removeItem('galleryImages');
      }
    }
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      localStorage.setItem('galleryImages', JSON.stringify(images));
    }
  }, [images]);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result;
      setImages(prev => {
        const updated = [imageUrl, ...prev];
        localStorage.setItem('galleryImages', JSON.stringify(updated));
        return updated;
      });
    };
    reader.readAsDataURL(file);
  };

  const handleAddImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
      fileInputRef.current.click();
    }
  };

  const handlePrev = () => {
    setStartIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => (prev + 1) % images.length);
  };

  const displayedImages = images.slice(startIndex, startIndex + 3).concat(
    images.slice(0, Math.max(0, 3 - (images.length - startIndex)))
  );
  return (
    <>
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

        <div  className="w-full pt-[20px] pl-[18px] pr-[57px]" >
            <div className=" w-full flex items-center justify-between ">
                <div className="bg-[#171717] w-[149px] h-[45px] text-[18px] font-medium text-center text-white  rounded-2xl items-center flex justify-center ">
                  Gallery
                </div>



                <div className="flex gap-[25px]" >
                    <button
              onClick={handleAddImage}
              className="bg-[#40474e]  text-[12px]  h-[38px] w-[131px] [backdrop-filter:blur(104.56px)] [box-shadow:0px_3.26px_3.26px_0px_#FFFFFF26_inset,0px_0px_48.91px_0px_#FFFFFF0D_inset,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40] text-white rounded-3xl text-center   shadow-inner"
            >
              + ADD IMAGE
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="flex gap-[10px]" >
                  <button
              onClick={handlePrev}
              className="rounded-full   w-[40px] h-[40px] p-2 [background:linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)] [box-shadow:4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]              hover:[background:linear-gradient(139.14deg,#1f2226_12.4%,#101112_94.96%)] 
              transition-colors duration-200 ease-in-out"
            >
              <ArrowLeft size={18} color="#6F787C" />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full w-[40px] h-[40px] p-2 [background:linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)] [box-shadow:4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]              hover:[background:linear-gradient(139.14deg,#1f2226_12.4%,#101112_94.96%)] 
              transition-colors duration-200"
            >
              <ArrowRight size={18} color="#6F787C" />
            </button>
            </div>
                </div>
            </div>

        

          <div className="flex mt-9 gap-[18px] items-center">
            {displayedImages.map((img, index) => (
              <motion.div
                key={index}
                 whileHover={{
                  scale: 1.08,                    
                  x: 5,                               
                  y: -9,        
                  rotate:-3,    
                  
                  boxShadow: "4px 5px 30px 5px #2A2D30, -5px -3px 30px -10px #2A2D30",
                }}
                 className="rounded-3xl overflow-hidden w-[190px] h-[170px] transition-all duration-100"
              >
                <img
                  src={img}
                  alt="Gallery Item"
                  className="  filter grayscale brightness-90 transition-all duration-100 hover:grayscale-0 hover:brightness-100  object-cover w-full h-full"
                />
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
