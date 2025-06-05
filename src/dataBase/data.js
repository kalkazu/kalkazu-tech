import { ScreenShare, TabletSmartphone } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { ShieldPlus } from "lucide-react";





export const faqInformation = [
    {
        value: "item-1",
        titleTrigger: "About Us !",
        accordionContent: "We are the best on the tech market",
    },
    {
        value: "item-2",
        titleTrigger: "About Us !",
        accordionContent: "We are the best on the tech market",
    },
    {
        value: "item-3",
        titleTrigger: "About Us !",
        accordionContent: "We are the best on the tech market",
    },
    {
        value: "item-4",
        titleTrigger: "About Us !",
        accordionContent: "We are the best on the tech market",
    }
];

export const imgSectionHero = [
    {
        image: "/images/3dportfolio.png",
        alt: "3D Portfolio",
    },
    {
        image: "/images/portaljob.png",
        alt: "Portal Job",
    },
    {
        image: "/images/bank.png",
        alt: "logo",
    },
    {
        image: "/images/titanium.png",
        alt: "Titanium store",
    },
    {
        image: "/images/xora.png",
        alt: "Xora lading page",
    },
    {
        image: "/images/teezzstore.png",
        alt: "teezzstore",
    },
];




export const Menus = [
  {
    name: "Features",
    subMenuHeading: ["Websites", "Apps"],
    subMenu: [
      {
        name: "Your Websites",
        desc: "Build with Us",
        icon: ScreenShare,
        href: '/websites'
      },
      {
        name: "Your App",
        desc: "Build with Us",
        icon: TabletSmartphone,
        href: '/appservice'
      },
    ],
    gridCols: 2,
  },
  {
    name: "Services",
    subMenuHeading: ["Softwares"],
    subMenu: [
      {
        name: "Split kodex",
        desc: "Build your website",
        icon: ShieldPlus,
        href: '#'
      },
    ],
    gridCols: 1,
  },
  {
    name: "Blog",
    subMenuHeading: ["Dev", "AI"],
    subMenu: [
      {
        name: "Your Websites",
        desc: "Build with Us",
        icon: ScreenShare,
        href: '#'
      },
      {
        name: "Your App",
        desc: "Build with Us",
        icon: TabletSmartphone,
        href: '#'
      },
      {
        name: "Your App",
        desc: "Build with Us",
        icon: TabletSmartphone,
        href: '#'
      },
    ],
    gridCols: 2,
  },
];
