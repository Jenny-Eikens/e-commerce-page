import { useState } from "react";
import images from "../data/images.json";
import ImageSection from "./ImageSection";

const iconClose = (
  <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
      fill="hsl(0, 0%, 100%)"
      fill-rule="evenodd"
      className="transition-all duration-200 group-hover:fill-orange"
    />
  </svg>
);

export const iconPrevious = (
  <svg
    width="12"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
    className="scale-75"
  >
    <path
      d="M11 1 3 9l8 8"
      stroke="#1D2026"
      stroke-width="3"
      fill="none"
      fill-rule="evenodd"
      className="transition-colors duration-200 group-hover:stroke-orange"
    />
  </svg>
);

export const iconNext = (
  <svg
    width="13"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
    className="scale-75"
  >
    <path
      d="m2 1 8 8-8 8"
      stroke="#1D2026"
      stroke-width="3"
      fill="none"
      fill-rule="evenodd"
      className="transition-colors duration-200 group-hover:stroke-orange"
    />
  </svg>
);

export default function ImageGallery() {
  const [clickedImg, setClickedImg] = useState(images.images[0].link);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const totalLength = images.images.length;

  function handleClick(index: number) {
    setCurrentIndex(index);
    setClickedImg(images.images[index].link);
  }

  function handlePrevious() {
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = images.images[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    setCurrentIndex(currentIndex - 1);
    const newUrl = images.images[currentIndex - 1].link;
    setClickedImg(newUrl);
  }

  function handleNext() {
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = images.images[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    setClickedImg(images.images[newIndex].link);
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`images-overlay fixed inset-0 z-[100] m-auto hidden min-h-[100vh] items-center justify-center bg-black bg-opacity-75 md:flex ${galleryOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden="true"
      >
        <div className="relative m-auto flex h-full w-full scale-110 items-center justify-center border-4 border-red-400">
          <div className="images-grid relative m-auto max-w-[400px]">
            {/* Close button */}
            <button
              className="group absolute right-0 top-[-2rem] bg-transparent"
              onClick={() => setGalleryOpen(false)}
            >
              {iconClose}
            </button>

            <button className="rotation left group" onClick={handlePrevious}>
              {iconPrevious}
            </button>

            {/* Image section */}
            <img
              src={clickedImg}
              className="main-image w-full rounded-xl object-contain hover:cursor-pointer"
              alt="image of shoe"
              onClick={() => setGalleryOpen(true)}
            />
            <button className="rotation right group" onClick={handleNext}>
              {iconNext}
            </button>
            <div className="thumbnail-wrapper mx-8 hidden grid-cols-4 gap-5 md:grid">
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
        </div>
      </div>
      {/* End of overlay */}

      {/* Main content */}
      <ImageSection
        clickedImg={clickedImg}
        setClickedImg={setClickedImg}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        galleryOpen={galleryOpen}
        setGalleryOpen={setGalleryOpen}
        handleClick={handleClick}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  );
}
