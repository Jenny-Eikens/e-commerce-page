import { useState } from "react";
import images from "../data/images.json";
import { iconClose, iconPrevious, iconNext } from "./ImageGallery";

interface ImageSectionProps {
  clickedImg: string;
  setClickedImg: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  galleryOpen: boolean;
  setGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: any;
  handlePrevious: any;
  handleNext: any;
}

export default function ImageSection({
  clickedImg,
  setClickedImg,
  currentIndex,
  setCurrentIndex,
  galleryOpen,
  setGalleryOpen,
  handleClick,
  handlePrevious,
  handleNext,
}: ImageSectionProps) {
  return (
    <div className="images-grid relative m-0 w-full md:m-auto md:max-w-[400px]">
      <img
        src={clickedImg}
        className="main-image md:max-h-auto max-h-[40vh] w-[100vw] object-cover hover:cursor-pointer md:scale-100 md:rounded-xl md:object-contain"
        alt="image of shoe"
        onClick={() => setGalleryOpen(true)}
      />
      <div className="border border-green-500">
        <button
          className="rotation group top-[50%] md:left-[-1.5rem] md:top-[35%] md:hidden"
          onClick={handlePrevious}
        >
          {iconPrevious}
        </button>
        <button
          className="rotation group right-[-1.5rem] top-[35%] md:hidden"
          onClick={handleNext}
        >
          {iconNext}
        </button>
      </div>
      <div className="thumbnail-wrapper hidden grid-cols-4 gap-5 md:grid">
        {images.thumbnails.map((thumbnail, index) => {
          return (
            <>
              <div
                key={index}
                className={`group relative rounded-lg transition-all duration-100 hover:cursor-pointer ${currentIndex === index ? "border-2 border-orange" : "border-none"}`}
              >
                <div
                  className={`overlay pointer-events-none absolute inset-0 rounded-md bg-light-gray-blue bg-opacity-70 transition-opacity duration-300 group-hover:opacity-80 ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
                ></div>
                <img
                  key={index}
                  src={thumbnail.link}
                  alt={thumbnail.description}
                  className="thumbnail rounded-lg"
                  onClick={() => handleClick(index)}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}