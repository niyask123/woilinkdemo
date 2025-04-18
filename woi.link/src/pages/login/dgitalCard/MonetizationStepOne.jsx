

import React from "react";
import { motion } from "framer-motion";
import { BusinessmonetisationCategories } from "../../../data/mainData";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.3,
            ease: "easeOut",
        },
    }),
};

const MonetizationStepOne = ({ selectedCategories, handleSelect, onContinue }) => {
    const isDisabled = selectedCategories.length === 0;
    return (
        <>
            <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
                <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
                    <div className="mx-auto w-full max-w-[7.5rem]">
                        <div className="flex h-2 gap-2">
                            <div className="relative h-full flex-1 overflow-hidden rounded-md bg-gray-300">
                                <div
                                    className="h-full origin-left transform transition-all duration-300 bg-black"
                                    style={{ transform: 'scaleX(0.15)' }}
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
            <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6 text-center overflow-x-hidden">
                <motion.div
                    className="relative w-full"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                >
                    <div className="flex flex-col gap-3 md:gap-4 pb-3">
                        <div className="max-w-[500px] woi_log_main_head">
                            Tell us your team's goals so we can give you the best experience.
                        </div>
                        <p className="text-gray-900  md:max-w-[600px] text-start w-full text-sm md:text-base mx-auto mt-6 mb-1 font-medium">
                            Select all that apply
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="relative w-full"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                >
                    <div className="mx-auto mb-12 flex w-full flex-wrap justify-start gap-x-4 gap-y-[10px] md:max-w-[600px] md:gap-x-6 md:gap-y-4">
                        {BusinessmonetisationCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleSelect(category.id)}
                                className={`flex flex-col items-center justify-center w-full md:w-auto rounded-full bg-white px-6 py-3 hover:cursor-pointer min-[392px] border-gray-200 hover:bg-gray-50 ${selectedCategories.includes(category.id)
                                    ? "outline-1 outline-black ring-1 border-none ring-inset"
                                    : "outline-1 outline-gray-200"
                                    }`}
                            >
                                <div className="md:text-sm text-xs font-semibold text-gray-700">
                                    {category.title}
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </main>
            <footer className="pointer-events-auto fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg-white py-6 pl-6 pr-6 lg:px-14 lg:py-12">
                <div className="mx-auto w-full md:max-w-lg">
                    <div className="flex w-full flex-col gap-5">
                        <button
                            onClick={onContinue}
                            className={`btn rounded-full py-6 shadow-none transition-all duration-300 ${isDisabled
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-700 text-white"
                                }`}
                            disabled={isDisabled}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </footer>
        </>

    );
};

export default MonetizationStepOne;
