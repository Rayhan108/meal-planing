"use client";




import style from "@/app/styles.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col container mx-auto mt-3 md:-mt-28">
      {/* Top Banner */}
      <Link href="">
             <div className="flex md:hidden  justify-center mt-1">
        
             <button className={` tracking-widest  rounded-full bg-[#F37975] p-2 md:p-3  text-base sm:text-lg md:text-xl hover:bg-[#e57373] text-white ${style.fontPoppins}`}>
              Order Now
              </button>
             </div>
            </Link>
      <div className={`${style.fontPoppins} text-center mb-3 lg:mb-0 py-2`}>
        <p className="text-[#1a1a1a73] text-md md:text-xl font-thin">
          Free shipping. Unlimited returns. Cancel anytime.
        </p>
      </div>

      {/* Hero Content - Increased Width for Better Layout */}
      <div className="relative bg-[#FAF397] w-[80%] md:w-[750px] lg:w-[900px] xl:w-[1000px]  py-6 md:py-6 mx-auto">
        <div className=" px-4 ">
          {/* Main Content */}
          <div className="relative z-10 text-center w-[60%] sm:w-[70%] md:w-auto mx-auto">


            <p
              className={`text-2xl md:text-4xl xl:text-5xl  ${style.fontRozha} mb-4`}
            >
             Expertly crafted meal plans
              <br />
              <span className="relative inline-block mr-3">
                for every
                <span className="absolute left-0 bottom-0 w-full h-3 md:h-[15px] bg-red-400 -z-10"></span>
              </span>
              dietary preference.
            </p>
          </div>

          {/* Bullet Points */}
          <div
            className={`space-y-4 text-lg md:text-xl mx-auto ${style.poppins}`}
          >
            <p
              className={`text-[17px] sm:text-xl 2xl:text-xl text-center font-semibold ${style.poppins} block mb-4`}
            >
               Our team tailors each meal to your dietary needs and preferences.
            </p>

            <div className="w-[70%] sm:w-[510px] mx-auto">
              <div className="flex flex-col justify-start items-start ">
                <div className="flex items-start">
                  <span className="mr-2">–</span>
                  <p className="leading-snug text-[16px] xl:text-lg text-start">  
                  Discover healthy meals that fit your personal dietary preferences
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">–</span>
                  <p className="leading-snug text-[16px] xl:text-lg text-start">
                  Improve overall health, energy, and well-being with balanced meals
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">–</span>
                  <p className="leading-snug text-[16px] xl:text-lg text-start">
                  Rest assured that all meals are tailored to your specific dietary requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default Hero;
