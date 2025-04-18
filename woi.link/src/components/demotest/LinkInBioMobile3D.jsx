



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'


const LinkInBioMobile3D = ({ onFinish }) => {
    const [countdown, setCountdown] = useState(500);
    const [touched, setTouched] = useState(false); // <--- new state

    // shop link button click show hide
    const [activeTab, setActiveTab] = useState("shop")

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveTab("link");
        }, 3000); // 2.5 seconds

        return () => clearTimeout(timer); // clean up
    }, []);

    return (
        <div
            className="min-h-screen bg-blue-500 z-30"
            onTouchStart={() => setTouched(true)} // <--- detect screen touch
        >
            <div className="flex min-h-screen flex-col">
                <div className="flex-1">
                    <header className="sticky top-0 z-20 w-full px-4  lg:p-6">
                        <motion.div
                            className="w-full z-50 relative top-0"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        >
                            <div className="flex  h-full py-4 absolute right-4 top-6 justify-center items-center rounded-full px-6 gap-2 w-10 bg-gray-200/80">
                                {countdown}
                            </div>
                        </motion.div>
                    </header>
                    <header className="absolute top-0 z-20 w-full px-4  lg:p-6">
                        <motion.div
                            className="w-full z-50 relative top-0"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                        >
                            <div className="flex  h-full py-4 absolute left-6 top-6 justify-center items-center rounded-full  ">
                                <img src="/woilink/react/logo/woi_logo.png" className='h-5' alt="" />
                            </div>
                        </motion.div>
                    </header>
                    <main className="flex-grow overflow-auto px-4 pb-[6rem] pt-4 lg:pb-[11rem] lg:pt-6">
                        <div className="max-w-4xl w-full  rounded-2xl items-center p-4 bg-blue-400 flex flex-col md:px-10 ">

                            <div className="flex w-full justify-center h-36 items-center">
                                <motion.div
                                    className="w-full justify-center items-center flex z-50 relative top-0"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                                >
                                    <img
                                        src="/woilink/react/avatar/15.jpg"
                                        alt="profile"
                                        className="w-26 h-26 rounded-full transition-all duration-300 ease-in-out  z-0 object-cover"
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                            >
                                <div className={`mb-0 rounded-b-4xl flex flex-col items-center text-center transition-all duration-300 ease-in-out  ${touched ? 'w-64' : 'w-100'
                                    }`}
                                >
                                    <h2 className="mt-2 font-medium text-black text-lg">Woilink Store.com</h2>
                                    <p className="text-xs text-black mb-4">Woilink Store</p>
                                </div>
                            </motion.div>



                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                            >
                                <div className="flex flex-wrap gap-3 justify-around items-center w-full">


                                    <div className=" bg-white/40 text-white p-2 w-22 rounded-xl shadow-2xl">
                                        <div className="flex flex-col gap-3 items-center justify-center">

                                            <img src="/woilink/react/icons/signup/instagram.svg" className="w-fit h-12" alt="" />
                                        </div>

                                    </div>
                                    <div className=" bg-white/40 text-white p-2 w-22 rounded-xl shadow-2xl">
                                        <div className="flex flex-col gap-3 items-center justify-center">

                                            <img src="/woilink/react/icons/signup/link.svg" className="w-fit h-12" alt="" />
                                        </div>

                                    </div>
                                    <div className=" bg-white/40 text-white p-2 w-22 rounded-xl shadow-2xl">
                                        <div className="flex flex-col gap-3 items-center justify-center">

                                            <img src="/woilink/react/icons/signup/facebook.svg" className="w-fit h-12" alt="" />
                                        </div>

                                    </div>

                                    <div className=" bg-white/40 text-white p-2 w-22 rounded-xl shadow-2xl">
                                        <div className="flex flex-col gap-3 items-center justify-center">

                                            <img src="/woilink/react/icons/signup/x.svg" className="w-fit h-12" alt="" />
                                        </div>

                                    </div>
                                    <div className=" bg-white/40 text-white p-2 w-22 rounded-xl shadow-2xl">
                                        <div className="flex flex-col gap-3 items-center justify-center">

                                            <img src="/woilink/react/icons/signup/pinterest.svg" className="w-fit h-12" alt="" />
                                        </div>

                                    </div>
                                    <div className=" bg-white/40 text-white p-2 w-22 rounded-xl shadow-2xl">
                                        <div className="flex flex-col gap-3 items-center justify-center">

                                            <img src="/woilink/react/icons/signup/threads.svg" className="w-fit h-12" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="w-full mt-4 max-w-md mx-auto">
                                <motion.div
                                    className="w-full flex"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                                >
                                    <div className="flex w-full p-1 rounded-full bg-white shadow">
                                        <motion.div
                                            className="w-full h-full "
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                                        >
                                            <button
                                                onClick={() => setActiveTab("shop")}
                                                className={`w-full text-center font-medium rounded-full transition-all duration-300 h-full ${activeTab === "shop" ? "bg-blue-600 text-white shadow" : "text-gray-700 w-full"
                                                    }`}
                                            >
                                                shop
                                            </button>
                                        </motion.div>
                                        <motion.div
                                            className="w-full"
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                                        >
                                            <button
                                                onClick={() => setActiveTab("link")}
                                                className={`w-full p-2 text-center font-medium rounded-full transition-all duration-300 ${activeTab === "link"
                                                    ? "bg-blue-600 text-white" : "text-gray-700"
                                                    }`}
                                            >Link</button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <div className="  mb-1 rounded-2xl   transition-all duration-300">

                                    {activeTab === "shop" ? (
                                        <motion.div
                                            className=""
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}>
                                            <div className="mt-4 p-4 h-36 border border-blue-500 rounded-xl  shadow transition-all duration-300">
                                                <div className="animate-fade-in flex w-full">
                                                    <motion.div
                                                        className="w-full"
                                                        initial={{ opacity: 0, y: 40 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                                                    >
                                                        <div className="flex flex-col w-full justify-center items-center gap-1.5">
                                                            <img src="/woilink/react/logo/shoe_2.png" className='h-20 ' alt="" />
                                                            <div className="font-medium">$25</div>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div
                                                        className="w-full"
                                                        initial={{ opacity: 0, y: 40 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                                                    >
                                                        <div className="flex flex-col w-full justify-center items-center gap-1.5">
                                                            <img src="/woilink/react/logo/shoe_one.png" className='h-20 rotate-12' alt="" />
                                                            <div className="font-medium">$80</div>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (

                                        <div className="mt-4 p-4 h-36 border border-white rounded-xl  shadow transition-all duration-300">
                                            <div className="animate-fade-in flex w-full">
                                                <motion.div
                                                    className="w-full"
                                                    initial={{ opacity: 0, y: 40 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                                                >
                                                    <div className="flex flex-col w-full justify-center items-center gap-1.5">
                                                        <img src="/woilink/react/logo/lotion_1.png" className='h-20' alt="" />
                                                        <div className="font-medium">$25</div>
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    className="w-full"
                                                    initial={{ opacity: 0, y: 40 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                                                >
                                                    <div className="flex flex-col w-full justify-center items-center gap-1.5">
                                                        <img src="/woilink/react/logo/lotion_2.png" className='h-20' alt="" />
                                                        <div className="font-medium">$80</div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                            >
                                <div className="py-3 flex flex-col leading-4">
                                    <div className="text-lg text-center font-medium">New Product</div>
                                    <div className="text-center">12 Products</div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                            >
                                <div className="my-2 flex   gap-1 w-full rounded-2xl">
                                    <motion.div
                                        className="w-full"
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
                                    >
                                        <div className="w-full bg-white/40 justify-center  rounded-2xl items-center flex-col flex py-3">
                                            <img src="/woilink/react/logo/t_white-bg.png" className='h-28' alt="" />
                                            <div className="font-medium justify-center items-center flex flex-col">
                                                <div className="text-sm">t-shirt White</div>
                                                <div className="">$45</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="w-full"
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
                                    >
                                        <div className="w-full bg-white/40 justify-center rounded-2xl items-center flex-col flex py-3">
                                            <img src="/woilink/react/logo/t_black-bg.png" className='h-28' alt="" />
                                            <div className="font-medium justify-center items-center flex flex-col">
                                                <div className="text-sm">t-shirt black</div>
                                                <div className="">$45</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>


                            {/* <div className="flex flex-row mt-6  justify-around mb-4 gap-3">
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
                            </div> */}
                        </div>
                    </main>
                    <footer className="fixed bottom-0  left-0 z-10 w-full bg-transparent pb-6 px-6 lg:px-14 lg:py-12">
                        <div className="relative flex  mx-auto w-full gap-2 md:max-w-lg">
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.9, type: "spring", stiffness: 100 }}>
                                <button
                                    onClick={onFinish}
                                    className={`w-full flex justify-center items-center gap-1 rounded-full shadow-2xl shadow-black py-3.5 transition-colors duration-300 ease-in-out ${touched ? 'bg-black/90 text-white font-bold' : 'bg-gray-500/90 shadow-2xl font-bold text-black'
                                        }`}
                                >
                                    Create Your Card
                                </button>
                            </motion.div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default LinkInBioMobile3D;
