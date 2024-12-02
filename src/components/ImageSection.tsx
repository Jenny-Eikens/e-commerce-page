import { useState } from "react";
import images from "../data/images.json";
import { iconPrevious, iconNext } from "./ImageGallery";

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
    <div className="images-grid relative m-0 w-full border border-green-500 md:m-auto md:max-w-[400px]">
      <img
        src={clickedImg}
        className="main-image max-h-[45vh] w-[100vw] object-cover hover:cursor-pointer md:max-h-full md:w-full md:scale-100 md:rounded-xl md:object-contain"
        alt="image of shoe"
        onClick={() => setGalleryOpen(true)}
      />
      <button
        className="rotation left group md:hidden"
        onClick={handlePrevious}
      >
        {iconPrevious}
      </button>
      <button className="rotation right group md:hidden" onClick={handleNext}>
        {iconNext}
      </button>
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
