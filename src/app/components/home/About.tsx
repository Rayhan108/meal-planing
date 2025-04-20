'use client'
import styles from '@/app/styles.module.css'
import Image from 'next/image';

import img1 from '@/asset/cooking1.jpg'
import img2 from '@/asset/cooking2.jpg'
import img3 from '@/asset/cooking3.jpg'



import React from 'react';
import Link from 'next/link';

const features = [
    {
      title: "About Meal Box",
      description: 
        "Meal Box is a personalized meal planning and delivery service designed to bring convenience, health, and flavor directly to your door. Whether you're looking for keto, vegan, gluten-free, or family-friendly options, we tailor each meal plan to your dietary preferences, lifestyle, and nutritional needs.",
      image: img1, // You can replace this with an actual image or illustration related to meal delivery
      alt: "Meal delivery box illustration",
    },
    {
      title: "Tailored Meal Plans",
      description: 
        "Our team of nutritionists and chefs handpick each meal with care, ensuring you're always eating delicious, balanced, and nutritious meals. Every month, your meal plan evolves based on your feedback and preferences, so you're never bored with your meals!",
      image: img2, // Replace with appropriate image related to meal planning
      alt: "Healthy meal preparation illustration",
    },
    {
      title: "Health",
      description: 
        "Whether you're a busy professional, a health-conscious individual, or just someone who loves good food, Meal Box is here to make your life easier, healthier, and tastier. Start your personalized meal plan today and experience the joy of eating exactly what you love!",
      image: img3, // Replace with an image related to convenience or healthy eating
      alt: "Convenient meal delivery illustration",
    },
    {
        title: "Get Started Today",
        description: 
          "Click below to begin your personalized meal journey with Meal Box. Enjoy convenient, healthy, and delicious meals, delivered right to your door.",
        cta: "Get Started Today", // Text for the call-to-action button
        link: "/signup", // Link to the signup page
        image: img2, // Optional: You can replace with an image for this section
        alt: "Sign up illustration",
      },
  ];
const About = () => {
    return (
        <div className="bg-[#FBD5D4] w-full p-5 md:p-0 py-2">
<div className='container mx-auto'>
<div className='py-8 relative z-10 '>
<h1 className={`text-center text-3xl md:text-5xl   ${styles.fontRozha}`}>About   <span className="relative inline-block mr-3">
FreshFest
      <span className="absolute left-0 bottom-0 w-full h-4 sm:h-6 md:h-[25px] bg-[#FAF397] -z-10"></span>
    </span></h1>
<p className={`text-center text-xl md:text-2xl  ${styles.fontPopins}`}>Receive five books. Only buy the ones you love.</p>
</div>


        <section className="relative w-[100%]  mx-auto border-4 border-red-500 bg-[#FFFFFF] px-4 py-6">
  <div className="">

  
    {/* Features Grid */}
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="mb-6 h-48 w-48">
            <Image
              src={feature.image || ""}
              alt={feature.alt}
              width={200}
              height={200}
              className="h-full w-full object-contain"
            />
          </div>
          <p className={`mb-4 text-2xl  ${styles.fontRozha}`}>
            {feature.title}
          </p>
          <p className={`text-gray-600 ${styles.fontPopins}`}>{feature.description}</p>
        </div>
      ))}
    </div>


  </div>

</section>
    {/* CTA Button */}
    <div className="relative -top-7 flex justify-center">
    
   <Link href={"/name"}>
   <button
         
         className={`h-12 rounded-full text-white bg-[#f08080] px-8 text-lg hover:bg-[#e57373] ${styles.fontInter}`}
       >
         GET STARTED
       </button>
   </Link>
  
    </div>
</div>
    </div>
    );
};

export default About;