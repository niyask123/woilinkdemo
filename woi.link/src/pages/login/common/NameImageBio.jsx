import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageUploader from "../../../components/common/ImageUploader";
import { BsStars } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const NameImageBio = () => {
  const [bio, setBio] = useState("");
  const [generatedBio, setGeneratedBio] = useState(null); // store both versions
  const [loading, setLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const navigate = useNavigate(); // Add this line

  const sampleBios = [
    {
      withEmoji:
        "🌟 Exploring creativity & sharing positive vibes! ✨ Join the journey! 🚀",
      withoutEmoji:
        "Exploring creativity and sharing positive vibes! Join the journey!",
    },
    {
      withEmoji:
        "🎉 Creative mind sharing inspirations & good vibes! ✨ Join the journey!",
      withoutEmoji:
        "Creative mind sharing inspirations and good vibes. Join the journey.",
    },
    {
      withEmoji:
        "🌟 Exploring life one adventure at a time! Join me on this journey! ✨",
      withoutEmoji:
        "Exploring life one adventure at a time. Join me on this journey.",
    },
    // ...add more pairs
  ];

  const generateBio = () => {
    setLoading(true);
    setTimeout(() => {
      let newBio;
      do {
        newBio = sampleBios[Math.floor(Math.random() * sampleBios.length)];
      } while (
        generatedBio &&
        (newBio.withEmoji === generatedBio.withEmoji ||
          newBio.withoutEmoji === generatedBio.withoutEmoji)
      );

      setGeneratedBio(newBio);
      setBio(newBio.withEmoji); // default to emoji version
      setHasGenerated(true);
      setLoading(false);
    }, 800);
  };

  const restartBio = () => {
    setBio("");
    setHasGenerated(false);
  };
  const [continueLoading, setContinueLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false); // Fix: define pageLoading

  const handleContinue = () => {
    setContinueLoading(true);
    setTimeout(() => {
      navigate("/u-r/create/suggested-links");
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
        ease: "easeOut",
      },
    }),
  };

  if (pageLoading || continueLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
            <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
              <Link
                to={"/u-r/create/add-links"}
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
                  <div className="text-sm font-semibold flex items-end gap-1">
                    Finding your content{" "}
                    <span className="loading loading-dots loading-xs"></span>
                  </div>
                  <img
                    src="/woilink/react/icons/mobile.gif"
                    className="object-contain w-52"
                    alt=""
                  />
                </div>
              </div>
            </main>
          </header>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
          <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
            <Link
              to={"/u-r/create/select-template"}
              className="px-3 text-sm font-semibold text-concrete text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200"
            >
              Back
            </Link>
            <div className="mx-auto w-full max-w-[7.5rem]">
              <div className="flex h-2 gap-2">
                <div className="relative h-full flex-1 bg-gray-300 overflow-hidden rounded-md bg-sand">
                  <div
                    className="h-full origin-left transform transition-all duration-300 bg-black"
                    style={{ transform: "scaleX(1)" }}
                  />
                </div>
              </div>
            </div>
            <button className="px-3 text-sm font-semibold text-concrete text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200">
              Skip
            </button>
          </div>
        </header>
        <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6">
          <div className="relative mx-auto w-full">
            <div className="mx-auto flex h-full max-w-[520px] flex-col transition-opacity duration-500 opacity-100">
              {/* Heading */}
              <div className="flex flex-col gap-2 pb-6 text-center md:gap-4">
                <motion.div
                  className="relative w-full"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  <div className="woi_log_main_head">
                    Add Profile Details
                  </div>
                </motion.div>
                <motion.div
                  className="relative w-full"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  <p className="text-sm md:text-base font-medium text-gray-700 [text-wrap:balance]">
                    We've gotten you started
                  </p>
                </motion.div>
              </div>

              {/* Image Uploader */}
              <motion.div
                className="relative w-full"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <div className="relative">
                  <div className="pb-3 md:pb-8 md:pl-6 sm:text-center">
                    <div className="relative mb-3 text-start block text-sm md:text-base font-semibold">
                      Select a profile image
                    </div>
                    <div className="group relative">
                      <ImageUploader />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Title and Bio */}
              <motion.div
                className="relative w-full"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <div className="md:px-6 sm:text-center">
                  <div className="relative mb-3 block text-start text-sm md:text-base font-semibold">
                    Add title and bio
                  </div>
                  <form>
                    <div className="flex flex-col gap-4">
                      <div className="relative w-full">
                        <input
                          type="text"
                          className="border w-full rounded-lg px-3 py-2 h-12 focus:outline-none peer bg-gray-100 focus:bg-white border-gray-300 hover:border-black hover:border-2"
                          id="profile_title"
                          name="profile_title"
                          placeholder=""
                        />
                        <label
                          htmlFor="profile_title"
                          className="woi_label_absolute_01"
                        >
                          Profile title
                        </label>
                      </div>

                      <div className="relative w-full">
                        <textarea
                          className="border w-full text-sm font-medium rounded-lg px-3 py-2 h-20 focus:outline-none peer bg-gray-100 focus:bg-white border-gray-300 hover:border-black hover:border-2"
                          placeholder=""
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        />
                        <div className="text-xs text-end font-medium text-gray-600">
                          Powered by AI
                        </div>

                        <label
                          htmlFor="profile_bio"
                          className="woi_label_absolute_01"
                        >
                          Bio
                        </label>
                      </div>

                      {/* Buttons */}
                      <div className="flex justify-between items-center flex-row md:flex-nowrap flex-wrap gap-4 md:gap-2">
                        <button
                          type="button"
                          onClick={generateBio}
                          disabled={loading}
                          className={`px-8 btn py-6 rounded-full w-full md:w-fit bg-gray-100 border-gray-100 text-gray-600 hover:shadow-none flex items-center gap-1 transition-all duration-300 ease-in-out ${
                            !loading
                              ? "hover:bg-blue-100 hover:border-blue-100"
                              : "cursor-not-allowed"
                          }`}
                        >
                          <BsStars
                            className={`text-xl ${
                              loading
                                ? "text-green-600 animate-pulse"
                                : "text-indigo-500"
                            }`}
                          />
                          {loading
                            ? "Generating..."
                            : hasGenerated
                            ? "Try Another One"
                            : "Write my bio"}
                        </button>
                        {hasGenerated && (
                          <div className="sm:flex hidden gap-2 items-end">
                            <span className="text-xxs font-medium text-gray-600">
                              {bio === generatedBio.withEmoji
                                ? "with emoji"
                                : "without emoji"}
                            </span>

                            <div
                              className="w-16 h-7 bg-gray-200 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300"
                              onClick={() =>
                                setBio(
                                  bio === generatedBio.withEmoji
                                    ? generatedBio.withoutEmoji
                                    : generatedBio.withEmoji
                                )
                              }
                            >
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                                  bio === generatedBio.withEmoji
                                    ? "translate-x-8"
                                    : "translate-x-0"
                                }`}
                              >
                                {bio === generatedBio.withEmoji ? "😊" : "😭"}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {hasGenerated && (
                        <div className="flex w-full justify-between items-center">
                          <button
                            type="button"
                            onClick={restartBio}
                            disabled={loading}
                            className={`px-8 py-6 w-32 btn rounded-full bg-gray-100 border-gray-100 text-gray-600 hover:shadow-none flex items-center gap-1 transition-all duration-300 ease-in-out ${
                              !loading
                                ? "hover:bg-red-100 hover:border-red-100"
                                : "cursor-not-allowed"
                            }`}
                          >
                            Reset
                          </button>
                          {hasGenerated && (
                            <div className="flex sm:hidden gap-2 items-end">
                              <span className="text-xxs font-medium text-gray-600">
                                {bio === generatedBio.withEmoji
                                  ? "with emoji"
                                  : "without emoji"}
                              </span>

                              <div
                                className="w-16 h-7 bg-gray-200 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300"
                                onClick={() =>
                                  setBio(
                                    bio === generatedBio.withEmoji
                                      ? generatedBio.withoutEmoji
                                      : generatedBio.withEmoji
                                  )
                                }
                              >
                                <div
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                                    bio === generatedBio.withEmoji
                                      ? "translate-x-8"
                                      : "translate-x-0"
                                  }`}
                                >
                                  {bio === generatedBio.withEmoji ? "😊" : "😭"}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        <motion.footer
          className="pointer-events-auto fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg-white py-6 pl-6 pr-6 lg:px-14 lg:py-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <div className="pointer-events-auto relative mx-auto w-full md:max-w-lg">
            <button
              onClick={handleContinue}
              className="btn w-full h-14 rounded-full py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              Continue
            </button>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default NameImageBio;
