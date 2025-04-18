import React from 'react'
import { BsGraphUpArrow, BsThreeDotsVertical } from 'react-icons/bs'
import { CiCirclePlus } from 'react-icons/ci'
import { FaChevronDown, FaCrown, FaPlus } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'

const UserActiveCardsSection = () => {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-1 md:grid-cols-6 md:gap-y-6 2xl:grid-cols-9 p-2 py-4 md:gap-2 gap-6 text-black '>
            <div className="col-span-3 bg-white text-xs font-medium relative text-black woi_bg_grad_sec_3 px-4 py-6 rounded-xl flex flex-col gap-3">
                <div className="absolute -top-2.5 woi_upgrade_btn right-3 px-3 py-1 text-xxs rounded-lg text-white flex items-center gap-1 lg:hidden"> <FaCrown /> Upgrade Now</div>
                <div className="flex justify-between">
                    <div className="w-[600%] truncate text-sm md:text-base font-semibold"> Manage Cards</div>
                    <div className="flex gap-1">
                        <div className="p-0.5 hover:cursor-pointer px-3 rounded-lg bg-black/90 flex items-center gap-1 text-white"> <FaPlus className='text-[9px]' /> New</div>
                        <div className="p-0.5 bg-black/90 px-2 rounded-lg text-white flex justify-center items-center cursor-pointer"><FaChevronDown className='text-xxs' /> </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center w-full">
                        <div className=""><img src="/woilink/react/logo/woi_log_avatar.webp" className='bg-center w-19 h-16 rounded-full object-cover' alt="" /></div>
                        <div className="flex flex-col gap-1 text-xs w-full">
                            <div className="flex justify-between w-full">
                                <div className="text-base w-full font-semibold"> Dr. Olivia Wilson</div>
                                <div className="dropdown dropdown-end">  <BsThreeDotsVertical tabIndex={0} className='text-sm hover:cursor-pointer' />
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 px-0 shadow-sm">
                                        <li className='text-xs'><a className='flex items-center py-2 px-4 gap-2'><FiEdit className='text-sm' /> Edit</a></li>
                                        <li className='text-xs'><a className='flex items-center py-2 px-4 gap-2'><BsGraphUpArrow className='text-sm' /> Statistics</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="">Consultant - Physiotherapy</div>
                            <div className="flex items-center w-full justify-between">
                                <div className="flex gap-3 mt-1 items-center">
                                    <div className="tooltip" data-tip="apple wallet" ><img src="/woilink/react/icons/apple_wallet.svg" alt="" className=' w-5 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="google wallet" ><img src="/woilink/react/icons/google_wallet.svg" alt="" className='w-4 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="copy url" ><img src="/woilink/react/icons/copy.svg" alt="" className='w-5 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="view" ><img src="/woilink/react/icons/view.svg" alt="" className='w-4 hover:cursor-pointer' /></div>
                                </div>
                                <div className="hidden woi_upgrade_btn hover:cursor-pointer right-3 px-3 py-1.5 text-xxs rounded-lg text-white lg:flex items-center gap-1"> <FaCrown /> Upgrade Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 bg-white text-xs font-medium relative text-black woi_bg_grad_sec_3 px-4 py-6 rounded-xl flex flex-col gap-3">
                <div className="absolute -top-2.5 woi_upgrade_btn right-3 px-3 py-1 text-xxs rounded-lg text-white flex items-center gap-1 lg:hidden"> <FaCrown /> Upgrade Now</div>
                <div className="flex justify-between">
                    <div className="w-[600%] truncate text-sm md:text-base font-semibold">Manage Link in bio</div>
                    <div className="flex gap-1">
                        <div className="p-0.5 hover:cursor-pointer px-3 rounded-lg bg-black/90 flex items-center gap-1 text-white"> <FaPlus className='text-[9px]' /> New</div>
                        <div className="p-0.5 bg-black/90 px-2 rounded-lg text-white flex justify-center items-center cursor-pointer"><FaChevronDown className='text-xxs' /> </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center w-full">
                        <div className=""><img src="/woilink/react/avatar/music.jpg" className='bg-center w-19 h-16 rounded-full object-cover' alt="" /></div>
                        <div className="flex flex-col gap-1 text-xs w-full">
                            <div className="flex justify-between w-full">
                                <div className="text-base w-full font-semibold">Elvis Presleyy</div>
                                <div className="dropdown dropdown-end">  <BsThreeDotsVertical tabIndex={0} className='text-sm hover:cursor-pointer' />
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 px-0 shadow-sm">
                                        <li className='text-xs'><a className='flex items-center py-2 px-4 gap-2'><FiEdit className='text-sm' /> Edit</a></li>
                                        <li className='text-xs'><a className='flex items-center py-2 px-4 gap-2'><BsGraphUpArrow className='text-sm' /> Statistics</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">Music Articst </div>
                            <div className="flex items-center w-full justify-between">
                                <div className="flex gap-3 mt-1 items-center">
                                    <div className="tooltip" data-tip="apple wallet" ><img src="/woilink/react/icons/apple_wallet.svg" alt="" className=' w-5 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="google wallet" ><img src="/woilink/react/icons/google_wallet.svg" alt="" className='w-4 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="copy url" ><img src="/woilink/react/icons/copy.svg" alt="" className='w-5 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="view" ><img src="/woilink/react/icons/view.svg" alt="" className='w-4 hover:cursor-pointer' /></div>
                                </div>
                                <div className="hidden woi_upgrade_btn hover:cursor-pointer right-3 px-3 py-1.5 text-xxs rounded-lg text-white lg:flex items-center gap-1"> <FaCrown /> Upgrade Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 bg-white text-xs font-medium relative text-black woi_bg_grad_sec_3 px-4 py-6 rounded-xl flex flex-col gap-3">
                <div className="absolute -top-2.5 woi_upgrade_btn right-3 px-3 py-1 text-xxs rounded-lg text-white flex items-center gap-1 lg:hidden"> <FaCrown /> Upgrade Now</div>
                <div className="flex justify-between">
                    <div className="w-[600%] truncate text-sm md:text-base font-semibold">Manage Virtual Store</div>
                    <div className="flex gap-1">
                        <div className="p-0.5 hover:cursor-pointer px-3 rounded-lg bg-black/90 flex items-center gap-1 text-white"> <FaPlus className='text-[9px]' /> New</div>
                        <div className="p-0.5 bg-black/90 px-2 rounded-lg text-white flex justify-center items-center cursor-pointer"><FaChevronDown className='text-xxs' /> </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center w-full">
                        <div className=""><img src="/woilink/react/avatar/business.jpg" className='bg-center w-19 h-16 rounded-full object-cover' alt="" /></div>
                        <div className="flex flex-col gap-1 text-xs w-full">
                            <div className="flex justify-between w-full">
                                <div className="text-base w-full font-semibold">Philip Kotler</div>
                                <div className="dropdown dropdown-end">  <BsThreeDotsVertical tabIndex={0} className='text-sm hover:cursor-pointer' />
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 px-0 shadow-sm">
                                        <li className='text-xs'><a className='flex items-center py-2 px-4 gap-2'><FiEdit className='text-sm' /> Edit</a></li>
                                        <li className='text-xs'><a className='flex items-center py-2 px-4 gap-2'><BsGraphUpArrow className='text-sm' /> Statistics</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">Business Consultant </div>
                            <div className="flex items-center w-full justify-between">
                                <div className="flex gap-3 mt-1 items-center">
                                    <div className="tooltip" data-tip="apple wallet" ><img src="/woilink/react/icons/apple_wallet.svg" alt="" className=' w-5 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="google wallet" ><img src="/woilink/react/icons/google_wallet.svg" alt="" className='w-4 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="copy url" ><img src="/woilink/react/icons/copy.svg" alt="" className='w-5 hover:cursor-pointer' /></div>
                                    <div className="tooltip" data-tip="view" ><img src="/woilink/react/icons/view.svg" alt="" className='w-4 hover:cursor-pointer' /></div>
                                </div>
                                <div className="hidden woi_upgrade_btn hover:cursor-pointer right-3 px-3 py-1.5 text-xxs rounded-lg text-white lg:flex items-center gap-1"> <FaCrown /> Upgrade Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserActiveCardsSection
