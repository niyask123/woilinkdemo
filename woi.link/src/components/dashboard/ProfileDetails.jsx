import React, { useState } from "react";
import { CiFilter, CiViewList } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { IoGridOutline, IoSearchOutline } from "react-icons/io5";
import { profiles } from "../../data/mainData";
import { Link } from "react-router-dom";
import { FcBinoculars } from "react-icons/fc";

const ProfileDetails = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // filter on search filed
    const filteredProfiles = profiles.filter((profile) =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col mt-2">
            {/* Header */}
            <div className="text-lg flex-col gap-2 md:flex-row font-medium flex justify-between items-center">
                <div className="flex justify-between w-full md:w-auto md:gap-0 gap-6">Profiles
                    <label className="input md:hidden  !outline-none rounded-full text-xs h-8 md:mr-2 bg-transparent border-black">
                        <input type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="grow" placeholder="Search..." />
                        <IoSearchOutline />
                    </label>
                </div>
                <div className="flex flex-row w-full justify-end ">
                    <label className="input hidden md:flex !outline-none rounded-full text-xs h-8 mr-2 bg-transparent border-black">
                        <input type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="grow" placeholder="Search..." />
                        <IoSearchOutline />
                    </label>
                    <div className="flex items-center profile_details_view">
                        <span className='text-xs text-blue-700 text-nowrap'>View all</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center profile_details_view">
                        <CiFilter className='text-[22px]' />
                        <div className="text-xs">Filter</div>
                    </div>
                    <div className={`flex items-center profile_details_view ${!isGridView ? "text-blue-600" : ""}`}
                        onClick={() => setIsGridView(false)}
                    >
                        <CiViewList className='text-2xl' />
                    </div>
                    <div className={`flex items-center profile_details_view ${isGridView ? "text-blue-600" : ""}`}
                        onClick={() => setIsGridView(true)}
                    >
                        <IoGridOutline className='text-xl' />
                    </div>
                </div>
            </div>

            {/* Profile List/Grid View */}
            <div className={`${isGridView ? "grid xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-2 mt-2" : "grid grid-cols-1 xl:grid-cols-2 border-none mt-3 gap-2"}`}>
                {filteredProfiles.length > 0 ? (
                    filteredProfiles.map((profile) => (
                        <div
                            key={profile.id}
                            className={`woi_profile_dash_card flex ${isGridView ? "flex-col gap-2" : "flex-row items-center p-3 border-none rounded-md shadow-sm"}`}
                        >
                            {/* Profile Image */}
                            <img
                                src={profile.image}
                                className={`object-cover bg-cover max-w-16 min-w-16 h-16 md:block hidden rounded-full`}

                                alt={profile.name}
                            />


                            {/* Profile Details */}
                            <div className={`flex flex-col w-full justify-center ${isGridView ? "gap-1" : "ml-3"}`}>
                                <div className="text-sm font-medium">{profile.name}</div>
                                <div className="font-medium text-xs">{profile.role}</div>

                                {/* View & Edit Links */}
                                <div className="flex justify-between items-center text-purple-700">
                                    <div className="flex flex-row items-center gap-1">
                                        <FaAngleRight className="text-xxs" />
                                        <Link to={profile.viewLink} className="text-xxs hover:cursor-pointer hover:underline">
                                            View Link
                                        </Link>
                                    </div>
                                    <Link to={profile.editLink} className="text-xxs hover:cursor-pointer hover:underline">
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center gap-3 text-gray-500 mt-5 flex justify-center w-full col-span-full text-lg font-medium">
                        No profiles found! <FcBinoculars className="text-2xl" /> </div>
                )}
            </div>
        </div>
    );
};

export default ProfileDetails;
