'use client';
import Slider from "react-slick"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { imgSectionHero } from "@/dataBase/data";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CldImage } from "next-cloudinary";

const Slides = (props: any) => {
   const isMediumScreen = useMediaQuery({minWidth: 768, maxWidth: 1023});
   const isSmallScreen = useMediaQuery({maxWidth: 767});
   const settings = {
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      className: "w-full mx-auto cursor-pointer center-mode",
   };
   if(isMediumScreen) {
    settings.slidesToShow = 1.67
   } else if (isSmallScreen) {
    settings.slidesToShow = 1
   }
  return (
    <Slider {...settings}>
        
          {props.props.map((images: any ,index: any) => (
            <div key={index} className="rounded-md px-2 md:p-10">
              <CldImage
                priority
                src={images.image}
                alt={images.alt}
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>

          ))}
    </Slider>
  )
}

export default Slides