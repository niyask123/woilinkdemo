import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'


const DigitalCard3DLoader = ({ onFinish }) => {
    const [countdown, setCountdown] = useState(5);
    const [touched, setTouched] = useState(false); // <--- new state

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev === 1) {
                    clearInterval(interval);
                    onFinish();
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div
            className="min-h-screen bg-gray-200/40 z-30"
            onTouchStart={() => setTouched(true)} // <--- detect screen touch
        >
            <div className="flex min-h-screen flex-col">
                <div className="flex-1">
                    {/* <header className="sticky top-0 z-10 w-full px-4 pt-2 lg:p-6">
                        <div className="bg-white p-4 rounded-2xl">
                            <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
                                <div className="mx-auto text-end flex justify-between w-full items-center">
                                    <div className="text-base font-medium">Digital Business Card</div>
                                    
                                </div>
                            </div>
                        </div>
                    </header> */}
                    
                        <header className="sticky top-0 z-20 w-full px-4  lg:p-6">
                        <motion.div
                        className="w-full z-50 relative top-0"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                            <div className="flex  h-full py-4 absolute right-6 top-6 justify-center items-center rounded-full px-6 gap-2 w-10 bg-gray-200/80">
                                {countdown}
                            </div>
                            </motion.div>
                        </header>

                        <header className="absolute top-0 z-20 w-full px-4  lg:p-6">
                        <motion.div
                        className="w-full z-50 relative top-0"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                            <div className="flex  h-full py-4 absolute left-6 top-6 justify-center items-center rounded-full  ">
                                <img src="/woilink/react/logo/woi_logo.png" className='h-5' alt="" />
                            </div>
                            </motion.div>
                        </header>
                 

                    <main className="flex-grow overflow-auto px-4 md:px-6 lg:px-24 pb-[5rem] pt-4 lg:pb-[11rem] lg:pt-6">
                        <div className="max-w-4xl w-full  rounded-2xl items-center bg-white flex flex-col md:px-10">
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                            >
                                <div className="relative">
                                    <img
                                        src="/woilink/react/avatar/cardbg.jpg"
                                        alt="profile"
                                        className="w-full rounded-t-2xl transition-all duration-300 ease-in-out h-56 z-0 object-cover"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full flex items-center justify-center "
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                            >
                                <div className={`mb-4 rounded-b-4xl flex flex-col items-center text-center transition-all duration-300 ease-in-out bg-[#7ba521] ${touched ? 'w-64' : 'w-100'
                                    }`}
                                >
                                    <h2 className="mt-2 font-medium text-white text-lg">Brenna John</h2>
                                    <p className="text-xs text-white mb-4">Enterpreneur <br /> New York, USA</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            >
                                <div className="text-sm font-medium px-3 text-center">Welcome to My Woilink digital business card. Tap to connect with me</div>
                            </motion.div>
                            <div className="space-y-1 my-2 w-full mb-2 flex flex-col gap-1 group-hover:px-2 transition-all duration-300 ease-in-out px-3 ">
                                <motion.div
                                    className="w-full flex items-center justify-center "
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                                >
                                    <button className="w-full hover:cursor-pointer shadow-lg text-gray-100  transition-all duration-300 bg-[#ea4335]  py-1 rounded-full font-medium">
                                        <div className="flex items-center px-4 pl-1 gap-2">
                                            <div className="p-1 rounded-full bg-white"><img src="/woilink/react/icons/signup/instagram.svg" className="object-contain rounded-full w-9 bg-transparent" alt="" /></div>
                                            <div className="text-xs text-start">
                                                <div className="text-sm">Follow on Instagram</div>
                                            </div>
                                        </div>
                                    </button>
                                </motion.div>
                                <motion.div
                                    className="w-full flex items-center justify-center "
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                                >
                                    <button className="w-full hover:cursor-pointer shadow-lg  transition-all text-gray-100 duration-300 bg-blue-700  py-1 rounded-full font-medium">
                                        <div className="flex items-center px-4 pl-1 gap-2">
                                            <div className="p-1 rounded-full bg-white"><img src="/woilink/react/icons/signup/facebook.svg" className="object-contain rounded-full w-9 bg-transparent" alt="" /></div>
                                            <div className="text-xs text-start">
                                                <div className="text-sm">Follow on Facebook</div>
                                            </div>
                                        </div>
                                    </button>
                                </motion.div>
                                <motion.div
                                    className="w-full flex items-center justify-center "
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                                >
                                    <button className="w-full hover:cursor-pointer shadow-lg   transition-all duration-300 bg-green-700 text-gray-100 py-1 rounded-full font-medium">
                                        <div className="flex items-center px-4 pl-1 gap-2">
                                            <div className="p-1 rounded-full bg-white"><img src="/woilink/react/icons/signup/website.svg" className="object-contain rounded-full w-9 bg-transparent" alt="" /></div>
                                            <div className="text-xs text-start">
                                                <div className="text-sm">Visit our Website</div>
                                            </div>
                                        </div>
                                    </button>
                                </motion.div>
                            </div>
                            <motion.div
                                className="w-full flex items-center justify-center "
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                            >
                                <div className="text-white bg-transparent rounded-2xl p-4 w-full justify-center flex ">
                                    <img src="/woilink/react/logins/qrCode.png" className="object-contain px-3 py-3 h-48 border border-black/50 rounded-2xl shadow_woi_01" alt="" />
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full flex items-center justify-center "
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
                            >
                                <div className="flex flex-row  justify-around mb-4 gap-3">
                                    <div className="w-full h-full mt-1  p-0.5 bg-yellow-500 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/signup/g_meet.png" className="  w-11  rounded-full h-11 p-1 bg-white" alt="" />
                                    </div>
                                    <div className="w-full h-full mt-1  p-0.5 bg-green-700 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/signup/microsoft.png" className="  w-11  rounded-full h-11 p-1 bg-white" alt="" />
                                    </div>
                                    <div className="w-full h-full mt-1  p-0.5 bg-blue-400 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/signup/zoom.png" className="  w-11  rounded-full h-11 p-1 bg-white" alt="" />
                                    </div>
                                    <div className="w-full h-full mt-1  p-0.5 bg-black rounded-full transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/signup/github.svg" className="  w-11  rounded-full h-11 p-1 bg-white" alt="" />
                                    </div>
                                    <div className="w-full h-full mt-1  p-0.5 bg-red-700 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/signup/pinterest.svg" className="  w-11  rounded-full h-11 p-1 bg-white" alt="" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </main>

                    <footer className="fixed bottom-0  left-0 z-10 w-full bg-transparent pb-6 px-6 lg:px-14 lg:py-12">
                        <div className="relative flex  mx-auto w-full gap-2 md:max-w-lg">
                            {/* <motion.div
                                className="w-full flex items-center justify-center "
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                            >
                            <button
                                onClick={onFinish}
                                className={`w-full shadow-2xl shadow-black rounded-full py-3 transition-colors duration-300 ease-in-out  ${touched ? 'bg-black/90 text-white font-bold' : 'bg-gray-400/90 shadow-2xl font-bold text-black'
                                    }`}
                            >
                                Skip Continue
                            </button>
                            </motion.div> */}
                            <motion.div
                                className="w-full flex items-center justify-center "
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
                            >
                                <button
                                    onClick={onFinish}
                                    className={`w-full flex justify-center items-center gap-1 rounded-full shadow-2xl shadow-black py-3.5 transition-colors duration-300 ease-in-out ${touched ? 'bg-black/90 text-white font-bold' : 'bg-gray-500/90 shadow-2xl font-bold text-black'
                                        }`}
                                >
                                    Create Your Card
                                    {/* <MdSend className='text-xl  ' /> */}
                                </button>
                            </motion.div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default DigitalCard3DLoader;
