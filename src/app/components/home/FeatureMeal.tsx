
import feature1 from '@/asset/hero1.jpg'
import feature2 from '@/asset/hero2.jpg'
import feature3 from '@/asset/premium_photo-1663047707111-c022dee3abe7.avif'
import feature4 from '@/asset/bannerImg.jpg'
import feature5 from '@/asset/pexels-ella-olsson-572949-1640777.jpg'
import Image from 'next/image'

const images = [
    {
      id: 1,
      img: feature1, 
    },
    {
      id: 2,
      img: feature2, 
    },
    {
      id: 3,
      img: feature3,
    },
    {
      id: 4,
      img: feature4, 
    },
    {
      id: 5,
      img: feature5,
    }
  ];

const FeatureMeal = () => {

    return (
<div>
<div className="   bg-[#FFF2C9] md:hidden container mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 px-5 justify-center md:mb-0 lg:mb-0 mb-6 relative top-20 lg:relative lg:top-20">
        {images.map((image) => (
          <div key={image.id} className="relative mb-4">
            <Image
              src={image.img}
              alt="book"
              width={500} 
              height={500} 
              layout="intrinsic" 
              objectFit="cover" // Ensures images fit their container
            />
          </div>
        )).slice(0,4)}
      </div>
<div className=" px-5 hidden     bg-[#FFF2C9] container mx-auto md:grid md:grid-cols-5 lg:grid-cols-5 gap-4 p-5 justify-center md:mb-0 lg:mb-0 mb-6 relative top-20 lg:relative lg:top-20">
        {images.map((image) => (
          <div key={image.id} className="relative mb-4">
            <Image
              src={image.img}
              alt="book"
              width={500} 
              height={500} 
              layout="intrinsic" 
              objectFit="cover" 
            />
          </div>
        ))}
      </div>
</div>
      
    );
};

export default FeatureMeal;