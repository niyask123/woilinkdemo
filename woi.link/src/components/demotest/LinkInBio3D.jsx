import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FcCallback } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";

export default function LinkInBio3D() {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };

    const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), springConfig);

    const handleMouseMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        x.set(offsetX);
        y.set(offsetY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
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
        <motion.div
            whileHover={{ scale: 1.0 }}
            transition={{ type: "spring", stiffness: 100, damping: 5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="min-h-screen w-full group bg-green-900 flex items-center justify-center p-8"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 1000,
                }}
                whileHover={{ scale: 1.0 }}
                transition={{ type: "spring", stiffness: 100, damping: 5 }}
                className="relative will-change-transform"
            >
                <div className="relative ">
                    {/* Profile Info */}
                    <div className="w-[300px] group-hover:h-[620px] transition-all duration-300 ease-in-out h-[600px] rounded-3xl bg-yellow-400 text-white shadow-xl p-6">
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    className=" w-full flex flex-col items-center text-center "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={1}>
                                    <img
                                        src="/woilink/react/avatar/16.jpg"
                                        alt="profile"
                                        className="w-20 group-hover:w-24 group-hover:h-24 transition-all duration-300 ease-in-out h-20 rounded-full object-cover border-4 border-violet-500"
                                    />
                                    <h2 className="mt-4 font-semibold text-black text-lg">Brenna Martinez</h2>
                                    <p className="text-xs text-black mb-4">Founder of Shape Shifters</p>
                                </motion.div>
                                {/* Buttons */}
                                <div className="space-y-2 pl-28 w-96 ">
                                    <motion.div
                                        className="relative w-full"
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={2}>
                                        <button className="w-full hover:cursor-pointer text-gray-100 group-hover:w-72 transition-all duration-300 bg-[#ea4335]  py-2 rounded-full font-medium">
                                            <div className="flex items-center px-4 gap-2">
                                                <div className="p-2 rounded-full bg-white"><img src="/woilink/react/icons/gmail.svg" className="object-contain w-6 bg-transparent" alt="" /></div>
                                                <div className="text-xs text-start">
                                                    <div className="text-sm">Email</div>
                                                    <div className="">Send me an intro!</div>
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                    <motion.div
                                        className="relative w-full"
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={3}>
                                        <button className="w-full hover:cursor-pointer group-hover:w-72 transition-all text-gray-100 duration-300 bg-green-600  py-2 rounded-full font-medium">
                                            <div className="flex items-center px-4 gap-2">
                                                <div className="p-2 rounded-full bg-white"><FcCallback className="text-2xl" /></div>
                                                <div className="text-xs text-start">
                                                    <div className="text-sm">Phone</div>
                                                    <div className="">Get in touch with me</div>
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                    <motion.div
                                        className="relative w-full"
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={4}>
                                        <button className="w-full hover:cursor-pointer  group-hover:w-72 transition-all duration-300 bg-blue-700 text-gray-100 py-2 rounded-full font-medium">
                                            <div className="flex items-center px-4 gap-2">
                                                <div className="p-2 rounded-full bg-white"><FaLinkedinIn className="text-2xl text-blue-600" /></div>
                                                <div className="text-xs text-start">
                                                    <div className="text-sm">LinkedIn</div>
                                                    <div className="">Let's get connected</div>
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                    <motion.div
                                        className="relative w-full"
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={5}>
                                        <button className="w-full hover:cursor-pointer py-3 group-hover:w-72 transition-all duration-300 ease-in-out rounded-full bg-black text-white">Save Contact</button>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className=" w-full flex flex-col items-center mt-2 text-center "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={6}>
                                    <div className="my-2 ">
                                        <div className="text-black text-sm bg-white/60 rounded-2xl p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, ab!</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center  gap-2 mt-2">
                            <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={6}>
                                <div className="w-11 h-11 rounded-full bg-yellow-600 p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                    <img src="/woilink/react/icons/signup/snapchat.svg" className=" rounded-full w-full h-full p-1 bg-yellow-100 " alt="" />
                                </div>
                                </motion.div>
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={7}>
                                <div className="w-11 h-11 rounded-full bg-yellow-600 p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                    <img src="/woilink/react/icons/signup/facebook.svg" className=" rounded-full w-full h-full p-1 bg-yellow-100" alt="" />
                                </div>
                                </motion.div>
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={8}>
                                <div className="w-11 h-11 rounded-full bg-yellow-600 p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                    <img src="/woilink/react/icons/signup/pinterest.svg" className=" rounded-full w-full h-full p-1 bg-yellow-100" alt="" />
                                </div>
                                </motion.div>
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={9}>
                                <div className="w-11 h-11 rounded-full bg-yellow-600 p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                    <img src="/woilink/react/icons/signup/instagram.svg" className=" rounded-full w-full h-full p-1 bg-yellow-100" alt="" />
                                </div>
                                </motion.div>
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={10}>
                                <div className="w-11 h-11 rounded-full bg-yellow-600 p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                    <img src="/woilink/react/icons/signup/tiktok.svg" className=" rounded-full w-full h-full p-1 bg-yellow-100" alt="" />
                                </div>
                                </motion.div>
                                
                            </div>
                        </div>
                    </div>

                    {/* Absolute Floating Cards */}
                    <motion.div
                        className="absolute -left-32 bottom-48 w-[180px] rounded-3xl bg-amber-700 text-black p-4 shadow-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    >
                        <img
                            src="/woilink/react/logins/bg/Store-Woilink.png"
                            alt="product"
                            className="rounded-xl w-full h-full object-cover"
                        />
                        <p className="text-sm text-center text-white mt-2">
                            Explore online classes, merch, accessories and more from the Shape .
                        </p>
                    </motion.div>

                    <motion.div
                        className="absolute -right-16 -top-18 rotate-6 w-[230px] rounded-3xl text-black p-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    >
                        <img
                            src="/woilink/react/logins/bg/woilink_tag.png"
                            alt="product"
                            className="rounded-xl w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
