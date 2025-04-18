import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { suggested_links } from '../../../data/mainData';
import { motion } from 'framer-motion'


const SuggestedLinks = () => {
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate('/u-r/create/complete');
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
        <div className="min-h-screen bg-white flex flex-col">
            <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
                <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
                    <Link
                        to="/u-r/create/name-image-bio"
                        className="px-3 py-1 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-all"
                    >
                        Back
                    </Link>
                    <div className="mx-auto w-full max-w-[7.5rem]">
                        <div className="h-2 bg-gray-300 rounded-md overflow-hidden">
                            <div className="h-full bg-black transition-transform origin-left" style={{ transform: 'scaleX(1)' }} />
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
                                    Add suggested links
                                </h1>
                            </motion.div>
                            <motion.div
                                className="relative w-full"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={2}>
                                <p className="text-sm md:text-base mt-2 font-medium text-gray-700">
                                    We found a few more links across the web, based on your accounts
                                </p>
                            </motion.div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {suggested_links.map((item, index) => (
                                <motion.label
                                    key={item.id}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index + 3} // Adjusting index so it's staggered after the header (which used 1 and 2)
                                    className="flex w-full select-none border border-[#dddddd] items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-200 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                >
                                    {/* Thumbnail + Favicon */}
                                    <div className="relative shrink-0">
                                        <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#F3F3F1] h-16 w-16">
                                            {item.thumbnail && !item.thumbnail.includes('noneimg.svg') ? (
                                                <img
                                                    className="object-contain"
                                                    src={item.thumbnail}
                                                    alt={`${item.title} thumbnail`}
                                                />
                                            ) : (
                                                <img
                                                    src="/woilink/react/logins/noneimg.svg"
                                                    className="object-contain w-10"
                                                    alt=""
                                                />
                                            )}
                                        </div>

                                        <img
                                            src={item.favicon}
                                            alt={`${item.title} favicon`}
                                            className="absolute -bottom-1 -right-1 rounded-md p-0.5 bg-white h-6 w-6"
                                        />
                                    </div>

                                    {/* Title and URL */}
                                    <div className="min-w-0 flex-1 text-left">
                                        <p className="text-black text-sm truncate font-semibold">{item.title}</p>
                                        <p className="text-concrete font-medium text-gray-700 text-sm truncate">{item.url}</p>
                                    </div>

                                    {/* Hidden Input */}
                                    <input className="peer sr-only" type="checkbox" name={`social-${item.id}`} />

                                    {/* Checked Icon */}
                                    <span className="h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border peer-focus-visible:ring-2 peer-focus-visible:ring-black peer-focus-visible:ring-offset-2 hidden bg-blue-600 text-white peer-checked:flex">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                fill="currentColor"
                                                d="m14.7 2.51-.31.39-8 10-.76.02-4-4.5-.34-.37.75-.67.33.38 3.6 4.05 7.64-9.53.31-.4.78.63Z"
                                            />
                                        </svg>
                                    </span>

                                    {/* Unchecked Icon */}
                                    <span className="h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-gray-100 peer-focus-visible:ring-2 peer-focus-visible:ring-black peer-focus-visible:ring-offset-2 flex broder text-black peer-checked:hidden">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M7.5 8.5V16H8.5V8.5H16V7.5H8.5V0H7.5V7.5H0V8.5H7.5Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </motion.label>
                            ))}
                        </div>

                    </form>
                </div>
            </main>
            <motion.footer
                className="pointer-events-auto fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg-white py-6 pl-6 pr-6 lg:px-14 lg:py-12"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}>
                <div className="mx-auto w-full md:max-w-lg">
                    <button
                        onClick={handleContinue}
                        className="btn w-full h-14 rounded-full py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all"
                    >
                        Continue
                    </button>
                </div>
            </motion.footer>

        </div>

    )
}

export default SuggestedLinks
