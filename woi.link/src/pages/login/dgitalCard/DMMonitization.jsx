import React, { useState } from "react";
import { monetisationCategories } from "../../../data/mainData";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

const DMMonittization = () => {
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSelect = (id) => {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
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
                <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
                    <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
                        <div className="mx-auto w-full max-w-[7.5rem]">
                            <div className="flex h-2 gap-2"></div>
                        </div>
                    </div>
                </header>

                <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6 text-center overflow-x-hidden">
                    <motion.div
                        className="relative w-full"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}>
                        <div className="flex flex-col gap-3 md:gap-4 pb-6 ">
                            <div className="max-w-[1000px] woi_log_main_head">
                                How do you want to make money?
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-600">
                                Your answer will help us personalize your experience. Select all that apply.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative w-full"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}>
                        <div className="mx-auto mb-12 flex w-full flex-wrap justify-center gap-x-4 gap-y-[10px] md:max-w-[800px] md:gap-x-6 md:gap-y-4">
                            {monetisationCategories.map((category) => {
                                const Icon = category.icon;
                                const isSelected = selectedCategories.includes(category.id);

                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => handleSelect(category.id)}
                                        className={`flex flex-col items-center justify-center hover:cursor-pointer rounded-[12px] bg-white px-3 py-4 md:py-6 min-[392px]:w-[164px] w-full md:h-[140px] border-gray-200 hover:bg-gray-50 ${isSelected ? "outline-1 outline-black ring-1 border-none ring-inset" : "border"
                                            }`}
                                    >
                                        <div className="py-2">
                                            <Icon className="text-2xl" />
                                        </div>
                                        <div className="text-sm font-semibold text-gray-700">{category.title}</div>
                                        <div className="text-xs font-medium text-gray-600 mt-1">{category.description}</div>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </main>

                <motion.footer
                    className="pointer-events-auto fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg- py-6 pl-6 pr-6 lg:px-14 lg:py-12"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={4}>
                    <div className="mx-auto w-full md:max-w-lg">
                        <div className="flex w-full flex-col gap-3 md:gap-5">
                            <button
                                onClick={() => selectedCategories.length > 0 && navigate('/u-r/do-more')}
                                className={`woi_log_btn_01 ${selectedCategories.length > 0
                                    ? 'woi_log_btn_02'
                                    : 'woi_log_btn_03'
                                    }`}
                                disabled={selectedCategories.length === 0}
                            >
                                Continue
                            </button>

                            <button className="text-gray-600 text-sm font-medium">I'm just doing this for fun</button>
                        </div>
                    </div>
                </motion.footer>
            </div>
        </div>
    );
};

export default DMMonittization;
