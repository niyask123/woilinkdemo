import React, { useState } from 'react'
import { CiMenuFries, CiSettings, CiUser } from 'react-icons/ci'
import { IoIosNotifications, IoMdArrowRoundBack, IoMdClose } from 'react-icons/io'
import { MdArrowBack, MdOutlineAccountCircle } from 'react-icons/md'
import { RiLogoutBoxLine, RiMenu3Line } from 'react-icons/ri'
import { menuItems, notifications as initialNotifications } from '../../data/head'
import { Link } from 'react-router-dom'
import { AiFillCaretDown, AiFillCaretRight, AiOutlineCaretDown, AiOutlineEllipsis, AiOutlineMore } from 'react-icons/ai'
import { GoArrowRight, GoQuestion } from 'react-icons/go'
import { TbUserQuestion } from 'react-icons/tb'
import { cardsDetails } from '../../data/mainData'
import { FaCrown } from 'react-icons/fa'
// import { cardsDetails } from '../../data/mainData'

const MobHeader = () => {
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };
    const [notifications, setNotifications] = useState(initialNotifications);

    // Function to remove a notification by ID
    const removeNotification = (id) => {
        setNotifications(notifications.filter((item) => item.id !== id));
    };
    return (
        <>
            <div className='flex flex-row gap-3 p-2 items-center justify-between '>
                <div className="flex gap-1">
                    <div onClick={() => document.getElementById('woi_mob_modal_1').showModal()} className="text-2xl text-blue-700 "><RiMenu3Line /></div>
                    <div className=""><img src="/woilink/react/logo/woi_logo.png" className='object-contain w-20' alt="" /></div>
                </div>
                <div className="flex items-center flex-row w-fit gap-2">
                    <div onClick={() => document.getElementById('woi_mob_modal_4').showModal()} className=""><IoIosNotifications className='text-2xl' /></div>
                    <div onClick={() => document.getElementById('woi_mob_modal_3').showModal()} className=""><FaCrown className='text-2xl' /></div>

                    <div className="relative" onClick={() => document.getElementById('woi_mob_modal_2').showModal()}>
                        <div className="inline-grid absolute bottom-0 left-2 *:[grid-area:1/1]">
                            <div className="status status-success animate-ping"></div>
                            <div className="status status-success"></div>
                        </div>
                        <img src="/woilink/react/logo/woi_log_avatar.webp" className='object-contain w-8 rounded-full h-8' alt="" />
                    </div>
                </div>
            </div>

            {/* -------sidebar----- */}
            <dialog id="woi_mob_modal_1" className="modal  sm:modal-middle">
                <div className="modal-box h-screen p-4 absolute w-[90%] left-0 rounded-l-none ">
                    <form method="dialog" className="modal-backdrop flex">
                        <button className=' rounded-full w-8 h-8 border border-black flex justify-center items-center'><MdArrowBack className='text-2xl text-black' /></button>
                    </form>
                    <div className="pt-2">
                        <div className="flex flex-col ">
                            <div className="flex flex-col gap-1 whitespace-nowrap">
                                {menuItems.map((item) => {
                                    const IconComponent = item.menuIcon;
                                    return (
                                        <div key={item.id} className="relative">
                                            {!item.isDropdown ? (
                                                <Link to={item.path}><button className="head_cat_mob_btn"><IconComponent className="text-lg" /> {item.name}</button> </Link>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => toggleDropdown(item.id)}
                                                        className="btn head_cat_mob_btn !justify-between"
                                                        popoverTarget={`popover-${item.id}`} // Corrected template literal
                                                        style={{ anchorName: `--anchor-${item.id}` }} // Corrected template literal
                                                    >
                                                        <IconComponent className="text-lg" />   {item.name} {openDropdownId === item.id ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                                    </button>
                                                    {openDropdownId === item.id && (
                                                        <ul
                                                            className="dropdown menu w-60 text-xs rounded-box bg-base-100 shadow-sm"
                                                            popover="auto"
                                                            id={`popover-${item.id}`} // Corrected template literal
                                                            style={{ positionAnchor: `--anchor-${item.id}` }} // Corrected template literal
                                                        >
                                                            {item.links.map((link, index) => {
                                                                const SubMenuIcon = link.menuIcon;
                                                                return (
                                                                    <li key={index}>
                                                                        <Link to={link.path} onClick={() => setOpenDropdownId(null)}>
                                                                            <SubMenuIcon className="text-lg" />  {link.name}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>


            {/* -------user details-------------- */}
            <dialog id="woi_mob_modal_2" className="modal  sm:modal-middle">
                <div className="modal-box h-screen p-0 absolute w-[90%] right-0 rounded-r-none ">
                    <form method="dialog" className=" p-4 modal-backdrop flex right-0 absolute z-20">
                        <button className=' rounded-full w-8 h-8 border border-black flex justify-center items-center'><GoArrowRight className='text-2xl text-black' /></button>
                    </form>
                    <div className="">
                        <div className="flex flex-col ">
                            <div className="w-full p-3 bg-blue-100 flex justify-start gap-3 items-center pt-4">
                                <img src="/woilink/react/logo/woi_log_avatar.webp" className='rounded-full object-contain w-16 h-16' alt="" />
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium ">Neenu Antony</div>
                                    <div className="text-xxs font-medium text-gray-700">neenu@worldemart.com</div>
                                    <div className="text-xxs font-medium text-gray-700">Last active: 16-03-2025</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full flex flex-col">
                            <div className="flex flex-col gap-1 p-2 px-4">
                                <div className="text-start font-medium text-xs ml-2 mt-2">Account</div>
                                <button className="bg-yellow-100 rounded-lg text-start items-center gap-2 p-2 px-4 flex">
                                    <div className="p-2 bg-yellow-300 rounded-lg">
                                        <CiSettings className="text-xl" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xs font-medium">Setting</div>
                                        <div className="text-xxs">Your Profile Settings</div>
                                    </div>
                                </button>
                                <button className="bg-blue-100 text-start rounded-lg items-center gap-2 p-2 px-4 flex">
                                    <div className="p-2 bg-blue-300 rounded-lg">
                                        <CiUser className='text-xl' />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xs font-medium">Profile</div>
                                        <div className="text-xxs">Your Profile Settings</div>
                                    </div>
                                </button>
                                <button className="bg-orange-100 text-start rounded-lg items-center gap-2 p-2 px-4 flex">
                                    <div className="p-2 bg-orange-300 rounded-lg">
                                        <CiUser className='text-xl' />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xs font-medium">My Orders</div>
                                        <div className="text-xxs">Your Profile Settings</div>
                                    </div>
                                </button>
                                <div className="text-start font-medium text-xs ml-2 mt-2">Support</div>
                                <button className="bg-cyan-100 text-start rounded-lg items-center gap-2 p-2 px-4 flex">
                                    <div className="p-2 bg-cyan-300 rounded-lg">
                                        <TbUserQuestion className='text-xl' />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xs font-medium">Ask a question</div>
                                        <div className="text-xxs">Your Profile Settings</div>
                                    </div>
                                </button>
                                <button className="bg-fuchsia-100 text-start rounded-lg items-center gap-2 p-2 px-4 flex">
                                    <div className="p-2 bg-fuchsia-300 rounded-lg">
                                        <GoQuestion className='text-xl' />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xs font-medium">Help Topics</div>
                                        <div className="text-xxs">Your Profile Settings</div>
                                    </div>
                                </button>
                            </div>
                            <div className="p-4"><button className="p-2 btn btn-neutral mt-auto w-full rounded-lg"> <RiLogoutBoxLine className='text-lg' /> Logout</button></div>
                        </div>

                    </div>
                </div>
            </dialog>


            {/* -----------notifications--------------- */}
            <dialog id="woi_mob_modal_4" className="modal  sm:modal-middle">
                <div className="modal-box h-screen p-0 absolute w-[100%] right-0 rounded-none ">
                    <form method="dialog" className=" p-4 modal-backdrop flex justify-between items-center right-0 absolute w-full z-20">
                        <div className="text-sm text-black font-medium">Notification</div>
                        <button className=' rounded-full w-8 h-8 border border-black flex justify-center items-center'><GoArrowRight className='text-2xl text-black' /></button>
                    </form>
                    <div className="">
                        <div className="flex flex-col pt-14 px-2 text-xs gap-1">
                            {notifications.map((item) => (
                                <div key={item.id} className="flex flex-row justify-between p-2 rounded-lg hover:bg-gray-200">
                                    <div className="flex gap-2 rounded-full">
                                        <img src={item.avatar} className="object-cover w-10 h-10 bg-center rounded-lg" alt={item.name} />
                                        <div className="flex flex-col gap-0.5 justify-center">
                                            <div className="text-xs font-medium flex items-center gap-1">
                                                {item.name} {item.statusColor && <span className={`p-1 ${item.statusColor} h-1 rounded-full`}></span>}
                                            </div>
                                            <div className="text-xxs flex gap-1 truncate w-56">
                                                {item.message} {item.extra && <span className="text-red-700">{item.extra}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="flex gap-2">
                                        <IoMdClose
                                            className="p-1 text-xl bg-red-200 rounded-full cursor-pointer hover:bg-red-300"
                                            onClick={() => removeNotification(item.id)} // Call function on click
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </dialog>

            {/* ------------right side bar-------------------- */}
            <dialog id="woi_mob_modal_3" className="modal  sm:modal-middle">
                <div className="modal-box h-screen p-0 absolute w-[100%] right-0 rounded-none ">
                    <form method="dialog" className=" p-4 modal-backdrop flex right-0 absolute z-20">
                        <button className=' rounded-full w-8 h-8 border border-black flex justify-center items-center'><GoArrowRight className='text-2xl text-black' /></button>
                    </form>
                    <div className="">
                        <div className="flex flex-col pt-12">
                            <div className="flex flex-col gap-4 m-2 p-3 py-6 rounded-2xl bg_woi_payment_side text-white">
                                <div className="w-full text-sm font-medium flex flex-row justify-between">
                                    <div className="">Payment Due</div>
                                    <div className="flex gap-2 items-center">
                                        <div className="">See Details</div>
                                        <div className="">
                                            <AiOutlineMore className='font-bold text-lg' />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full text-2xl font-semibold text-center">$ 569,548. <span className='text-xs'>49</span></div>
                                <div className="w-full flex justify-center items-center">
                                    <button className='btn  px-14 rounded-full bg-white border-white'>Make Payment</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 m-2 p-3 py-6 rounded-2xl bg-gray-300 text-black">
                                <div className="flex w-full justify-between text-xs" >
                                    <div className="text-base font-medium">Plans</div>
                                    <div className="flex gap-2 items-center">
                                        <div className="text-xs font-medium">View Details</div>
                                        <div className=""><AiOutlineCaretDown /></div>
                                    </div>
                                </div>
                                {cardsDetails.map((cards) => {
                                    const IconComponent = cards.icon;
                                    return (
                                        <div key={cards.id} className="flex flex-row gap-2 px-3 py-2 text-xxs font-medium bg-white text-black rounded-2xl">
                                            <div className={`md:p-2 xl:p-1.5 2xl:p-2 ${cards.bgColor} h-full 2xl:mr-2 p-2 rounded-full`}><IconComponent className='text-lg text-white' /></div>
                                            <div className="flex w-full flex-col justify-center">
                                                <div className="">{cards.title}</div>
                                                <div className="truncate"><span className='text-green-700'>{cards.plan}</span> (Discount- {cards.discount})</div>
                                                <div className="">Total Credit - {cards.totalCredit}</div>
                                            </div>
                                            <div className="flex flex-col justify-end items-end">
                                                <div className=""><AiOutlineEllipsis className='text-xl' /></div>
                                                <div className="text-nowrap">{cards.planStatus}</div>
                                                <div className="text-red-600">{cards.expiryDate}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="flex justify-center">
                                    <button className="btn  px-14 rounded-full bg-white woi_upgrade_btn border-none text-xs text-white">Upgrade Now</button>
                                </div>
                                <div className="flex justify-center">
                                    <button className="btn  px-14 rounded-full  border-none border-white text-xs bg-blue-200 py-6">Buy New Plans</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </dialog>


        </>
    )
}

export default MobHeader
