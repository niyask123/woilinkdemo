import React from 'react'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa6'
import { IoIosNotificationsOutline, IoMdNotifications, IoMdRibbon } from 'react-icons/io'
import { IoHomeSharp } from 'react-icons/io5'
import { MdEmail, MdInsertLink, MdManageAccounts, MdQrCode, MdStore, MdWallpaper } from 'react-icons/md'
import { PiSelectionBackgroundBold } from 'react-icons/pi'

const ToolsDetails = () => {
    return (
        <>
            <div className="flex flex-col mt-2">
                <div className="text-lg font-medium">Tools</div>
                <div className="overflow-x-auto scrollbar-none rounded-lg">
                    <div className="flex gap-3 overflow-x-auto w-max">
                        <button className="woi_sec_two_card woi_sec_two_svg w-fit ">
                            <div className="woi_dashboard_notification">31+</div>
                            <div className="woi_svg_round"><FaRegAddressCard className='text-3xl  bg-black text-white' /></div>
                            <div className='px-6'>Digital Business Card</div>
                        </button>
                        <button className="woi_sec_two_card woi_sec_two_svg w-fit">
                            <div className="woi_dashboard_notification"> 1+</div>
                            <div className="woi_svg_round"><MdInsertLink className='text-3xl  bg-black text-white' /></div>
                            <div className='px-6'>Link in Bio</div>
                        </button>
                        <button className="woi_sec_two_card woi_sec_two_svg w-fit">
                            <div className="woi_svg_round"><MdStore className='text-3xl  bg-black text-white' /></div>
                            <div className='px-6'>Virtual Store</div>
                        </button>
                        <button className="woi_sec_two_card woi_sec_two_svg w-fit">
                            <div className="woi_svg_round"><MdQrCode className='text-3xl  bg-black text-white' /></div>
                            <div className='px-6'>QR Code</div>
                        </button>
                        <button className="woi_sec_two_card woi_sec_two_svg w-fit">
                            <div className="woi_dashboard_notification"> 10+</div>
                            <div className="woi_svg_round"><MdEmail className='text-3xl  bg-black text-white' /></div>
                            <div className='px-6'>Email Signature</div>
                        </button>
                        <button className="woi_sec_two_card woi_sec_two_svg w-fit">
                            <div className="woi_svg_round"><MdWallpaper className='text-3xl  bg-black text-white' /></div>
                            <div className='px-6'>Wallpaper</div>
                        </button>
                        <button className="woi_sec_two_card woi_sec_two_svg w-fit">
                            <div className="woi_dashboard_notification "> 3+</div>
                            <div className="woi_svg_round"><PiSelectionBackgroundBold className='text-3xl  bg-black text-white' /></div>
                            <div className='px-6'>Virtual Background</div>
                        </button>
                        <button className="woi_sec_two_card woi_sec_two_svg w-fit">
                            <div className="woi_svg_round"><IoMdRibbon className='text-3xl  bg-black text-white' /></div>
                            <div className='px-6'>Event Badge</div>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ToolsDetails
