import { useState } from "react";
import images from "../data/images.json";

interface ImageSectionProps {
  clickedImg: string;
  setClickedImg: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  galleryOpen: boolean;
  setGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: any;
}

export default function ImageSection({
  clickedImg,
  setClickedImg,
  currentIndex,
  setCurrentIndex,
  galleryOpen,
  setGalleryOpen,
  handleClick,
}: ImageSectionProps) {
  return (
    <div className="images-grid relative m-auto max-w-[400px]">
      <img
        src={clickedImg}
        className="main-image w-full rounded-xl object-contain hover:cursor-pointer"
        alt="image of shoe"
        onClick={() => setGalleryOpen(true)}
      />
      <div className="thumbnail-wrapper hidden grid-cols-4 gap-5 md:grid">
        {images.thumbnails.map((thumbnail, index) => {
          return (
            <>
              <div
                key={index}
                className={`relative rounded-lg transition-all duration-100 hover:cursor-pointer ${currentIndex === index ? "border-2 border-orange" : "border-none"}`}
              >
                {currentIndex === index && (
                  <div
                    className={`overlay pointer-events-none absolute inset-0 rounded-md bg-light-gray-blue bg-opacity-70 transition-opacity duration-300`}
                  ></div>
                )}
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
