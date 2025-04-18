import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userTypes } from "../../../data/mainData";
import { motion } from 'framer-motion'


const LSelectCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleSelect = (id) => {
        setSelectedCategory(id);
    };

    const handleContinue = () => {
        const selectedUser = userTypes.find(user => user.id === selectedCategory);
        if (selectedUser?.links?.length) {
            navigate(`/u-r/${selectedUser.links[0]}`);
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
                                <div className="relative h-full flex-1 bg-gray-300 overflow-hidden rounded-md bg-sand">
                                    <div className="h-full origin-left transform transition-all duration-300 bg-black" style={{ transform: "scaleX(0.25)" }} />
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
                            <div className="woi_log_main_head max-w-[600px]">
                                Which best describes your goal for using Woilink?
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}>
                            <p className="text-gray-600 max-w-[500px] mx-auto mt-6 mb-6 font-medium text-center">
                                This helps us personalize your experience.
                            </p>
                        </motion.div>

                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={3}>
                            <div className="relative mx-auto w-full">
                                <div className="mx-auto max-w-[500px] flex flex-col transition-opacity duration-500 opacity-100">
                                    {userTypes.map((user) => (
                                        <div
                                            key={user.id}
                                            onClick={() => handleSelect(user.id)}
                                            className={`w-full border mt-5 p-4 rounded-2xl flex hover:bg-gray-100 flex-row justify-between cursor-pointer transition-all duration-300 ${selectedCategory === user.id ? "outline-1 outline-black ring-1 ring-inset" : "border-gray-300"
                                                }`}
                                        >
                                            <div className="flex flex-col justify-center">
                                                <div className="text-base font-semibold">{user.title}</div>
                                                <div className="text-sm font-medium text-gray-600 pr-10">{user.description}</div>
                                            </div>
                                            <div className="w-20">
                                                <img src={user.image.replace("", "")} className="object-contain rounded-xl" alt={user.title} />
                                            </div>
                                        </div>
                                    ))}
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
                    custom={5}>

                    <div className="relative mx-auto w-full md:max-w-lg">
                        <button
                            onClick={handleContinue}
                            className={`btn rounded-full h-14 w-full py-3 text-base font-semibold shadow-none transition-all duration-300 ${selectedCategory ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                            disabled={!selectedCategory}
                        >
                            Continue
                        </button>
                    </div>

                </motion.footer>
            </div>
        </div>
    );
};

export default LSelectCategories;
