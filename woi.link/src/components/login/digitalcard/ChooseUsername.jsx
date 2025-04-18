import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { usernameSchema } from "../../../utils/vlidationSchemas";
import { existingUsernames } from "../../../data/credential";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const ChooseUsername = ({ onBack, onContinue }) => {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [isTaken, setIsTaken] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(usernameSchema),
    mode: "onChange",
  });

  const watchedUsername = watch("username");

  // Generate username suggestions
  const generateSuggestions = (username) => {
    const base = username.replace(/[0-9]*$/, "");
    return Array.from(
      { length: 4 },
      () => `${base}${Math.floor(100 + Math.random() * 900)}`
    );
  };

  useEffect(() => {
    if (!watchedUsername || watchedUsername.length < 4) {
      setUsernameAvailable(false);
      setSuggestions([]);
      setIsTaken(false);
      return;
    }

    // Simulate async validation
    const timeout = setTimeout(() => {
      const usernameExists = existingUsernames.includes(
        watchedUsername.toLowerCase()
      );

      if (usernameExists) {
        setIsTaken(true);
        setUsernameAvailable(false);
        setSuggestions(generateSuggestions(watchedUsername));
        setError("username", {
          type: "manual",
          message: "Username is already taken",
        });
      } else {
        setIsTaken(false);
        setUsernameAvailable(true);
        clearErrors("username");
        setSuggestions([]);
      }
    }, 300); // Debounce effect to optimize re-renders

    return () => clearTimeout(timeout);
  }, [watchedUsername, setError, clearErrors]);

  const handleSuggestionClick = (suggestedUsername) => {
    setValue("username", suggestedUsername, { shouldValidate: true });
    setSuggestions([]);
    setUsernameAvailable(true);
    setIsTaken(false);
    clearErrors("username");
  };

  const onSubmit = (data) => {
    console.log("Username selected:", data.username);
    onContinue();
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
    <div className="relative flex flex-col w-full px-6 md:px-16 min-h-screen pt-24 lg:w-[calc(100vw-52%)]">
      <div className="w-full h-full md:max-w-[480px] mx-auto pb-12">
        <motion.div
          className="relative w-full"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <div className="md:container mx-auto flex flex-col justify-center items-start">
            <button
              className="left-5 flex items-center transition-all duration-300 ease-in-out text-xs gap-1 hover:bg-white hover:border hover:border-[#dddddd] hover:cursor-pointer bg-gray-100 border border-gray-100 px-4 py-2 rounded-lg"
              onClick={onBack}
            >
              <IoArrowBack className="text-sm" /> Back
            </button>

            <div className="mt-5 mb-2">
              <h2 className="woi_log_main_head !text-start ">
                Choose Your <br className="hidden md:block" /> Username
              </h2>
            </div>
            <p className="text-start text-sm md:text-base font-normal text-gray-500">
              Try something similar to your social handles for easy recognition.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 mt-6 w-full"
            >
              <div className="relative w-full">
                <input
                  id="username"
                  type="text"
                  placeholder=" "
                  {...register("username")}
                  className={`woi_log_input_01 peer 
                                    ${errors.username || isTaken
                      ? "border-red-500 border-2" // Error state
                      : usernameAvailable
                        ? "border-green-500 border-2 hover:border-green-500 transition-all duration-300 ease-in-out" // Available
                        : "border-gray-300 hover:border-black hover:border-2 transition-all duration-300 ease-in-out" // Default
                    }`}
                />

                <div className="absolute top-3 right-3">
                  {isTaken ? (
                    <FiAlertCircle className="text-red-500" size={20} />
                  ) : usernameAvailable ? (
                    <FiCheckCircle className="text-green-500" size={20} />
                  ) : null}
                </div>

                <label htmlFor="username" className="woi_label_absolute_01">
                  Username
                </label>
                {errors.username && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.username.message}
                  </p>
                )}
                {usernameAvailable && !errors.username && (
                  <p className="text-xs text-green-600 mt-1">
                    Username is available
                  </p>
                )}
              </div>

              {suggestions.length > 0 && (
                <div className=" rounded-md flex items-center gap-3 justify-center md:gap-1 flex-wrap">
                  <p className="text-sm font-medium">Suggestions:</p>

                  {suggestions.map((sug, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(sug)}
                      className="  rounded-full transition-all duration-300 ease-in-out cursor-pointer px-4 border border-gray-400 py-1 hover:rounded-full  hover:bg-gray-100 hover:text-blue-600 text-xs "
                    >
                      {sug}
                    </div>
                  ))}
                </div>
              )}

              <button
                type="submit"
                disabled={!usernameAvailable}
                className={`woi_log_btn_01 ${!usernameAvailable ? "woi_log_btn_03" : "woi_log_btn_02"
                  }`}
              >
                Continue
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseUsername;
