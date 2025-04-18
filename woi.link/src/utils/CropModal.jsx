import React, { useState, useRef, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import { LiaFileImage } from "react-icons/lia";
import { MdOutlineRestartAlt } from "react-icons/md";
import { PiRectangleDashedLight } from "react-icons/pi";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const getAspectRatio = (type) => {
  switch (type) {
    case "rectangle":
      return 16 / 9;
    case "square":
      return 1;
    case "area_reactangle":
      return 1;
    default:
      return 1;
  }
};

const getCenteredCrop = (mediaWidth, mediaHeight, aspect) => {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "px",
        width: Math.min(200, mediaWidth),
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
};

const CropModal = ({ imageSrc, onClose, onUpload, onFileChange }) => {
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [aspectType, setAspectType] = useState("square");
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);

  const aspect = getAspectRatio(aspectType);

  const onImageLoad = useCallback((img) => {
    imgRef.current = img;
    const { width, height } = img;

    if (aspectType !== "free_reactangle") {
      const centeredCrop = getCenteredCrop(width, height, aspect);
      setCrop(centeredCrop);
      setCompletedCrop(centeredCrop);
    } else {
      setCrop(undefined); // Let user manually drag to crop
      setCompletedCrop(null);
    }
  }, [aspect, aspectType]);


  const handleRestart = () => {
    if (imgRef.current) {
      const { width, height } = imgRef.current;
      const centeredCrop = getCenteredCrop(width, height, aspect);
      setCrop(centeredCrop);
      setCompletedCrop(centeredCrop);
    }
  };

  const handleDelete = () => {
    setCrop(undefined);
    setCompletedCrop(null);
    imgRef.current = null;
    onFileChange(null);
  };

  const handleUpload = () => {
    if (!completedCrop || !imgRef.current) return;

    const canvas = document.createElement("canvas");
    const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;

    canvas.width = completedCrop.width;
    canvas.height = completedCrop.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      imgRef.current,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width,
      completedCrop.height
    );

    canvas.toBlob((blob) => {
      const previewUrl = URL.createObjectURL(blob);
      onUpload(previewUrl);
      onClose();
    }, "image/jpeg");
  };

  const handleAspectChange = (type) => {
    setAspectType(type);
    if (imgRef.current) {
      const { width, height } = imgRef.current;
      const newAspect = getAspectRatio(type);
      const newCrop = getCenteredCrop(width, height, newAspect);
      setCrop(newCrop);
      setCompletedCrop(newCrop); // Keep buttons active on aspect switch
    }
  };

  const isCropActive = Boolean(completedCrop?.width && completedCrop?.height);

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg md:w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium md:text-base">Crop your image</h3>
          <button className="p-1 bg-gray-100 rounded-full" onClick={onClose}>
            <IoMdClose className="text-2xl text-gray-600 hover:cursor-pointer hover:text-black" />
          </button>
        </div>

        {!imageSrc ? (
          <div className="flex flex-col items-center justify-center h-40 border border-dashed rounded-2xl p-4">
            <button
              className="w-full h-full flex-col gap-2 hover:cursor-pointer flex items-center justify-center"
              onClick={() => fileInputRef.current?.click()}
            >
              <LiaFileImage className="text-4xl" />
              <div className="text-sm font-medium">
                Select file to upload, <br /> or drag-and-drop file
              </div>
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={onFileChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between">
              <div className="flex gap-1.5 md:gap-3">
                <button
                  onClick={() => handleAspectChange("area_reactangle")}
                  className={`p-2 rounded-lg transition-all  hover:cursor-pointer duration-300 ease-in-out flex gap-1 items-center md:text-sm text-xs font-medium text-gray-700 ${aspectType === "area_reactangle" ? "right-1 outline-1 outline-gray-200 bg-gray-100" : "bg-white outline-1 outline-gray-100"}`}
                >
                  <PiRectangleDashedLight className="text-lg" />  Free
                </button>
                <button
                  onClick={() => handleAspectChange("rectangle")}
                  className={`p-2 rounded-lg transition-all hover:cursor-pointer  duration-300 ease-in-out flex gap-1 items-center md:text-sm text-xs font-medium text-gray-700 ${aspectType === "rectangle" ? "right-1 outline-1 outline-gray-200 bg-gray-100" : "bg-white outline-1 outline-gray-100"}`}
                >
                  <PiRectangleDashedLight className="text-lg" />  Rectangle
                </button>
                <button
                  onClick={() => handleAspectChange("square")}
                  className={`p-2 rounded-lg transition-all hover:cursor-pointer  duration-300 ease-in-out flex gap-1 items-center md:text-sm text-xs font-medium text-gray-700 ${aspectType === "square" ? "right-1 outline-1 outline-gray-200 bg-gray-100" : "bg-white outline-1 outline-gray-100"}`}
                >
                  <PiRectangleDashedLight className="text-lg" />  Square
                </button>
              </div>
              <button
                onClick={handleRestart}
                className="p-2 rounded-lg transition-all  hover:cursor-pointer duration-300 ease-in-out flex gap-1 items-center md:text-sm text-xs font-medium bg-blue-50 text-gray-700  outline-1 outline-gray-100 hover:outline-1 hover:outline-gray-700  "
              >
                <MdOutlineRestartAlt /> <span className="hidden sm:block">Reset</span>
              </button>
            </div>

            <div className="w-full h-[400px] flex justify-center items-center overflow-hidden border border-[#dddddd] croper_bg rounded-lg">
              <ReactCrop
                crop={crop}
                onChange={(newCrop) => setCrop(newCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspectType === "free_reactangle" ? undefined : aspect}
                className="max-w-full max-h-96"
              >

                <img
                  src={imageSrc}
                  onLoad={(e) => onImageLoad(e.currentTarget)}
                  alt="Crop source"
                  className="object-contain bg-white h-full w-full"
                />
              </ReactCrop>
            </div>
          </div>
        )}

        <div className="w-full flex  gap-3 md:flex-row md:gap-0 justify-between mt-4">
          <button
            className={`btn px-8 sm:px-20 rounded-full border ${!isCropActive
              ? "bg-white hover:shadow-none text-gray-400 font-medium hover:cursor-not-allowed"
              : "bg-white text-gray-800 border-gray-800"
              }`}
            disabled={!isCropActive}
            onClick={handleDelete}
          >
            Delete
          </button>

          <button
            className={`btn px-8 sm:px-20 rounded-full border ${!isCropActive
              ? "bg-gray-200 hover:cursor-not-allowed hover:shadow-none"
              : "bg-blue-700 border-blue-800 text-white"
              }`}
            disabled={!isCropActive}
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CropModal;
