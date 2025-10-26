import React from 'react'

const Subsec1 = ({ activeTab }) => {
  
  switch (activeTab) {
    case "about":
      return (
        <>
          <p style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',  }} className="text-[#969696] font-plus font-normal text-[20px] leading-[100%] tracking-[0]">
            
          
             Hello! I'm Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <p style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',  }} className=" mt-4 text-[#969696] font-plus font-normal text-[20px] leading-[100%] tracking-[0]">
      
I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is the task which has been given to me which i have done , hope you will like it and give me the opportunity to work in your esteemed company.    </p>
        </>
      );

    case "experience":
      return (
        <p style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',  }} className="text-[#969696] font-plus font-normal text-[20px] leading-[100%] tracking-[0]">
         I have hands-on experience in full-stack web development with a strong focus on the MERN stack.
During my internship at Ocean Technology, I worked on designing responsive interfaces, integrating APIs, and optimizing performance for real-world web applications.
I also enjoy building personal projects that solve practical problems — from management systems to interactive web dashboards — sharpening both my frontend and backend skills.
        </p>
      );

    case "recommended":
      return (
        <>
         <p style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',  }} className="text-[#969696] font-plus font-normal text-[20px] leading-[100%] tracking-[0]">
        I was not surprised to see that atleast <span className='text-white' >7-8 students of my batch got the same task </span>from your company i hope you will select atleast one of us, Thank you! </p>


        <p style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',  }} className="text-[#969696] mt-5 font-plus font-normal text-[20px] leading-[100%] tracking-[0]">
      I’ve been appreciated for my attention to detail, clean code practices, and the ability to quickly adapt to new technologies.
      </p>
           <p style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',  }} className="text-[#969696] mt-5 font-plus font-normal text-[20px] leading-[100%] tracking-[0]">
    Peers and mentors often recommend me for my problem-solving mindset and collaborative approach when working in teams.

        </p>

        <p style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',  }} className="text-[#969696] mt-5 font-plus font-normal text-[20px] leading-[100%] tracking-[0]">
    I believe in writing efficient, readable code and continuously improving through feedback and real-world challenges.

        </p>
        </>
      );

    default:
      return null;
  }
}

export default Subsec1
