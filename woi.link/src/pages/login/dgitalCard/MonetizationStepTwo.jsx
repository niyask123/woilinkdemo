import React, { useEffect, useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { BusinessmonetisationLeads } from "../../../data/mainData";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const MonetizationStepTwo = ({ handleBack, handleSelect, selectedCategories, onContinue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const ref = useRef();

    const isDisabled = selectedCategories.length === 0 || selectedId === null;

    const options = [
        { id: 1, title: "HubSpot" },
        { id: 2, title: "Salesforce" },
        { id: 3, title: "Pardot" },
        { id: 4, title: "Zoho" },
        { id: 5, title: "Pipedrive" },
        { id: 6, title: "Dynamics 365" },
        { id: 7, title: "Modnay" },
    ];

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectOptions = (id) => {
        setSelectedId(id);
        setIsOpen(false);
    };

    const selectedItem = options.find((item) => item.id === selectedId);

    return (
        <>
            <header className="sticky top-0 z-10 w-full bg-white p-4 lg:p-6">
                <div className="relative flex h-4 w-full flex-row items-center lg:h-[18px]">
                    <div className="mx-auto w-full max-w-[7.5rem]">
                        <div className="absolute left-0 -top-0 flex-none lg:min-w-8">
                            <button
                                onClick={handleBack}
                                className="px-3 items-center flex gap-1 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out py-1 hover:bg-gray-200"
                            >
                                <IoArrowBack />
                                Back
                            </button>
                        </div>
                        <div className="flex h-2 gap-2">
                            <div className="relative h-full flex-1 overflow-hidden rounded-md bg-gray-300">
                                <div
                                    className="h-full origin-left transform transition-all duration-300 bg-black"
                                    style={{ transform: 'scaleX(0.25)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6 text-center overflow-x-hidden">
                <div className="flex flex-col gap-3 md:gap-4 pb-3">
                    <div className="md:max-w-[600px] woi_log_main_head">
                        Tell us your team's goals so we can give you the best experience.
                    </div>
                    <p className="text-gray-900 md:max-w-[600px] text-start w-full text-sm md:text-base mx-auto mt-6 mb-1 font-semibold">
                        How will your team capture leads with Popl?{" "}
                        <span className="text-xs text-gray-400">(select all that apply)</span>
                    </p>
                </div>

                <div className="mx-auto mb-12 flex w-full flex-wrap justify-start gap-x-4 gap-y-[10px] md:max-w-[600px] md:gap-x-6 md:gap-y-4">
                    {BusinessmonetisationLeads.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleSelect(category.id)}
                            className={`flex flex-col items-center justify-center w-full md:w-auto rounded-full bg-white px-6 py-3 hover:cursor-pointer min-[392px] border-gray-200 hover:bg-gray-50 ${
                                selectedCategories.includes(category.id)
                                    ? "outline-1 outline-black ring-1 border-none ring-inset"
                                    : "outline-1 outline-gray-200"
                            }`}
                        >
                            <div className="md:text-sm text-xs font-semibold text-gray-700">
                                {category.title}
                            </div>
                        </button>
                    ))}

                    <p className="text-gray-900 md:max-w-[600px] text-start w-full sm:text-base text-sm mx-auto mt-6 mb-1 font-semibold">
                        What CRM does your team use?
                    </p>

                    <div className="relative inline-block w-full text-left" ref={ref}>
                        <div
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="cursor-pointer bg-white border border-gray-300 rounded-xl px-4 py-2 flex justify-between items-center hover:bg-gray-50 transition"
                        >
                            <span className="text-gray-700 text-sm py-0.5 font-medium">
                                {selectedItem ? selectedItem.title : "Select an option"}
                            </span>
                            {isOpen ? (
                                <FiChevronUp className="text-gray-500" />
                            ) : (
                                <FiChevronDown className="text-gray-500" />
                            )}
                        </div>

                        {isOpen && (
                            <div className="absolute border border-[#dddddd] z-30 bottom-12 md:top-12 scrollbar-none h-44 overflow-auto mt-2 w-full rounded-xl bg-white shadow-lg  ">
                                <div className="p-2 flex flex-col gap-1 ">
                                    {options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleSelectOptions(option.id)}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-xs hover:cursor-pointer font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition ${
                                                selectedId === option.id ? "bg-gray-100 font-semibold" : ""
                                            }`}
                                        >
                                            {option.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer className="pointer-events-auto fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg-white py-6 px-6 lg:px-14 lg:py-12">
                <div className="mx-auto w-full md:max-w-lg">
                    <div className="flex w-full flex-col gap-5">
                        <button
                            onClick={() => onContinue({ selectedCategories, selectedCRM: selectedItem })}
                            className={`woi_log_btn_01 ${
                                isDisabled
                                    ? "woi_log_btn_03"
                                    : "woi_log_btn_02"
                            }`}
                            disabled={isDisabled}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default MonetizationStepTwo;
