import { useState } from "react";
import "./App.css";
import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-between items-center p-0 m-0 bg-[#191B1F] w-full h-screen ">
       
       
        {/* //.left side jo -- blank */}
        <div className=" h-full  bg-amber-100 justify-center items-center"></div>

        {/* //.right side */}
        <div className=" flex justify-center md:justify-start h-full pt-[4%]  ">
            
            <div className="m-auto pr-[86px] min-pl-5 w-full h-full  md:items-start items-center ">
               
               
                <div
                  className="h-[40%] rounded-[1rem]   
                    backdrop-blur-[9.8px]
                    shadow-[6px_6px_6px_0px_#00000054] w-[720px]  bg-[#363C43]"
                >
                  <Sec1 />
                </div>

            
                <div className="w-full  flex justify-center">
                  <div
                     className="w-[612px]  h-[4px] rounded-[2.46px] opacity-100  mt-[20px]  mb-[17px]
                    shadow-[0px_4px_4px_0px_#00000054]
                    bg-[linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))]
                    backdrop-blur-[9.837319374084473px]"
                  ></div>
                </div>


                <div
                  className="bg-[#363C43]  rounded-[1rem] backdrop-blur-[9.837319374084473px]
                  shadow-[7px_7px_7px_0px_#00000054] h-[42%] w-[720px]  "
                >
                  <Sec2 />
                </div>


                <div className="w-full flex justify-center">
                  <div
                    className="w-[612px] h-[4px] rounded-[2.46px] opacity-100  mt-[20px]  
                    shadow-[0px_4px_4px_0px_#00000054]
                    bg-[linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))]
                    backdrop-blur-[9.837319374084473px]"
                  ></div>
                </div>





            </div>
        </div>



      </div>
    </>
  );
}

export default App;
