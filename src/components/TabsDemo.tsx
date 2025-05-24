"use client";
import { Tabs } from "../components/ui/tabs";
import Image  from "next/image"
export function TabsDemo({
  title1,
  value1,
  content1,
  imagesDummyContent1,
  altDummyContent1,
  title2,
  value2,
  content2,
  imagesDummyContent2,
  altDummyContent2,
  title3,
  value3,
  content3,
  imagesDummyContent3,
  altDummyContent3,
  title4,
  value4,
  content4,
  imagesDummyContent4,
  altDummyContent4,
  title5,
  value5,
  content5,
  imagesDummyContent5,
  altDummyContent5,

}: any) {
  const tabs = [
    {
      title: title1,
      value: value1,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>{content1}</p>
          <DummyContent image={imagesDummyContent1} alt={altDummyContent1}/>
        </div>
      ),
    },
    {
      title: title2,
      value: value2,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p >{content2}</p>
         <DummyContent image={imagesDummyContent2} alt={altDummyContent2}/>
        </div>
      ),
    },
    {
      title: title3,
      value: value3,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>{content3}</p>
          <DummyContent image={imagesDummyContent3} alt={altDummyContent3}/>
        </div>
      ),
    },
    {
      title: title4,
      value: value4,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>{content4}</p>
          <DummyContent image={imagesDummyContent4} alt={altDummyContent4}/>
        </div>
      ),
    },
    {
      title: title5,
      value: value5,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>{content5}</p>
          <DummyContent image={imagesDummyContent5} alt={altDummyContent5}/>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({image, alt}: {image: string, alt: string}) => {
  return (
    <div>
     <Image
       src={image}
       alt={alt}
       width={1000}
       height={1000}
       className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
     />
    
    </div>
  );
};
