import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { businessCategories } from "../../../data/mainData";
import { motion, AnimatePresence } from 'framer-motion';


const BusinessCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [customCategory, setCustomCategory] = useState("");
    const navigate = useNavigate();

    const handleContinue = () => {
        const categoryToPass = selectedCategory === "Other" ? customCategory.trim() : selectedCategory;
        if (categoryToPass) {
            navigate("/u-r/monetization", {
                state: { selectedCategory: categoryToPass },
            });
        }
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
                            <div className="flex h-2 gap-2">
                                <div className="relative h-full flex-1 overflow-hidden rounded-md bg-gray-300">
                                    <div className="h-full origin-left transform bg-black transition-all duration-300" style={{ transform: "scaleX(0.25)" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6">
                    <div className="flex flex-col gap-3">
                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}>
                            <div className="text-black text-[32px] max-w-[450px] mx-auto font-bold text-center leading-heading tracking-[-1px] lg:text-5xl lg:tracking-[-2px]">
                                Select your business category
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}>
                            <p className="text-gray-600 max-w-[500px] mx-auto mt-6 mb-6 font-medium text-center">
                                Choose the option that best applies.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}>
                            <div className="relative mx-auto w-full">
                                <div className="mx-auto max-w-[500px] gap-4 flex flex-col transition-opacity duration-500 opacity-100">
                                    {businessCategories.map((category) => (
                                        <div
                                            key={category.id}
                                            className={`w-full rounded-full border border-[#dddddd] text-center py-2.5 font-medium transition-all duration-300 cursor-pointer ${selectedCategory === category.title
                                                ? "bg-black text-white"
                                                : "text-gray-600 hover:bg-gray-100"
                                                }`}
                                            onClick={() => {
                                                setSelectedCategory(category.title);
                                                if (category.title !== "Other") setCustomCategory("");
                                            }}
                                        >
                                            {category.title}
                                        </div>
                                    ))}

                                    {selectedCategory === "Other" && (
                                        <textarea
                                            className="mt-3 w-full rounded-2xl border transition-all duration-300 ease-in-out text-xs font-medium text-gray-700 border-gray-300 p-3 text-gray-800 focus:border-black focus:outline-none"
                                            placeholder="Please specify your business category..."
                                            value={customCategory}
                                            onChange={(e) => setCustomCategory(e.target.value)}
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </main>

                <motion.footer
                    className="pointer-events-auto fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg-white py-6 pl-6 pr-6 lg:px-14 lg:py-12"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={4}>
                    <div className="relative mx-auto w-full md:max-w-lg">
                        <button
                            className={`btn rounded-full h-14 w-full py-3 text-base font-semibold shadow-none transition-all duration-300 ${selectedCategory && (selectedCategory !== "Other" || customCategory.trim())
                                ? "bg-blue-600 text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                            disabled={!selectedCategory || (selectedCategory === "Other" && !customCategory.trim())}
                            onClick={handleContinue}
                        >
                            Continue
                        </button>
                    </div>
                </motion.footer>
            </div>
        </div>
    );
};

export default BusinessCategory;
