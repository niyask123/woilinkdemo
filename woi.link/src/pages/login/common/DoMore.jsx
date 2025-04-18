import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { proFeaturesData } from '../../../data/mainData';
import { motion } from 'framer-motion'


const DoMore = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const style = document.createElement("style");
    //     style.innerHTML = `* { font-family: "Inter", sans-serif !important; }`;
    //     document.head.appendChild(style);
    //     return () => {
    //         document.head.removeChild(style);
    //     };
    // }, []);

    const {
        title,
        highlight,
        emoji,
        heading,
        subheading,
        features,
        cta,
        imageUrl
    } = proFeaturesData;
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: 'easeOut'
            }
        })
    }

    return (
      <div className="min-h-screen bg-white">
        <div className="flex flex-row transition-opacity duration-500 opacity-100">
          <div className="mx-5 flex flex-grow flex-col text-pretty">
            <div className="mx-5 flex flex-grow flex-col">
              <div className="flex w-full justify-end">
                <button className="mt-4 px-3 text-sm font-semibold   text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200">
                  Skip
                </button>
              </div>
              <motion.div
                className="relative w-full"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <div className="w-full   md:max-w-[500px] mx-auto pb-12 relative mt-6 whitespace-pre-line text-center text-[2.5rem] md:text-[4rem] font-bold uppercase leading-10 md:leading-[3.8rem] md:mb-[40px]">
                  {title}
                  <span className="ml-2 text-orchi text-blue-600 ">
                    {highlight}
                  </span>
                  <div className="absolute left-1/2 -translate-x-1/2 rotate-3 text-[3rem] top-[60%]">
                    {emoji}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative w-full"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <div className="font-inter">
                  <div className="mb-2 text-center text-base md:text-xl font-bold">
                    {heading}
                  </div>
                  <div className="mb-6 text-center text-sm md:text-base font-medium ">
                    {subheading}
                  </div>
                  <div className="mb-10 flex flex-col items-center justify-center">
                    {features.map((feature, index) => (
                      <div
                        className="flex  flex-row w-full md:max-w-[500px]"
                        key={index}
                      >
                        <div className="flex text-base md:text-2xl sm:w-[50px] w-[40px] flex-col">
                          {feature.icon}
                        </div>
                        <div className="flex flex-col">
                          <div className="text-sm md:text-base font-semibold">
                            {feature.title}
                          </div>
                          <div className="text-xs md:text-xs  mb-3 ">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative w-full"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <div className="mb-20 md:mb-0 w-full">
                  <div className="mx-auto w-full text-center sm:max-w-xl">
                    <div
                      className="woi_log_btn_04"
                      onClick={() => navigate("/u-r/create/select-template")}
                    >
                      {cta}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex-col hidden min-[1050px]:block">
            <img
              src={imageUrl}
              className="h-[100vh] w-full"
              alt="Business Illustration"
            />
          </div>
        </div>
      </div>
    );
};

export default DoMore;
