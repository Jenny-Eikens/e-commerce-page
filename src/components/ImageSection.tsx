import { useState } from "react";
import { MouseEvent } from "react";
import ImageGallery from "./ImageGallery";
import Thumbnails from "./Thumbnails";
import ImageOverlay from "./ImageOverlay";
import images from "../data/images.json";

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

export default function ImageSetion() {
  const [clickedImg, setClickedImg] = useState(images.images[0].link);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const totalLength = images.images.length;

  function handleClick(index: number) {
    setCurrentIndex(index);
    setClickedImg(images.images[index].link);
  }

  function handlePrevious(event: MouseEvent<HTMLButtonElement>): void {
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

  function handleNext(event: MouseEvent<HTMLButtonElement>): void {
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
      <ImageOverlay
        iconPrevious={iconPrevious}
        iconNext={iconNext}
        clickedImg={clickedImg}
        currentIndex={currentIndex}
        handleClick={handleClick}
        galleryOpen={galleryOpen}
        setGalleryOpen={setGalleryOpen}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <section
        className="images-grid relative md:m-auto md:max-w-[400px]"
        aria-hidden={galleryOpen ? "true" : "false"}
      >
        <ImageGallery
          galleryOpen={galleryOpen}
          setGalleryOpen={setGalleryOpen}
          handlePrevious={handlePrevious}
          iconPrevious={iconPrevious}
          clickedImg={clickedImg}
          handleNext={handleNext}
          iconNext={iconNext}
        />
        <Thumbnails currentIndex={currentIndex} handleClick={handleClick} />
      </section>
    </>
  );
}
