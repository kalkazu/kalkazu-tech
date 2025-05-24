import { BackgroundLinesDemo } from '@/components/BackgroundLinesDemo'
import { CarouselDemo } from '@/components/CarouselDemo'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { TabsDemo } from '@/components/TabsDemo'
import React from 'react'

const page = () => {
  return (
    <div>
      <BackgroundLinesDemo />
      <CarouselDemo />
      <TabsDemo 
        // section 1
        title1={"Ecommerce"}
        value1={"Ecommerce"}
        content1={"Teezz Sotore"}
        imagesDummyContent1={"/images/teezzstore.png"}
        altDummyContent1={"Teezz Store"}
        // section 2
        title2={"Page"}
        value2={"Page"}
        content2={"Page"}
        imagesDummyContent2={"/images/seo.png"}
        altDummyContent2={"hot image"}
        // section 3
        title3={"Blog"}
        value3={"Blog"}
        content3={"Blog"}
        imagesDummyContent3={"/images/seo.png"}
        altDummyContent3={"hot image"}
        //  setion 4
        title4={"Sells"}
        value4={"Sells"}
        content4={"Sells"}
        imagesDummyContent4={"/images/seo.png"}
        altDummyContent4={"hot image"}
        // section 5
        title5={"Personal"}
        value5={"Personal"}
        content5={"Personal"}
        imagesDummyContent5={"/images/seo.png"}
        altDummyContent5={"hot image"}
      />
      <Pricing />
      <Footer />
    </div>
  )
}

export default page