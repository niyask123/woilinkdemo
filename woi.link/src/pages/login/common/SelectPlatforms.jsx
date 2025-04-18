import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { platforms } from '../../../data/mainData';
import { motion, AnimatePresence } from 'framer-motion';


const SelectPlatforms = () => {
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    const toggleSelect = (id) => {
        setSelected((prev) =>
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
                        <Link to={'/u-r/create/select-template'} className=" px-3 text-sm font-semibold text-concrete text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200">Back</Link>
                        <div className="mx-auto w-full max-w-[7.5rem]">
                            <div className="flex h-2 gap-2">
                                <div className="relative h-full flex-1 bg-gray-300 overflow-hidden rounded-md bg-sand">
                                    <div className="h-full origin-left transform transition-all duration-300 bg-black" style={{ transform: "scaleX(0.65)" }} />
                                </div>
                            </div>
                        </div>
                        <button className=" px-3 text-sm font-semibold text-concrete text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200">Skip</button>
                    </div>
                </header>
                <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6">
                    <div className="relative mx-auto w-full">
                        <form action="" className="relative mx-auto flex h-full max-w-[800px] flex-col transition-opacity duration-500 opacity-100">
                            <div className="flex-shrink flex-grow-0 overflow-y-auto">
                                <div className="">
                                    <header className="flex flex-col gap-2 pb-6 text-center md:gap-4">
                                        <motion.div
                                            className="relative w-full"
                                            variants={fadeInUp}
                                            initial="hidden"
                                            animate="visible"
                                            custom={1}>
                                            <div className="max-w-[700px] woi_log_main_head">
                                                Which platforms are you on?
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="relative w-full"
                                            variants={fadeInUp}
                                            initial="hidden"
                                            animate="visible"
                                            custom={2}>
                                            <div className="text-sm sm:text-base text-gray-600 max-w-[500px] mx-auto mt-3 mb-6 font-medium text-center">
                                                Pick up to five to get started. You can update at any time.
                                            </div>
                                        </motion.div>
                                    </header>
                                </div>
                                <div className="relative">
                                    <div className="flex flex-wrap overflow-hidden sm:justify-center">
                                        <AnimatePresence>
                                            {platforms.map((item, index) => {
                                                const isSelected = selected.includes(item.id);
                                                return (
                                                    <motion.label
                                                        key={item.id}
                                                        htmlFor={`platform-${item.id}`}
                                                        variants={fadeInUp}
                                                        initial="hidden"
                                                        animate="visible"
                                                        custom={index}
                                                        className="relative box-border flex aspect-square h-auto w-1/3 flex-shrink-0 cursor-pointer select-none flex-col items-center justify-center p-2 sm:w-1/4 md:w-1/6 md:p-2"
                                                    >
                                                        <input
                                                            id={`platform-${item.id}`}
                                                            type="checkbox"
                                                            value={item.id}
                                                            checked={isSelected}
                                                            onChange={() => toggleSelect(item.id)}
                                                            className="hidden"
                                                        />
                                                        <div
                                                            className={`w-full h-full rounded-2xl flex hover:bg-gray-100 flex-row justify-between cursor-pointer ${isSelected ? 'outline-2 outline-black ring-2 ring-inset' : ''
                                                                }`}
                                                        >
                                                            <div className="flex h-full w-full flex-col items-center justify-between p-4 pt-6 bg-gray-100 rounded-2xl">
                                                                <div className="flex flex-col gap-2 justify-center items-center">
                                                                    <img src={item.icon} alt={item.name} className="object-contain w-10 h-9" />
                                                                    <div className="text-xs font-medium text-gray-600">{item.name}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.label>
                                                );
                                            })}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
                <AnimatePresence>
                    {selected.length > 0 && (
                        <motion.footer
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="pointer-events-auto fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg-white py-6 pl-6 pr-6 lg:px-14 lg:py-12 md:bg-transparent md:bg-[linear-gradient(0deg,theme(colors.white)_12.5%,rgb(255_255_255_/_0%)_100%);]"
                        >
                            <div className="pointer-events-auto relative mx-auto w-full md:max-w-lg">
                                <button
                                    onClick={() => navigate('/u-r/create/add-links')}
                                    className="btn rounded-full h-14 w-full py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-none transition-all duration-300"
                                >
                                    Continue
                                </button>
                            </div>
                        </motion.footer>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default SelectPlatforms
