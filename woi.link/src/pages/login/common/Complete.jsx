import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion'


const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
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

const Complete = () => {
    const [width, height] = useWindowSize();

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* 🎉 Confetti */}
            <div className="fixed inset-0 z-20 pointer-events-none">
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={1000}
                    gravity={0.5}
                    wind={0.01}
                    initialVelocityX={7}
                    initialVelocityY={15}
                    tweenDuration={3000}
                    opacity={0.9}
                    colors={['#00C2FF', '#FFD700', '#FF5E7E', '#9B5DE5', '#00F5D4']}
                    recycle={false}

                />



            </div>

            <div className="flex min-h-screen flex-col relative z-10">
                <main className="relative mx-auto w-full flex-grow px-4 pt-4 lg:px-24 lg:pt-6 pb-[10rem]">
                    <div className="mx-auto max-w-[520px] text-center space-y-4">
                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}>
                            <h1 className="woi_log_main_head">Looking good!</h1>
                        </motion.div>
                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}>
                            <p className="text-gray-600 sm:text-base text-sm font-medium">
                                Your Woilink is off to a great start. <br />
                                Continue building to make it even better.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative w-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={3}>
                            <div className="relative flex flex-1 items-center justify-center animate-fade-in-up">
                                <div className="preview-wrapper overflow-hidden rounded-[42px]">
                                    <img src="/woilink/react/demo/final.png" alt="Preview" />
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
                    <div className="mx-auto w-full md:max-w-lg">
                        <button className="w-full  py-4 bg-blue-600 hover:cursor-pointer text-white rounded-full hover:bg-blue-700 font-semibold transition-all">
                            Continue building
                        </button>
                    </div>
                </motion.footer>
            </div>
        </div>
    );
};

export default Complete;
