import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'
import { BsFillCameraVideoFill, BsGraphUpArrow, BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa'
import { FaChartSimple } from 'react-icons/fa6'
import { FiEdit } from 'react-icons/fi'
import { IoMdAdd, IoMdRibbon } from 'react-icons/io'
import { MdDoneAll, MdEmail, MdInsertLink, MdManageAccounts, MdPayment, MdQrCode, MdStore, MdWallpaper } from 'react-icons/md'
import { RiSettings3Line, RiTeamFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const UserDetailSection = () => {
  const [createDropdown, setCreateDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdownSettings = () => {
    setCreateDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCreateDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className=' inner_side_modal_open'>
      <div className="grid xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-2">
        <div className="woi_dash_card flex flex-col gap-2 ">
          <div className="woi_svg_round"><MdManageAccounts className='text-3xl  bg-black text-white' /></div>
          <div className="font-medium">Manage Users</div>
          <div className="flex md:flex-row flex-col justify-between items-center mt-1">
            <div className="font-medium text-green-700 flex gap-1 items-center"> Active - 20
              <div className="p-1 bg-green-600 h-1 rounded-full"></div>
            </div>
            <div className="font-medium text-red-700 flex gap-1 items-center"> Inactive - 10
              <div className="p-1 bg-red-600 h-1 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="woi_dash_card flex flex-col gap-2 ">
          <div className="woi_svg_round"><FaChartSimple className='text-3xl bg-black text-white' /></div>
          <div className="font-medium flex justify-between">
            <div className="">Subscriptions</div>
            <div className="">Credits</div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="font-medium text-sm flex gap-1 items-center"> 36
            </div>
            <div className="font-medium text-sm flex gap-1 items-center"> 7
            </div>
          </div>
        </div>
        <div className="woi_dash_card flex flex-col gap-2 ">
          <div className="flex justify-between items-center">
            <div className="woi_svg_round flex"><RiTeamFill className='text-3xl  bg-black text-white' /></div>
            <div className="dropdown dropdown-end">  <IoMdAdd tabIndex={0} className='text-lg hover:cursor-pointer' />
              {/* <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 px-0 shadow-sm">
                <li className='text-xs'><a className='flex items-center py-2 px-4 gap-2'><FiEdit className='text-sm' /> Edit</a></li>
                <li className='text-xs'><a className='flex items-center py-2 px-4 gap-2'><BsGraphUpArrow className='text-sm' /> Statics</a></li>
              </ul> */}
            </div>
          </div>
          <div className="font-medium flex justify-between">
            <div className=""> Teams</div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="font-medium text-sm flex gap-1 items-center"> 36
            </div>
          </div>
        </div>
        <div className="woi_dash_card flex flex-col gap-2 ">
          <div className="woi_svg_round"><MdDoneAll className='text-3xl bg-black text-white' /></div>
          <div className="flex flex-col">
            <div className="font-medium  flex-col md:flex md:flex-row justify-between items-center ">
              <div className="text-nowrap w-full  flex md:justify-between justify-center gap-3 items-center">Support Tickets <div className="font-medium text-sm md:hidden flex gap-1 items-center"> 29
              </div></div>
              <div className="text-red-600 text-nowrap w-full md:justify-end flex justify-center gap-3 items-center">Open Tickets
              <div className="font-medium text-sm flex gap-1 md:hidden items-center text-red-600"> 7
              </div>
              </div>
            </div>
            <div className="md:flex justify-between items-center mt-1 hidden">
              <div className="font-medium text-sm flex gap-1 items-center"> 29
              </div>
              <div className="font-medium text-sm flex gap-1 items-center text-red-600"> 7
              </div>
            </div>
          </div>
        </div>

        <div className="woi_dash_card_create relative flex lg:h-full xl:col-span-1 justify-center items-center col-span-full">
          <button
            onClick={toggleDropdownSettings}
            className='btn font-medium h-[30px] p-5 rounded-full bg-black text-white  text-sm border border-[#e5e5e5] shadow-none'
          >
            Create {createDropdown ? <AiFillCaretDown className='ml-2 ' /> : <AiFillCaretRight className='ml-2' />}
          </button>
          {createDropdown && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className='absolute 2xl:top-20 xl:top-20 lg:top-16 md:top-16 mt-2 w-60 bg-white text-black shadow-lg rounded-lg overflow-hidden z-10'
            >
              <ul className='py-2 '>
                <li className='text-nowrap'><a className='flex items-center gap-3 py-3 px-5 text-xs' href='/woilink/user/digital-card'><FaRegAddressCard className='text-xl' /> Digital Business Card</a></li>
                <li className='text-nowrap'><a className='flex items-center gap-3 py-3 px-5 text-xs' href='/woilink/user/link-in-bio'><MdInsertLink className='text-xl' /> Link in Bio</a></li>
                <li className='text-nowrap'><a className='flex items-center gap-3 py-3 px-5 text-xs' href='/woilink/user/virtual-store'><MdStore className='text-xl' /> Virtual Store</a></li>
                <li className='text-nowrap'><a className='flex items-center gap-3 py-3 px-5 text-xs' href='/woilink/user/qr-code'><MdQrCode className='text-xl' /> QR Code</a></li>
                <li className='text-nowrap'><a className='flex items-center gap-3 py-3 px-5 text-xs' href='/woilink/user/email-signature'><MdEmail className='text-xl' /> Email Signature</a></li>
                <li className='text-nowrap'><a className='flex items-center gap-3 py-3 px-5 text-xs' href='/woilink/user/virtual-backgrounds'><BsFillCameraVideoFill className='text-xl' /> Virtual Backgrounds</a></li>
                <li className='text-nowrap'><a className='flex items-center gap-3 py-3 px-5 text-xs' href='/woilink/user/wallpaper'><MdWallpaper className='text-xl' /> Wallpaper</a></li>
                <li className='text-nowrap'><a className='flex items-center gap-3 py-3 px-5 text-xs' href='/woilink/user/event-badge'><IoMdRibbon className='text-lg' /> Event Badge</a></li>
              </ul>
            </motion.div>
          )}
        </div>

        
      </div>
    </div>
  )
}

export default UserDetailSection
