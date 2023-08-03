import React from "react";


const HeroSection = () => (
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-4/6 md:w-8/6 w-8/6 mb-20 object-cover object-center rounded" alt="hero" src="/images/20171027131359_image1.jpg" />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><b>GetHired Group Can Help You Achieve Your Goals</b></h1>
      <p className="mb-8 leading-relaxed">Being a Degreed Engineer with many years of experience working with engineers
from Software, Hardware, and IT, has helped GetHired Group excel
at connecting Top Engineers with exciting projects and companies.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Student</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"> professional</button>
      </div>
    </div>
  </div>
</section>
  
)
 

export default HeroSection;
