import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function Store3D() {
    const simpleVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    };
    const products = [
        { label: "Lotions", img: "lotions.jpg", price: "$20" },
        { label: "Watches", img: "watches.jpg", price: "$120" },
        { label: "Dress", img: "dress.jpg", price: "$60" },
        { label: "Vegitables", img: "veg.jpg", price: "$80" },
        { label: "Stationery", img: "stationery.jpg", price: "$40" },
        { label: "Computers", img: "computer.jpg", price: "$35" },
        // Add more if needed...
    ];

    const [currentSet, setCurrentSet] = useState(0);
    const itemsPerSet = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prevSet) => (prevSet + 1) % Math.ceil(products.length / itemsPerSet));
        }, 3000);

        return () => clearInterval(interval);
    }, [products.length]);

    const visibleItems = products.slice(
        currentSet * itemsPerSet,
        currentSet * itemsPerSet + itemsPerSet
    );
    const images = [
        { src: "/woilink/react/logo/shoe_one.png", price: "$75" },
        { src: "/woilink/react/logo/shoe_2.png", price: "$80" },
        { src: "/woilink/react/logo/shoe_3.png", price: "$60" },
        { src: "/woilink/react/logo/shoe_4.png", price: "$120" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setFade(true);
            }, 300);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

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
                ease: "easeOut",
            },
        }),
    };

    return (
        <motion.div
            whileHover={{ scale: 1.0 }}
            transition={{ type: "spring", stiffness: 100, damping: 5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="min-h-screen w-full bg-amber-400 group flex items-center justify-center p-8"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformPerspective: 1000 }}
                whileHover={{ scale: 1.0 }}
                transition={{ type: "spring", stiffness: 100, damping: 5 }}
                className="relative will-change-transform"
            >
                <div className="relative">
                    {/* Card Body */}
                    <div className=" w-[300px] h-[670px] rounded-3xl bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-xl flex flex-col justify-between">
                        <div className="flex flex-col items-center text-center px-6">
                            <motion.div
                                className="flex flex-col items-center"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                            >
                                <div className="h-28 flex justify-center items-end">
                                    <img
                                        src="/woilink/react/icons/signup/demo_logo.svg"
                                        className="w-20 bg-indigo-100 rounded-full p-3"
                                        alt="Logo"
                                    />
                                </div>
                                <h2 className="mt-2 text-lg font-medium">Store.com</h2>
                                <p className="text-xs mb-4">Your Store</p>
                            </motion.div>

                            <motion.div
                                className="w-full"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                            >
                                <div className="flex w-full py-1 px-2 bg-white rounded-full justify-between">
                                    <button className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-purple-900 rounded-full">
                                        Shop
                                    </button>
                                    <button className="w-full py-2 text-black bg-white rounded-full">
                                        Link
                                    </button>
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                            >
                                <div className="grid grid-cols-3 gap-3 mt-4">
                                    {visibleItems.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            variants={simpleVariant}
                                            initial="hidden"
                                            animate="visible"
                                            className="bg-white p-2 flex flex-col items-center justify-center rounded-lg"
                                        >
                                            <img
                                                src={`/woilink/react/logo/${item.img}`}
                                                alt={item.label}
                                                className="h-20 w-full object-cover rounded-lg"
                                            />
                                            <div className="text-black text-xxs mt-1">{item.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                            >
                                <div className="my-3">
                                    <div>New Products</div>
                                    <div className="text-xs">12 products</div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                            >
                                <div className="w-full">
                                    <div className="bg-white rounded-2xl py-3 px-6 flex flex-col gap-3">
                                        <div className="flex gap-2">
                                            <motion.div
                                                className="w-full"
                                                initial={{ opacity: 0, y: 40 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <img src="/woilink/react/logo/t_white.jpg" alt="White Tee" />
                                                    <div className="text-black text-xs">$15</div>
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                className="w-full"
                                                initial={{ opacity: 0, y: 40 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <img src="/woilink/react/logo/t_black.jpg" alt="Black Tee" />
                                                    <div className="text-black text-xs">$25</div>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            className="w-full"
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
                                        >
                                            <button className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-purple-900 rounded-full">
                                                Online Store
                                            </button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Floating Book Session Card */}
                    <motion.div
                        className="absolute -left-48 group-hover:px-1  -top-5 w-[220px] bg-white/40 text-black p-4 rounded-3xl shadow-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    >
                        <div className="flex flex-col gap-3 text-xs">
                            <div className="text-base font-medium text-center">Book a session</div>
                            {[
                                { label: "Basic", price: "$50" },
                                { label: "Standard", price: "$80" },
                                { label: "Premium", price: "$200" },
                            ].map((plan) => (
                                <div
                                    key={plan.label}
                                    className="flex justify-between border-b px-3 py-1 border-gray-500"
                                >
                                    <div>{plan.label}</div>
                                    <div>{plan.price}</div>
                                </div>
                            ))}
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            >
                                <button className="p-2 bg-black text-white w-full rounded-full ">Continue</button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Floating Shoe Carousel */}
                        <motion.div
                            className="absolute -left-28 bottom-42 group-hover:w-[160px] transition-all duration-300 ease-in-out w-[150px] bg-blue-400/80 text-white p-4 rounded-3xl shadow-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    key={images[currentIndex].src}
                                    src={images[currentIndex].src}
                                    alt="Shoe"
                                    className={`w-32 h-20 group-hover:w-36 object-contain transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                                <div
                                    className={`text-sm mt-2 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    {images[currentIndex].price}
                                </div>
                            </div>
                        </motion.div>
                    <motion.div
                        className="absolute rotate-20 -right-20 top-0  bg-white/80 text-white p-4 w-fit rounded-3xl shadow-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    >
                        <img src="/woilink/react/logo/woi_logo.png" className="object-contain h-5 w-auto" alt="" />
                    </motion.div>
                    <div className="flex flex-col gap-4 absolute  -right-16 top-40" >
                        <motion.div
                            className="  bg-white/40 text-white p-2 w-fit rounded-xl shadow-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        >

                            <div className="flex flex-col gap-3">
                                <div className="">
                                    <img src="/woilink/react/icons/signup/instagram.svg" className="w-full h-8" alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="  bg-white/40 text-white p-2 w-fit rounded-xl shadow-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                        >

                            <div className="flex flex-col gap-3">
                                <div className="">
                                    <img src="/woilink/react/icons/signup/snapchat.svg" className="w-full h-8" alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="  bg-white/40 text-white p-2 w-fit rounded-xl shadow-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                        >

                            <div className="flex flex-col gap-3">
                                <div className="">
                                    <img src="/woilink/react/icons/signup/tiktok.svg" className="w-full h-8" alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="  bg-white/40 text-white p-2 w-fit rounded-xl shadow-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                        >

                            <div className="flex flex-col gap-3">
                                <div className="">
                                    <img src="/woilink/react/icons/signup/link.svg" className="w-full h-8" alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="  bg-white/40 text-white p-2 w-fit rounded-xl shadow-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                        >

                            <div className="flex flex-col gap-3">
                                <div className="">
                                    <img src="/woilink/react/icons/signup/pinterest.svg" className="w-full h-8" alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="  bg-white/40 text-white p-2 w-fit rounded-xl shadow-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                        >

                            <div className="flex flex-col gap-3">
                                <div className="">
                                    <img src="/woilink/react/icons/signup/threads.svg" className="w-full h-8" alt="" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
