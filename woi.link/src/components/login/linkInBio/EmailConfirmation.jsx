import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { emailVerificationSchema } from "../../../utils/vlidationSchemas";
import { correctCode } from "../../../data/credential";
import { motion } from "framer-motion";

const EmailConfirmation = () => {
  const navigate = useNavigate();
  const [codeStatus, setCodeStatus] = useState(null); // null | 'correct' | 'incorrect'

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailVerificationSchema),
  });

  const watchCode = watch("email_verification_code", "");

  useEffect(() => {
    if (watchCode.length === 6) {
      if (watchCode === correctCode) {
        clearErrors("email_verification_code");
        setCodeStatus("correct");
      } else {
        setError("email_verification_code", {
          type: "manual",
          message: "Code is incorrect",
        });
        setCodeStatus("incorrect");
      }
    } else {
      clearErrors("email_verification_code");
      setCodeStatus(null);
    }
  }, [watchCode, setError, clearErrors]);

  const onSubmit = (data) => {
    if (data.email_verification_code === correctCode) {
      navigate("/u-r/select-categories");
    } else {
      setError("email_verification_code", {
        type: "manual",
        message: "Code is incorrect",
      });
      setCodeStatus("incorrect");
    }
  };

  const getBorderColor = () => {
    if (codeStatus === "incorrect") return "border-red-500";
    if (codeStatus === "correct") return "border-green-500";
    return "border-gray-200";
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
        <div className="md:container mx-auto h-full">
          <motion.div
            className="relative w-full"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="md:max-w-[480px] mx-auto">
              <h2 className="woi_log_main_head !text-start mt-5 mb-2">
                Enter your code
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                We sent a temporary 6-digit code to{" "}
                <span>neenu1@worldemart.com</span>
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full gap-4 mt-6 sm:mt-10"
              >
                <div className="relative w-full flex gap-3">
                  <input
                    id="email_verification_code"
                    type="text"
                    maxLength={6}
                    placeholder=" "
                    {...register("email_verification_code")}
                    className={`border-2 w-full rounded-lg px-3 py-2 h-12 focus:outline-none peer bg-gray-100 focus:bg-white transition-all duration-300 ease-in-out ${getBorderColor()}`}
                  />

                  <label
                    htmlFor="email_verification_code"
                    className="woi_label_absolute_01"
                  >
                    Enter code
                  </label>
                </div>
                <div className="flex flex-col gap-0">
                  <button
                    type="submit"
                    className={`woi_log_btn_01 ${
                      codeStatus === "correct"
                        ? "woi_log_btn_02"
                        : "woi_log_btn_03"
                    }`}
                  >
                    Continue
                  </button>
                  {watchCode.length === 6 && (
                    <>
                      {codeStatus === "incorrect" && (
                        <p className="text-red-500 text-xs mt-0">
                          Wrong email or verification code.
                        </p>
                      )}
                      {/* {codeStatus === 'correct' && (
                                        <p className="text-green-600 text-sm -mt-6">Email verification code is correct</p>
                                    )} */}
                    </>
                  )}
                </div>
                <button
                  type="button"
                  className="btn bg-transparent py-6 border-none text-gray-800 shadow-none hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-full"
                >
                  Resend Email
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
