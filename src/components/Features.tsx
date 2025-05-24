import React from "react";
import { LensDemo } from "./LensDemo";

const Features = () => {
  return (
    <div>
      <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        that is the all tech<br /> that you need for your business
      </div>
      <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
        <LensDemo 
          src="/images/wordpress.png"
          alt="Wordpress logo" 
          title="Wordpress" 
          content="We can help you build your business with wordpress" 
        />
        <LensDemo 
          src="/images/woocommerce.png"
          alt="Woocommerce logo" 
          title="Woocommerce" 
          content="We can help you build your store with woocommerce" 
        />
        <LensDemo 
          src="/images/elementor.png"
          alt="elementor logo" 
          title="Elementor" 
          content="We can help you build your anything for your project with this tool" 
        />
        <LensDemo 
          src="/images/seo.png"
          alt="Seo optimization" 
          title="Seo" 
          content="We can optimize your business to go to top of the google search" 
        />
      </div>
    </div>
  );
};

export default Features;
