import React from "react";
// import TabItems from "./TabItems";

const TabSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:py-[60px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 lg:text-[30px] font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Browse your doctors By.
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Choose from thousands of providers at every day affordable prices. Book online today
              </p>
            </div>
          </div>
        </div>

        {/* TABS SECTION ON THE HOME PAGE */}
    {/* <TabItems/> */}
    
      </div>
    </section>
  );
};

export default TabSection;


