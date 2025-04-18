import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../../utils/vlidationSchemas';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { motion } from 'framer-motion'


const LoginPage = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'usernameOrEmail') {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      const isUsername = value.length > 2;
      setShowPassword(isEmail || isUsername);
    }
  };

  const validateForm = async () => {
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const formErrors = {};
      err.inner.forEach((e) => {
        formErrors[e.path] = e.message;
      });
      setErrors(formErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = await validateForm();
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    alert('Login success!');
    setIsSubmitting(false);
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
    <div className="flex font-inter lg:flex-row relative">
      {/* Logo */}
      <div className="absolute top-5 left-5 lg:top-2xl lg:left-2xl z-50">
        <Link to="/">
          <img src="/woilink/react/logo/woi_logo.png" alt="Logo" className="w-32 object-contain" />
        </Link>
      </div>

      {/* Form Section */}
      <div className="relative flex flex-col w-full px-6 md:px-16 min-h-screen pt-24 lg:w-[calc(100vw-52%)]">
        <div className="w-full md:max-w-[480px] mx-auto pb-12">
          <motion.div
                                  className="relative w-full"
                                  variants={fadeInUp}
                                  initial="hidden"
                                  animate="visible"
                                  custom={1}>
          <div className="mt-6 flex flex-col gap-3">

            <h1 className="text-black text-3xl font-bold text-center tracking-[-1px] lg:text-5xl lg:tracking-[-2px]">
              Welcome back!
            </h1>
            <p className="text-gray-500 text-sm sm:text-base font-medium text-center">
              Log in to your Woilink
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mt-4">
              {/* Username or Email */}
              <div className="relative w-full">
                <input
                  id="usernameOrEmail"
                  name="usernameOrEmail"
                  type="text"
                  placeholder=" "
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  className={`peer w-full h-12 px-3 py-2 rounded-lg bg-gray-100 focus:bg-white focus:outline-none border ${errors.usernameOrEmail ? 'border-red-500 border-2' : 'border-gray-300 hover:border-black hover:border-2'
                    }`}
                />
                <label htmlFor="usernameOrEmail" className="woi_label_absolute_01">
                  Username or Email
                </label>
                {errors.usernameOrEmail && (
                  <div className="text-sm text-red-500 mt-1">{errors.usernameOrEmail}</div>
                )}
              </div>

              {/* Password */}
              {showPassword && (
                <div className="relative w-full">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder=" "
                    value={formData.password}
                    onChange={handleChange}
                    className={`peer w-full h-12 px-3 py-2 rounded-lg bg-gray-100 focus:bg-white focus:outline-none border ${errors.password ? 'border-red-500 border-2' : 'border-gray-300 hover:border-black hover:border-2'
                      }`}
                  />
                  <label htmlFor="password" className="woi_label_absolute_01">
                    Password
                  </label>
                  {errors.password && (
                    <div className="text-sm text-red-500 mt-1">{errors.password}</div>
                  )}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`woi_log_btn_01 ${isSubmitting ? 'woi_log_btn_03' : 'woi_log_btn_02'
                  }`}
              >
                Login
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-4 flex flex-col gap-6 md:gap-2 text-sm">
              <div className="flex gap-3 justify-center items-center md:flex-row flex-col">
                <Link to="/f-p" className="font-medium hover:cursor-pointer">
                  Forgot Password?
                </Link>
                <div className="hidden md:block">/</div>
                <Link to="/f-u" className="font-medium hover:cursor-pointer">
                  Forgot Username?
                </Link>
              </div>
              <div className="text-concrete justify-center text-sm font-medium text-gray-700 flex gap-2 my-3">
                <span>Don't have an account?</span>
                <Link to="/u-r/digital-card" className="text-blue-500 font-semibold hover:text-blue-700 underline">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="woi_login_connect">
              <FcGoogle className="text-2xl" />
              <div className="font-semibold text-xs md:text-base text-gray-700">Continue with Google</div>
            </div>
            <div className="woi_login_connect">
              <BsApple className="text-2xl" />
              <div className="font-semibold text-xs md:text-base text-gray-700">Continue with Apple</div>
            </div>
            <div className="woi_login_connect">
              <IoMailOutline className="text-2xl" />
              <div className="font-semibold text-xs md:text-base text-gray-700">Continue with one-time code</div>
            </div>
            <div className="woi_login_connect">
              <HiMiniDevicePhoneMobile className="text-2xl" />
              <div className="font-semibold text-xs md:text-base text-gray-700">Continue with phone number</div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>

      {/* Banner */}
      <div
        className="hidden lg:flex lg:w-[calc(100vw-48%)] bg-cover bg-center bg-no-repeat bg-[#225AC0]"
        style={{
          backgroundImage:
            "url('https://assets.production.linktr.ee/auth/2917/media/banner-login-desktop.f355be949b508c58ec2d.webp')",
        }}
      />
    </div>
  );
};

export default LoginPage;
