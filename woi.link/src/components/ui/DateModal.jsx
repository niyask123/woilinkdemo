import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateModal = ({ isOpen, onClose, onSave, initialDate }) => {
    const [tempDate, setTempDate] = useState(initialDate || new Date());

    useEffect(() => {
        if (isOpen) {
            setTempDate(initialDate || new Date());
        }
    }, [isOpen, initialDate]);

    return (
        <>
            {isOpen && (
                <div className="modal modal-open">
                    <div className="modal-box p-0 rounded-xl overflow-hidden max-w-sm">
                        {/* Header */}
                        <div className="bg-gray-900 text-white px-6 py-4 text-left">
                            <div className="text-xs text-gray-400 font-semibold">
                                {tempDate.getFullYear()}
                            </div>
                            <div className="text-2xl font-bold tracking-wide">
                                {tempDate.toLocaleDateString("en-US", {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                }).toUpperCase()}
                            </div>
                        </div>

                        {/* Calendar */}
                        <div className="px-6 pt-2 pb-4 bg-white">
                            <DatePicker
                                selected={tempDate}
                                onChange={(date) => setTempDate(date)}
                                inline
                                calendarClassName="custom-calendar"
                            />

                            {/* Actions */}
                            <div className="modal-action flex justify-end gap-2">
                                <button
                                    className="btn  border px-6 rounded-full"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn bg-blue-600 text-white px-10 rounded-full"
                                    onClick={() => {
                                        onSave(tempDate);
                                    }}
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DateModal;
