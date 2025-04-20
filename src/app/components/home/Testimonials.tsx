
"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */




import { useState } from "react"
import { Carousel } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import styles from "@/app/styles.module.css"
// Sample data for the slider
const data = [
    {
      id: 1,
      name: "Ahmed Al-Sayed",
      position: "Health Enthusiast",
      testimonial: "Meal Box has completely transformed the way I approach healthy eating. The personalized meal plans make it so easy to stick to my diet, and every meal is delicious!",
  
      alt: "Ahmed's testimonial photo"
    },
    {
      id: 2,
      name: "Fatima Hassan",
      position: "Busy Professional",
      testimonial: "As a busy professional, Meal Box has been a game-changer for me. I no longer have to worry about meal prep, and the variety keeps me excited about eating healthy!",
    
      alt: "Fatima's testimonial photo"
    },
    {
      id: 3,
      name: "Yasir Khan",
      position: "Father and Family Chef",
      testimonial: "Meal Box is perfect for families! The meals are nutritious, tasty, and customizable to suit my kids' preferences. It's made family meal time easier and more enjoyable.",
 
      alt: "Yasir's testimonial photo"
    },
    {
      id: 4,
      name: "Sara Ali",
      position: "Fitness Trainer",
      testimonial: "As a fitness trainer, I’m always looking for high-protein, balanced meals. Meal Box provides just what I need to stay on track with my fitness goals without sacrificing taste!",
     
      alt: "Sara's testimonial photo"
    },
  ];
  

const  Testimonials =() =>{
  const [carouselRef, setCarouselRef] = useState<any>(null)

  const nextSlide = () => {
    if (carouselRef) {
      carouselRef.next()
    }
  }

  const prevSlide = () => {
    if (carouselRef) {
      carouselRef.prev()
    }
  }

  return (
    <div className="mb-10 p-4">

    <div className="relative  mx-auto px-4 py-8 ">

{/* Left quotation mark */}
<div className="absolute -left-2 sm:left-4 md:left-8 lg:-left-6 xl:-left-2 -top-16 sm:-top-16 md:-top-16 lg:-top-20 xl:-top-28 2xl:-top-36 text-[#FAF39766] text-[60vw] sm:text-[30vw] md:text-[30vw] lg:text-[30vw] xl:text-[30vw] font-serif leading-none z-0 opacity-75 ">
  &ldquo;
</div>

{/* Right quotation mark */}
<div className="absolute right-2 sm:right-4 md:right-8 lg:-right-2 xl:-right-2 -bottom-36 sm:-bottom-60 md:-bottom-64 lg:-bottom-80  xl:-bottom-96 z-10  2xl:-bottom-[500px]  text-[#F379754A] text-[60vw] sm:text-[30vw] md:text-[30vw] lg:text-[30vw] xl:text-[30vw] font-serif leading-none  opacity-75 ">
  &rdquo;
</div>




      {/* Title */}
      <h2 className={`text-center mt-16 mb:mt-8 lg:mt-8 text-[#F37975] text-4xl font-bold mb-6 ${styles.fontRozha}`}>What Our Client Say</h2>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto z-10 flex flex-col justify-center ">
        <Carousel ref={setCarouselRef} dots={false} autoplay autoplaySpeed={3000} className="hadith-carousel">
          {data.map((d) => (
            <div key={d.id} className="px-12 py-4">
              <p className={`text-center text-lg md:text-xl font-medium max-w-2xl mx-auto ${styles.fontInter}`}>{d. testimonial}</p>
              <p className={`text-center text-lg md:text-xl font-medium max-w-2xl mx-auto ${styles.fontHotel}`}>{d. name}</p>
              <p className={`text-center text-lg md:text-xl font-medium max-w-2xl mx-auto ${styles.fontJost}`}>{d. position}</p>
           
            </div>
          ))}
        </Carousel>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[#F08080] hover:text-[#E06060] transition-colors"
          aria-label="Previous slide"
        >
          <LeftOutlined className="text-2xl" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#F08080] hover:text-[#E06060] transition-colors"
          aria-label="Next slide"
        >
          <RightOutlined className="text-2xl" />
        </button>
      </div>
     
    </div>
 
    </div>
  )
}

export default Testimonials