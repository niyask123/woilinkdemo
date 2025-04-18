import React, { useState, useRef, useEffect } from "react";
import CropModal from "../../utils/CropModal";
import { FiPlus, FiChevronRight, FiChevronLeft } from "react-icons/fi";

const ImageUploader = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showCropModal, setShowCropModal] = useState(false);

  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const handleFileChange = (e) => {
    if (!e) {
      setImageSrc(null);
      return;
    }

    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (croppedImageUrl) => {
    setUploadedImages((prev) => [...prev, croppedImageUrl]);
    setImageSrc(null);
    setShowCropModal(false);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setShowLeftButton(el.scrollLeft > 0);
      setShowRightButton(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = 150;
      el.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleScroll(); // Initial check
  }, [uploadedImages]);

  return (
    <div className="relative w-full">
      {/* Left Scroll Button */}
      {showLeftButton && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0  z-10 h-full px-2 bg-transparent"
        >
          <FiChevronLeft className="text-3xl bg-gray-100/70 rounded-full text-gray-500 p-1 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:cursor-pointer" />
        </button>
      )}

      {/* Scrollable Image List */}
      <ul
        className="flex overflow-x-auto justify-center scrollbar-none scroll-smooth"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {uploadedImages.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Uploaded ${idx}`}
            onClick={() => setSelectedImageIndex(idx)}
            className={`w-24 h-24 bg-cover object-cover rounded-full p-0.5 cursor-pointer m-1
              ${selectedImageIndex === idx ? "outline-2 outline-gray-600 ring-1 border-none ring-inset transition-all duration-300 ease-in-out" : "border-none"}`}
          />
        ))}

        <button
          onClick={() => setShowCropModal(true)}
          className="w-24 h-24 flex items-center justify-center border-2 border-dashed rounded-full cursor-pointer text-gray-500 m-1 hover:border-gray-700"
        >
          <FiPlus className="text-2xl w-24" />
        </button>
      </ul>

      {/* Right Scroll Button */}
      {showRightButton && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0  z-10 h-full px-2 bg-transparent "
        >
          <FiChevronRight className="text-3xl bg-gray-100/70 rounded-full text-gray-500 p-1 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:cursor-pointer" />
        </button>
      )}

      {/* Crop Modal */}
      {showCropModal && (
        <CropModal
          imageSrc={imageSrc}
          onClose={() => {
            setShowCropModal(false);
            setImageSrc(null);
          }}
          onUpload={handleUpload}
          onFileChange={handleFileChange}
        />
      )}
    </div>
  );
};

export default ImageUploader;
