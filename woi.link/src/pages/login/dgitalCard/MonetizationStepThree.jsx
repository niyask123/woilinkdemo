import React, { useState } from "react";
import DateModal from "../../../components/ui/DateModal";
import CustomDropdown from "../../../components/ui/DropdownUI";
import { departmentOptions, teamSizeOptions } from "../../../data/uiComponents";
import { IoArrowBack } from "react-icons/io5";

const MonetizationStepThree = ({ handleBack, onContinue }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTeamSizeId, setSelectedTeamSizeId] = useState(null);
  const [selectedWorkFaceId, setSelectedWorkFaceId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const isValid = selectedDate && selectedTeamSizeId && selectedWorkFaceId;

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
                  style={{ transform: "scaleX(0.40)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full flex-grow px-4 pb-[7.5rem] pt-4 md:px-6 lg:px-24 lg:pb-[11rem] lg:pt-6 text-center overflow-x-hidden">
        <div className="flex flex-col gap-3 md:gap-4 pb-3">
          <h1 className="md:max-w-[600px] woi_log_main_head">
            Help us understand how you plan to use Popl to capture leads.
          </h1>
          <p className="text-gray-900 text-start text-sm md:text-base font-semibold md:max-w-[600px] w-full mx-auto mt-6 mb-1">
            Select an approximate start date below
          </p>
        </div>

        <div className="w-full md:max-w-[600px] mx-auto text-start flex flex-col gap-6">
          {/* Date Picker */}
          <div>
            <label className="label text-sm md:text-base font-semibold text-gray-800 mb-1">Preferred Start Date</label>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 flex justify-between items-center hover:bg-gray-50 transition w-full text-sm"
            >
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
                : "Select a Date"}
            </button>

            <DateModal
              isOpen={modalOpen}
              initialDate={selectedDate}
              onClose={() => setModalOpen(false)}
              onSave={(date) => {
                setSelectedDate(date);
                setModalOpen(false);
              }}
            />
          </div>

          {/* Team Size Dropdown */}
          <CustomDropdown
            label="Team Size"
            options={teamSizeOptions}
            selectedId={selectedTeamSizeId}
            onSelect={setSelectedTeamSizeId}
            placeholder="Select team size"
          />

          {/* Department Dropdown */}
          <CustomDropdown
            label="Department"
            options={departmentOptions}
            selectedId={selectedWorkFaceId}
            onSelect={setSelectedWorkFaceId}
            placeholder="Select a department"
          />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 z-10 w-full bg-white py-6 px-6 lg:px-14 lg:py-12">
        <div className="mx-auto w-full md:max-w-lg">
          <button
            onClick={() => {
              if (isValid) onContinue();
            }}
            disabled={!isValid}
            className={`btn w-full rounded-full py-6 transition duration-300 shadow-none ${isValid
                ? "bg-blue-500 hover:bg-blue-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Continue
          </button>
        </div>
      </footer>
    </>
  );
};

export default MonetizationStepThree;
