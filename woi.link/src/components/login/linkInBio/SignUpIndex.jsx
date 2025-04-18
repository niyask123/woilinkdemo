import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  passwordSchema,
  signupnSchema,
} from "./../../../utils/vlidationSchemas";
const SignUpIndex = ({ onSignUpSuccess }) => {
  // const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(isEmailValid ? passwordSchema : signupnSchema),
    mode: "onChange",
  });

  const emailValue = watch("email");

  useEffect(() => {
    if (emailValue) {
      trigger("email").then((valid) => {
        setIsEmailValid(valid);
      });
    } else {
      setIsEmailValid(false);
    }
  }, [emailValue, trigger]);

  const onSubmit = (data) => {
    console.log("Form submitted: ", data);
    onSignUpSuccess(); // Show ChooseUsername component
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
    <div className="relative flex flex-col w-full px-6 md:px-16 h-screen md:min-h-screen pt-24 lg:w-[calc(100vw-52%)]">
      <div className=" w-full h-full md:max-w-[480px] mx-auto pb-12">
        <div className="md:container mx-auto h-full">
          <div className="md:container mx-auto h-full flex flex-col">
            <div className="md:container mx-auto h-full flex flex-col">
              <motion.div
                className="relative w-full"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <div className="mb-2xl flex flex-col gap-0">
                  <div className="woi_log_main_head">
                    Join Woilink
                  </div>
                  <div className="md:text-md ">
                    <p className="md:text-base text-sm md:mt-2 font-medium text-gray-500 text-md text-center">
                      Sign up for free!
                    </p>
                  </div>
                  <div className="mt-5 md:mt-10">
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* Email Input */}
                      <div className="relative w-full">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          {...register("email")}
                          className={`woi_log_input_01 peer ${
                            errors.email
                              ? "border-red-500 border-2"
                              : isEmailValid
                              ? "border-green-500 border-2"
                              : "border-gray-300 hover:border-black hover:border-2"
                          }`}
                          placeholder=" "
                        />
                        <div className="absolute top-3 right-3 bg-transparent pl-2 peer-focus:bg-transparent">
                          {errors.email ? (
                            <FiAlertCircle className="text-red-500" size={20} />
                          ) : (
                            isEmailValid && (
                              <FiCheckCircle
                                className="text-green-500"
                                size={20}
                              />
                            )
                          )}
                        </div>
                        <label
                          htmlFor="email"
                          className="woi_label_absolute_01"
                        >
                          Email
                        </label>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Password Input (only if email is valid) */}
                      {isEmailValid && (
                        <div className="relative w-full">
                          <input
                            id="password"
                            type="password"
                            {...register("password")}
                            className={`border w-full rounded-lg px-3 py-2 h-12 focus:outline-none peer bg-gray-100 focus:bg-white ${
                              errors.password
                                ? "border-red-500 border-2"
                                : !errors.password
                                ? "border-green-500 border-2"
                                : "border-gray-300 hover:border-black hover:border-2"
                            }`}
                            placeholder=" "
                          />
                          <div className="absolute top-3 right-3 bg-gray-100 peer-focus:bg-white">
                            {errors.password ? (
                              <FiAlertCircle
                                className="text-red-500"
                                size={20}
                              />
                            ) : (
                              <FiCheckCircle
                                className="text-green-500"
                                size={20}
                              />
                            )}
                          </div>
                          <label
                            htmlFor="password"
                            className="woi_label_absolute_01"
                          >
                            Password
                          </label>
                          {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                      )}

                      <button
                        type="submit"
                        className={`woi_log_btn_01 ${
                          isValid ? "woi_log_btn_02" : "woi_log_btn_03"
                        }`}
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                  <div className="text-center mt-4 md:mt-8 text-xs md:text-sm font-medium text-gray-600">
                    By clicking{" "}
                    <span className="font-semibold">Create account</span>, you
                    agree to Woilink{" "}
                    <span className="underline">privacy notice</span>,{" "}
                    <span className="underline">T&Cs</span> and to receive
                    offers, news and updates.
                  </div>
                  <div className="text-center text-sm my-2 text-gray-700 font-medium">
                    OR
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="woi_login_connect">
                      <FcGoogle className="text-2xl" />
                      <div className="font-semibold text-gray-700">
                        Sign up with Google
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="woi_login_connect">
                      <BsApple className="text-2xl" />
                      <div className="font-semibold text-gray-700">
                        Sign up with Apple
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center pt-xl md:space-x-1"></div>
                  <p className="text-concrete items-center justify-center text-xs md:text-sm font-medium text-gray-700 flex gap-2 mt-3">
                    Already have an account?
                    <Link
                      to={"/u-l/login"}
                      className="text-blue-500  font-semibold hover:text-blue-700 underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpIndex;
