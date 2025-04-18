import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import '../../style/datepicker.css'

const CustomDropdown = ({
  label,
  options = [],
  selectedId,
  onSelect,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedItem = options.find((opt) => opt.id === selectedId);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="label text-sm md:text-base font-semibold text-gray-800 mb-1">
          {label}
        </label>
      )}
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer bg-white border border-gray-300 rounded-xl px-4 py-2.5 flex justify-between items-center hover:bg-gray-50 transition"
        >
          <span className="text-gray-700 text-sm font-medium">
            {selectedItem?.title || placeholder}
          </span>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>

        {isOpen && (
          <div className="absolute z-30 mt-2 w-full max-h-44 overflow-auto bg-white border border-gray-200 rounded-xl shadow-lg">
            <div className="p-2 flex flex-col gap-1">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    onSelect(option.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-medium transition ${
                    selectedId === option.id
                      ? "bg-gray-100 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
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
  );
};

export default CustomDropdown;
