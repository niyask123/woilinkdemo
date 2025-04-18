



// ForgotPassword.jsx
import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ForgotUsername = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="flex flex-row transition-opacity duration-500 opacity-100">
          <div className="mx-5 flex flex-grow flex-col text-pretty">
            <div className="md:mx-5 flex flex-grow flex-col">
              <div className="flex w-full justify-end">
             <Link to={'/u-l/login'}>   <button className="mt-4 px-3 text-sm font-semibold  text-concrete text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200"><IoArrowBack className='text-lg' /></button></Link>
              </div>
              <div className="pt-5 lg:pt-[72px] md:px-6">
                <div className="mx-auto w-full max-w-[512px] flex flex-col gap-6">
                  <div className=" font-bold leading-heading tracking-[-1px] text-3xl lg:text-5xl lg:tracking-[-2px]">
                  Forgot Username
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className=" font-medium text-gray-500 text-sm">
                    Please enter the email address you used to create your account. An email will be sent to you containing your usernames. Once received return to the Sign in page to continue.
                    </div>
                  </div>
                  <form className="flex flex-col gap-4 w-full">
                    <div className="relative w-full">
                      <input
                        id="fp_password_u"
                        name="fp_password_u"
                        type="email"
                        placeholder=" "
                        className="peer border-gray-300 w-full h-12 px-3 py-3 rounded-lg bg-gray-100 focus:bg-white focus:outline-none border  hover:border-black hover:border-2"
                      />
                      <label htmlFor="fp_password_u" className="woi_label_absolute_01">
                        Email
                      </label>
                    </div>
                    <button className="text-white py-3 rounded-full transition-all bg-blue-700 hover:cursor-pointer font-medium hover:bg-blue-800">Send Reset Link</button>
                    <div className="w-full justify-center items-center flex">
                    <Link to={'/u-l/login'}> <button type="button" className="text-gray-600 font-medium text-sm hover:cursor-pointer mt-2 flex items-center gap-1 hover:bg-gray-200 p-2 rounded-full px-4 transition-all duration-300 ease-in-out hover:text-blue-600 py-3"><HiArrowUpRight className='size-3.5' /> Back to Login</button></Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col hidden min-[1050px]:block">
            <img src='/woilink/react/logins/fb_1.png' className='h-[100vh] w-full' alt="Business Illustration" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotUsername;


