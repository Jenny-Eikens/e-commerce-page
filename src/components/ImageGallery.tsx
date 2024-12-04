import { useState } from "react";
import images from "../data/images.json";
import ImageOverlay from "./ImageOverlay";

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
      <ImageOverlay
        iconPrevious={iconPrevious}
        iconNext={iconNext}
        clickedImg={clickedImg}
        currentIndex={currentIndex}
        galleryOpen={galleryOpen}
        setGalleryOpen={setGalleryOpen}
        handleClick={handleClick}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      {/* End of overlay */}

      {/* Main content */}
      <section
        className="images-grid relative border border-green-500 md:m-auto md:max-w-[400px]"
        aria-hidden={galleryOpen ? "true" : "false"}
      >
        {/* Previous button */}
        <button
          className="rotation left group md:hidden"
          onClick={handlePrevious}
          aria-label="Previous"
        >
          {iconPrevious}
        </button>
        {/* Main image */}

        <img
          src={clickedImg}
          className="main-image max-h-[45vh] w-[100vw] object-cover hover:cursor-pointer md:max-h-full md:w-auto md:rounded-xl md:object-contain"
          alt="image of shoe"
          onClick={() => setGalleryOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setGalleryOpen(true);
            }
          }}
          tabIndex={0}
          role="button"
        />
        {/* Next button */}
        <button
          className="rotation right group md:hidden"
          onClick={handleNext}
          aria-label="Next"
        >
          {iconNext}
        </button>

        {/* Thumbnails, hidden on mobile screens */}
        <div className="thumbnail-wrapper thumbnails hidden grid-cols-4 gap-5 md:grid">
          {images.thumbnails.map((thumbnail, index) => {
            return (
              <>
                <div
                  key={index}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleClick(index);
                    }
                  }}
                  className={`group relative rounded-lg transition-all duration-100 hover:cursor-pointer ${currentIndex === index ? "border-2 border-orange" : "border-none"}`}
                >
                  <div
                    className={`overlay pointer-events-none absolute inset-0 rounded-md bg-light-gray-blue bg-opacity-70 transition-opacity duration-300 group-hover:opacity-80 ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
                  ></div>
                  <img
                    key={index}
                    src={thumbnail.link}
                    alt={thumbnail.description}
                    className="rounded-lg"
                    onClick={() => handleClick(index)}
                  />
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
