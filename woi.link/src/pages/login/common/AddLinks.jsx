import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { platforms } from '../../../data/mainData';
import { motion, AnimatePresence } from 'framer-motion';


const AddLinks = () => {
    const navigate = useNavigate();
    const [continueLoading, setContinueLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(false); // Fix: define pageLoading

    const handleContinue = () => {
        setContinueLoading(true);
        setTimeout(() => {
            navigate('/u-r/create/name-image-bio');
        }, 1500);
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

    if (pageLoading || continueLoading) {
        return (
            <div className="min-h-screen bg-white">
                <div className="flex min-h-screen flex-col">
                    <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
                        <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
                            <Link
                                to={'/u-r/create/select-template'}
                                className="px-3 text-sm font-semibold text-concrete text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200"
                            >
                                Back
                            </Link>
                            <div className="mx-auto w-full max-w-[7.5rem]">
                                <div className="flex h-2 gap-2">
                                    <progress className="progress w-56"></progress>
                                </div>
                            </div>
                            <button className="px-3 text-sm font-semibold text-concrete text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200">
                                Skip
                            </button>
                        </div>
                        <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6">
                            <div className="relative mx-auto w-full">
                                <div className="mx-auto flex h-full max-w-[520px] justify-center gap-3 items-center flex-col transition-opacity duration-500 opacity-100">
                                    {/* <span className="loading loading-bars loading-xl"></span> */}
                                    <div className="text-sm font-semibold flex items-end gap-1">Finding your content <span className="loading loading-dots loading-xs"></span></div>
                                    <img src="/woilink/react/icons/mobile.gif" className='object-contain w-52' alt="" />
                                </div>
                            </div>
                        </main>

                    </header>
                </div>
            </ div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
                <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
                    <Link
                        to="/u-r/create/select-template"
                        className="px-3 py-1 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-all"
                    >
                        Back
                    </Link>
                    <div className="mx-auto w-full max-w-[7.5rem]">
                        <div className="h-2 bg-gray-300 rounded-md overflow-hidden">
                            <div className="h-full bg-black transition-transform origin-left" style={{ transform: 'scaleX(0.85)' }} />
                        </div>
                    </div>
                    <button className="px-3 py-1 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-all">
                        Skip
                    </button>
                </div>
            </header>

            <main className="flex-grow px-4 md:px-6 lg:px-24 pb-[7.5rem] pt-4 lg:pb-[11rem] lg:pt-6">
                <div className="mx-auto w-full max-w-[600px]">
                    <form className="flex flex-col gap-3 sm:text-center transition-opacity duration-500 opacity-100">
                        <div className="flex flex-col gap-2 pb-6 text-center">
                            <motion.div
                                className="relative w-full"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={1}>
                                <h1 className="woi_log_main_head">
                                    Add your links
                                </h1>
                            </motion.div>
                            <motion.div
                                className="relative w-full"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={2}>
                                <p className="text-sm md:text-base mt-2 font-medium text-gray-700">
                                    Complete the fields below to add your content to your new Woilink.
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex flex-col gap-4 text-left">
                            <div className="text-sm sm:text-base font-semibold">Social Media</div>
                            {platforms.map(({ id, name, icon }, index) => (
                                <motion.div
                                    key={id}
                                    className="flex gap-2 items-center"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                >
                                    <div className="bg-gray-100 rounded-lg flex justify-center items-center h-12 w-12">
                                        <img src={icon} alt={`${name} icon`} className="p-1 object-contain h-10" />
                                    </div>
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            id={id}
                                            className="woi_log_input_01 peer"
                                        />
                                        <label htmlFor={id} className="woi_label_absolute_01 bg-white">
                                            {name} Username
                                        </label>
                                    </div>
                                </motion.div>
                            ))}


                            <div className="text-sm md:text-base font-semibold mt-4">Website URLs</div>
                            {[1, 2, 3].map((num, index) => (
                                <motion.div
                                    key={num}
                                    className="flex gap-3 items-center"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index + platforms.length} // Continue delay from previous list
                                >
                                    <div className="bg-gray-100 rounded-lg flex justify-center items-center h-12 w-12">
                                        <img src="/woilink/react/icons/signup/link.svg" alt="Website icon" className="p-1 object-contain h-9" />
                                    </div>
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            id={`website_url_${num}`}
                                            className="woi_log_input_01 peer"
                                        />
                                        <label htmlFor={`website_url_${num}`} className="woi_label_absolute_01">
                                            Website URL
                                        </label>
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </form>
                </div>
            </main>

            <footer className="fixed bottom-0 left-0 z-10 w-full bg-white py-6 px-6 lg:px-14 lg:py-12">
                <div className="mx-auto w-full md:max-w-lg">
                    <button
                        onClick={handleContinue}
                        className="btn w-full h-14 rounded-full py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all"
                    >
                        Continue
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default AddLinks;
