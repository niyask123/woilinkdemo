import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FcCallback } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";

export default function DitalCard3D() {
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
            className="min-h-screen w-full group  flex items-center justify-center p-8"
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
                className="relative will-change-transform bg-white rounded-4xl"
            >
                <div className="relative ">
                    {/* Profile Info */}
                    <div className="w-[300px] group-hover:h-[690px]  pt-0 transition-all duration-300 ease-in-out h-[680px] rounded-3xl  text-white shadow-xl px-0">
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    className=" w-full flex rounded-t-4xl top-1  bg-green-300 flex-col items-center text-center "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={1}>
                                    <img
                                        src="/woilink/react/avatar/cardbg.jpg"
                                        alt="profile"
                                        className="w-full rounded-t-4xl transition-all duration-300 ease-in-out h-48 object-cover "
                                    />

                                </motion.div>
                                <motion.div
                                    className=" w-64 mb-4 rounded-b-4xl flex flex-col items-center text-center bg-[#7ba521] "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={1}>

                                    <h2 className="mt-2 font-medium text-white text-lg">Brenna John</h2>
                                    <p className="text-xs text-white mb-4">Enterpreneur <br /> New York, USA</p>
                                </motion.div>
                                <motion.div
                                    className=" w-full px-6 rounded-b-4xl flex flex-col items-center text-center "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={1}>
                                    <p className="text-xs  text-black mb-4">Welcome to my digital business card. <br /> Tap to connect with me.</p>
                                </motion.div>
                                {/* Buttons */}
                                <div className="space-y-1  w-full mb-2 group-hover:px-2 transition-all duration-300 ease-in-out px-6 ">
                                    <motion.div
                                        className="relative w-full "
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={2}>
                                        <button className="w-full hover:cursor-pointer shadow-lg text-gray-100  transition-all duration-300 bg-[#ea4335]  py-0.5 rounded-full font-medium">
                                            <div className="flex items-center px-4 pl-1 gap-2">
                                                <div className="p-1 rounded-full bg-white"><img src="/woilink/react/icons/signup/instagram.svg" className="object-contain w-6 bg-transparent" alt="" /></div>
                                                <div className="text-xs text-start">
                                                    <div className="text-sm">Follow on Instagram</div>
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                    <motion.div
                                        className="relative w-full "
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={3}>
                                        <button className="w-full hover:cursor-pointer shadow-lg  transition-all text-gray-100 duration-300 bg-green-600  py-0.5 rounded-full font-medium">
                                            <div className="flex items-center px-4 pl-1 gap-2">
                                            <div className="p-1 rounded-full bg-white"><img src="/woilink/react/icons/signup/facebook.svg" className="object-contain w-6 bg-transparent" alt="" /></div>
                                                <div className="text-xs text-start">
                                                    <div className="text-sm">Follow on Facebook</div>
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                    <motion.div
                                        className="relative w-full "
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={4}>
                                        <button className="w-full hover:cursor-pointer shadow-lg   transition-all duration-300 bg-blue-700 text-gray-100 py-0.5 rounded-full font-medium">
                                            <div className="flex items-center px-4 pl-1 gap-2">
                                            <div className="p-1 rounded-full bg-white"><img src="/woilink/react/icons/signup/website.svg" className="object-contain w-6 bg-transparent" alt="" /></div>
                                                <div className="text-xs text-start">
                                                    <div className="text-sm">Visit our Website</div>
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                    {/* <motion.div
                                        className="relative w-full "
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={5}>
                                        <button className="w-full hover:cursor-pointer shadow-lg py-3  transition-all duration-300 ease-in-out rounded-full bg-black text-white">Save Contact</button>
                                    </motion.div> */}
                                </div>
                                <motion.div
                                    className=" w-full px-6  relative flex flex-col items-center text-center "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={6}>
                                    <div className="my-2 ">
                                        <div className="text-white bg-white rounded-2xl p-4 shadow-xl">
                                            <img src="/woilink/react/logins/qrCode.png" className="object-contain h-32" alt="" />
                                        </div>
                                        
                                    </div>
                                    <div className=" absolute bottom-9 w-full px-6">
                                    <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={12}>
                                    <button className="w-full hover:cursor-pointer shadow-lg py-2.5  transition-all duration-300 ease-in-out rounded-full bg-green-900 text-white woi_digi_3d_shadow group-hover:bg-[#7ba521] group-hover:text-black">   Send </button>
                                   </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Icons */}
                            {/* <div className="flex justify-center px-6 gap-2 mt-6">
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={6}>
                                    <div className="w-11 h-11 mt-4 rounded-full p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/booking.svg" className=" rounded-full w-full h-full p-1 bg-white " alt="" />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={7}>
                                    <div className="w-11 h-11 mt-1 rounded-full p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/qr_code.svg" className=" rounded-full w-full h-full p-1 bg-white" alt="" />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={8}>
                                    <div className="w-11 h-11 mt-3 rounded-full p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/crm.svg" className=" rounded-full w-full h-full p-1 bg-white" alt="" />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={9}>
                                    <div className="w-11 h-11 rounded-full p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/apple_wallet.svg" className=" rounded-full w-full h-full p-1 bg-white" alt="" />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className=" "
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={10}>
                                    <div className="w-11 h-11 mt-5 rounded-full p-0.5 shadow-2xl group-hover:w-12 group-hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center text-black">
                                        <img src="/woilink/react/icons/gmail.svg" className=" rounded-full w-full h-full p-1 bg-white" alt="" />
                                    </div>
                                </motion.div>

                            </div> */}
                        </div>
                    </div>

                    {/* Absolute Floating Cards */}
                    <motion.div
                        className="absolute -left-10 top-10   rotate-6 "
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        
                    >
                        <div className="flex flex-wrap justify-center bg-gray-100 shadow-lg rounded-lg  items-center">
                            <img src="/woilink/react/bicon/b2.svg" className="w-12 p-2 object-center group-hover:w-[55px] transition-all ease-in-out duration-300" alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute -left-16 top-40  -rotate-12   "
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                    >
                        <div className="flex flex-wrap justify-center bg-fuchsia-100 shadow-lg rounded-lg  items-center">
                            <img src="/woilink/react/bicon/b9.svg" className="w-12 p-2 object-center group-hover:w-[55px] transition-all ease-in-out duration-300" alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute -left-20 top-72  -rotate-20  "
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    >
                        <div className="flex flex-wrap justify-center bg-green-100 shadow-lg rounded-lg  items-center">
                            <img src="/woilink/react/bicon/b4.svg" className="w-12 p-2 object-center group-hover:w-[55px] transition-all ease-in-out duration-300" alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute -left-14 top-[26rem]  rotate-20  "
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                    >
                        <div className="flex flex-wrap justify-center  bg-cyan-100 shadow-lg rounded-lg  items-center">
                            <img src="/woilink/react/bicon/b8.svg" className="w-12 group-hover:w-[55px] transition-all ease-in-out duration-300 p-2 object-center" alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute -left-20 bottom-20  rotate-6  "
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                    >
                        <div className="flex flex-wrap justify-center bg-yellow-100 shadow-lg rounded-lg  items-center">
                            <img src="/woilink/react/bicon/b1.svg" className="w-12 p-2 object-center group-hover:w-[55px] transition-all ease-in-out duration-300" alt="" />
                        </div>
                    </motion.div>
                    

                    <motion.div
                        className="absolute -right-48 -top-0 rotate-6 w-[260px] rounded-3xl text-black p-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                    >
                        <img
                            src="/woilink/react/logo/woi_logo.png"
                            alt="product"
                            className="rounded-xl w-fit px-6 py-2 h-9 bg-gray-100 shadow-xl object-contain"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
