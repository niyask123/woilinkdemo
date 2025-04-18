import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { businessUseTypes } from "../../../data/mainData";

const DSelectCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();



    const handleSelect = (id) => {
        setSelectedCategory(id);
    };

    const handleContinue = () => {
        const selectedUser = businessUseTypes.find(user => user.id === selectedCategory);
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
    };

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
                            <div className="max-w-[500px] woi_log_main_head">
                                Woilink helps you collect and share business info at every single event
                            </div>
                        </motion.div>


                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}>
                            <div className="relative mx-auto w-full">

                                <div className="mx-auto gap-3 mt-1 max-w-[500px] flex flex-col transition-opacity duration-500 opacity-100">
                                    <p className="text-gray-600 max-w-[500px] mx-auto mt-10 font-medium w-full text-start sm:text-base text-sm">
                                        Who Will be using Woilink?
                                    </p>

                                    {businessUseTypes.slice(0, 2).map(user => (
                                        <div
                                            key={user.id}
                                            onClick={() => handleSelect(user.id)}
                                            className={`w-full border gap-4 h-28 md:h-auto md:gap-6 p-4 rounded-2xl flex flex-row  justify-between cursor-pointer transition-all duration-300 ${selectedCategory === user.id ? "outline-1 outline-black ring-1 ring-inset" : "border-gray-300"} 
                                            ${user.id === 1 ? "hover:bg-blue-50": ""}
                                            ${user.id === 2 ? " hover:bg-green-50" : ""}
                                            `}
                                        >
                                            <div className="md:w-24 w-36 ">
                                                <img src={user.image} className="object-contain rounded-xl h-full" alt={user.title} />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <div className="text-base font-semibold mb-1">{user.title}</div>
                                                <div className="text-sm font-medium text-gray-600  leading-4">{user.description}</div>
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
                            className={`!w-full woi_log_btn_01 ${selectedCategory ? "woi_log_btn_02" : "woi_log_btn_03"}`}
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

export default DSelectCategories;
