import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaAmazon, FaInstagram, FaPlus, FaShareAlt, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { FaPenFancy } from 'react-icons/fa6'
import { GoArchive } from 'react-icons/go'
import { IoMdAdd, IoMdSettings } from 'react-icons/io'
import { IoColorPaletteSharp } from 'react-icons/io5'
import { MdOutlineCollections } from 'react-icons/md'
import { RiLink } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import SortableDragArea from '../../components/admin/Demo'
import { PiDotsSixVertical } from 'react-icons/pi'

const MyWoilink = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    const url = 'https://woilink.ee/niyas.k';
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Copy failed: ', err);
    });
  };


  return (
    <>
      <div className="flex mx-auto flex-wrap bg-[#f3f3f1] 2xl:ml-[226px] pt-[3rem] 2xl:mr-[570px]">
        <div className="fixed top-[calc(var(3rem))] right-0 z-20 md:w-[calc(100%-14rem-1px)] bg-[#212529] w-full">
          <div className=" z-20 shell bg-[#f3f3f1] rounded-tr-2xl border-l border-gray-300 border-b">
            <header className="grid grid-cols-3  items-center md:bg-marble  px-3 max-md:border-none max-md:bg-transparent">
              <div className="text-xl font-bold">My Woilink</div>
              <div className="w-full  bg-[#f3f3f1] overflow-auto">
                <div className="m-2 bg-blue-100 rounded-3xl">
                  <div className="px-4 items-center py-1 flex w-full justify-between text-sm">
                    <div className="flex gap-1 items-center justify-center">
                      <div>🔥</div>
                      <div className="font-medium text-sm">Your Woilink is live:</div>
                      <Link className="underline" to="">woilink.ee/niyas.k</Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopy}
                        className={`p-2 text-xs bg-white  hover:shadow-xs rounded-full px-4 font-medium py-2 hover:cursor-pointer hover:bg-gray-100 ${copySuccess ? 'text-green-700' : 'text-black'
                          }`}
                      >
                        {copySuccess ? 'Copied!' : 'Copy your Woilink URL'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end flex justify-end gap-3 text-sm text-gray-600">
                <button className="woi_admin_l_nav_btn_01">
                  <IoColorPaletteSharp className="text-lg stroke-0 w-4 font-medium" /> Theme
                </button>
                <button className="woi_admin_l_nav_btn_01">
                  <FaShareAlt className="text-sm stroke-0 w-4 font-medium" /> Share
                </button>
                <button className="woi_admin_l_nav_btn_01">
                  <IoMdSettings className="text-lg stroke-0 w-4 font-medium" />
                </button>
              </div>
            </header>
          </div>
        </div>
        <div className="w-full mt-[6rem]  bg-[#f3f3f1] overflow-auto">
          <div className="max-w-[640px] mx-auto w-full">
            <div className="min-h-[448px] py-6 md:py-10">
              <div className="max-w-[640px] mx-auto my-0 gap-3 flex flex-col">
                <div className="w-full p-3 rounded-2xl bg-white flex flex-col gap-2 ">
                  <div className="flex justify-between px-2 ">
                    <div className="flex justify-center items-center">
                      <div className=""><img src="/public/woilink/react/avatar/11.jpg" className=' object-cover mr-4 w-14 h-14 rounded-full' alt="" /></div>
                      <div className="flex flex-col text-sm">
                        <div className="font-medium">Niyas</div>
                        <div className="text-xs text-gray-600 font-medium">Demo</div>
                        <div className="flex text-xl mt-1 gap-3 items-center">
                          <div className="rounded-full border p-1 border-gray-400">
                            <FaInstagram />
                          </div>
                          <div className="rounded-full border p-1 border-gray-400">
                            <FaTiktok />
                          </div>
                          <div className="rounded-full border p-1 border-gray-400">
                            <FaWhatsapp />
                          </div>
                          <div className="rounded-full border p-1 border-gray-400">
                            <FaAmazon />
                          </div>
                          <button className="p-2 bg-gray-200 rounded-full">
                            <FaPlus className='text-xs text-gray-500' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button className="p-2 rounded-full bg-gray-300"><BsThreeDots /></button>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs font-semibold px-2 gap-3 mt-3">
                    <div className="w-full ">
                      <button className="woi_admin_inner_btn_01 woi_admin_inner_btn_01_outline "><MdOutlineCollections className='stroke-0 text-lg' /> Add</button>
                    </div>
                    <div className="w-full">
                      <button className="woi_admin_inner_btn_01 woi_admin_inner_btn_01_primary"> <IoMdAdd className='stroke-0 text-lg' /> Add Collection</button>
                    </div>
                    <div className="w-full">
                      <button className="woi_admin_inner_btn_01 woi_admin_inner_btn_01_outline "><GoArchive className='stroke-0 text-lg' /> View archive</button>
                    </div>
                  </div>
                </div>
                <div className="w-full p-3 rounded-2xl bg-white flex flex-col gap-2 ">
                  <div className="flex  px-2 items-center">
                    <div className="mr-1"><PiDotsSixVertical className='text-xl stroke-2' /></div>

                    <div className="flex justify-between w-full text-sm">
                      <div className="flex flex-col ">
                        <div className="">Whatsapp</div>
                        <div className="">https://wa.me/8075801527</div>
                        <div className="">Edit</div>
                      </div>
                      <div className="">Delete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyWoilink