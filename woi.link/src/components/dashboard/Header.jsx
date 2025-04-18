import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MdOutlineVerifiedUser, MdPayment } from 'react-icons/md';
import { IoKeyOutline, IoNotifications } from 'react-icons/io5';
import { FiBarChart } from 'react-icons/fi';
import useHeadMenuDropdown from '../../hooks/useHeadMenuDropdown';
import { users } from '../../data/mainData';
import { menuItems, notifications as initialNotifications } from '../../data/head';
import { CiLogout } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const scrollContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { openDropdownId, toggleDropdown } = useHeadMenuDropdown();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (!event.target.closest(".menu-item")) {
        toggleDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleDropdown]);


  const [notificationDropdownIsOpen, setNotificationDropdownIsOpen] = useState(false);
  const dropdownRefNotification = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdownNotification = () => {
    setNotificationDropdownIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefNotification.current && !dropdownRefNotification.current.contains(event.target)) {
        setNotificationDropdownIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [notifications, setNotifications] = useState(initialNotifications);

  // Function to remove a notification by ID
  const removeNotification = (id) => {
    setNotifications(notifications.filter((item) => item.id !== id));
  };

  return (
    <header className="flex flex-col">
      <div className="flex flex-col gap-3">
        <div className="md:flex-row flex-col w-full gap-2 items-center">
          <div className="flex justify-between lg:mx-20 mx-10 pt-3">
            <div className="flex gap-2 items-end justify-center items-center">
              <img src="/woilink/react/logo/woi_logo.png" className='object-contain w-32' alt="Logo" />
            </div>
            <div className="flex gap-3">
              {users.map((user, index) => (
                <div key={index} className="flex flex-col text-end justify-center woi_profile_01">
                  <div className="flex items-center gap-1 font-semibold justify-end text-sm"> {user.name}</div>
                  <div className=''>Customer Id: {user.customerId}</div>
                  <div>Last Active: {user.lastActive}</div>
                </div>
              ))}
              <div className="relative inline-block">
                <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                  <img
                    src="/woilink/react/avatar/14.jpg"
                    className="object-cover  w-14 h-14 rounded-full"
                    alt="Avatar"
                  />
                  <div className="absolute top-0 left-0">
                    <div className="inline-grid *:[grid-area:1/1]">
                      <div className="status status-success  animate-ping"></div>
                      <div className="status status-success"></div>
                    </div>
                  </div>
                </div>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-10"
                  >
                    <ul className="py-2 text-gray-700 text-sm">
                      <Link to="#"><li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"><MdOutlineVerifiedUser className='text-xl text-blue-600' /> Two Step Authentication</li></Link>
                      <Link to="#"><li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"><IoKeyOutline className='text-xl text-red-600' /> Change Password</li></Link>
                      <Link to="#"><li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"><FiBarChart className='text-xl text-amber-600' /> Logs</li></Link>
                      <Link to="#"><li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"><CiLogout className='text-xl text-black' /> Logout</li></Link>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-2">
          <div className="xl:mx-20 lg:mx-10 flex justify-between items-center">
            <div ref={scrollContainerRef} className="flex-grow">
              <div className="flex gap-3 whitespace-nowrap">
                {menuItems.map((item) => {
                  const IconComponent = item.menuIcon;
                  return (
                    <div key={item.id} className="relative flex items-center gap-2 menu-item">
                      {!item.isDropdown ? (
                        <Link to={item.path} className="flex items-center gap-2">
                          <button className="head_cat_btn flex items-center justify-center ">
                            <IconComponent className="text-lg" /> {item.name}
                          </button>
                        </Link>
                      ) : (
                        <div className="relative inline-block text-left">
                          <button
                            onClick={() => toggleDropdown(item.id)}
                            className="head_cat_btn flex items-center gap-2"
                          >
                            <IconComponent className="text-lg" />
                            {item.name} {openDropdownId === item.id ? <AiFillCaretDown /> : <AiFillCaretRight />}
                          </button>
                          {openDropdownId === item.id && (
                            < motion.ul
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              ref={dropdownRef} className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-[9999] border border-gray-200">
                              {item.links.map((link, index) => {
                                const SubMenuIcon = link.menuIcon;
                                return (
                                  <li key={index} className="border-b hover:bg-gray-100 text-xs">
                                    <Link

                                      to={link.path}
                                      onClick={() => setTimeout(() => toggleDropdown(null), 150)}
                                      className="block px-4 py-2 text-black flex items-center gap-2"
                                    >
                                      <SubMenuIcon className="text-lg" /> {link.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="border-none btn shadow-none px-7 rounded-full woi_upgrade_btn text-white font-medium h-8 text-xs flex items-center">Upgrade Now</div>
              <div className="relative" ref={dropdownRefNotification}>
                <button
                  className="btn m-0 p-0 text-white bg-transparent border-0 shadow-none relative"
                  onClick={toggleDropdownNotification}
                >
                  <div className="absolute top-0.5 right-0">
                    <div className="inline-grid *:[grid-area:1/1]">
                      <div className="status status-secondary animate-ping"></div>
                      <div className="status status-secondary"></div>
                    </div>
                  </div>
                  <IoNotifications className="text-2xl" />
                </button>

                {/* Dropdown Menu */}
                {notificationDropdownIsOpen && (
                  <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }} className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg p-2">
                    <div className="flex flex-col pt-4 text-black px-2 text-xs gap-1">
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
                  </motion.div>
                )}
              </div>
              <img src="/woilink/react/logo/countryflag.png" className="object-contain w-10 h-6 rounded-sm" alt="Country Flag" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
