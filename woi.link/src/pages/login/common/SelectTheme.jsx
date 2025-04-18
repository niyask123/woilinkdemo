import React, { useState } from 'react';
import { urTemplates } from '../../../data/mainData';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const SelectTheme = () => {
    const [selectedTemplateId, setSelectedTemplateId] = useState(null);
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
        <div className="flex min-h-screen flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
            <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
              <div className="mx-auto w-full max-w-[7.5rem]">
                <div className="flex h-2 gap-2">
                  <div className="relative h-full flex-1 overflow-hidden rounded-md bg-gray-300">
                    <div
                      className="h-full origin-left transform transition-all duration-300 bg-black"
                      style={{ transform: "scaleX(0.50)" }}
                    />
                  </div>
                </div>
                <div className="absolute right-0 -top-0 flex-none lg:min-w-8">
                  <button className="px-3 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200">
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6">
            <div className="relative mx-auto w-full">
              <div className="mx-auto flex h-full max-w-[800px] flex-col transition-opacity duration-500 opacity-100">
                <header className="flex flex-col gap-2 pb-6 text-center md:gap-4">
                  <motion.div
                    className="relative w-full"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                  >
                    <div className="woi_log_main_head">
                      Select a template
                    </div>
                  </motion.div>
                  <motion.div
                    className="relative w-full"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                  >
                    <p className="md:text-base text-sm font-medium text-gray-700 [text-wrap:balance]">
                      Pick the style that feels right - you can add your content
                      later
                    </p>
                  </motion.div>
                </header>
                <motion.div
                  className="relative w-full"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                >
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-6">
                    {urTemplates.map((template) => (
                      <div
                        key={template.id}
                        className={`flex flex-col items-center rounded-2xl cursor-pointer transition-all duration-200  ${
                          selectedTemplateId === template.id
                            ? "outline-1 outline-black ring-2 border-none "
                            : ""
                        }`}
                        onClick={() => setSelectedTemplateId(template.id)}
                      >
                        <div className="block max-h-[320px] rounded-2xl overflow-hidden">
                          <img
                            alt={template.name}
                            className="pointer-events-none block"
                            loading="lazy"
                            src={template.image}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </main>

          {/* Footer with conditional button */}

          <AnimatePresence>
            {selectedTemplateId && (
              <motion.footer
                key="footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="
                            pointer-events-auto 
                            fixed bottom-0 left-0 z-10 
                            flex w-full items-center justify-between 
                            bg-white 
                            py-6 pl-6 pr-6 
                            lg:px-14 lg:py-12 
                            md:bg-transparent 
                            md:bg-[linear-gradient(0deg,theme(colors.white)_12.5%,rgb(255_255_255_/_0%)_100%)]
                         "
              >
                <motion.div
                  key="start-button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-auto relative mx-auto w-full md:max-w-lg"
                >
                  <Link
                    to={
                      urTemplates.find((t) => t.id === selectedTemplateId)?.link
                    }
                  >
                    <button className="woi_log_btn_04">
                      Start with this template
                    </button>
                  </Link>
                </motion.div>
              </motion.footer>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
};

export default SelectTheme;
