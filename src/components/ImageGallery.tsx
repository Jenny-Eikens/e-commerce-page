import { useState } from "react";
import images from "../data/images.json";
import ImageSection from "./ImageSection";

export default function ImageGallery() {
  const [clickedImg, setClickedImg] = useState(images.images[0].link);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  function handleClick(index: number) {
    setCurrentIndex(index);
    setClickedImg(images.images[index].link);
  }

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

  const iconPrevious = (
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

  const iconNext = (
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

  return (
    <>
      {/* Overlay */}
      <div
        className={`images-overlay fixed inset-0 z-[100] m-auto flex min-h-[100vh] items-center justify-center bg-black bg-opacity-75 ${galleryOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden="true"
      >
        <div className="m-auto flex scale-110 items-center justify-center">
          <ImageSection
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            galleryOpen={galleryOpen}
            setGalleryOpen={setGalleryOpen}
            handleClick={handleClick}
          />

          {/* Buttons */}
          <button
            className="group absolute right-0 top-[-2rem] bg-transparent"
            onClick={() => setGalleryOpen(false)}
          >
            {iconClose}
          </button>
          <button className="rotation group left-[-1.5rem] top-[35%]">
            {iconPrevious}
          </button>
          <button className="rotation group right-[-1.5rem] top-[35%]">
            {iconNext}
          </button>
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
      />
    </>
  );
}
