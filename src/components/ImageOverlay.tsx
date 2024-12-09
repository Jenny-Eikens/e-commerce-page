import { useEffect, useRef } from "react";
import ImageGallery from "./ImageGallery";
import Thumbnails from "./Thumbnails";
import { ReactNode } from "react";

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

interface ImageOverlayProps {
  iconPrevious: ReactNode;
  iconNext: ReactNode;
  clickedImg: string;
  currentIndex: number;
  handleClick: (index: number) => void;
  galleryOpen: boolean;
  setGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handlePrevious: React.MouseEventHandler<HTMLButtonElement>;
  handleNext: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ImageOverlay({
  iconPrevious,
  iconNext,
  clickedImg,
  currentIndex,
  handleClick,
  galleryOpen,
  setGalleryOpen,
  handlePrevious,
  handleNext,
}: ImageOverlayProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (galleryOpen && overlayRef.current) {
      overlayRef.current.focus();
    }
  }, [galleryOpen]);

  function handleKeyDown(e: any) {
    if (e.key === "Escape") {
      setGalleryOpen(false);
    }
  }

  return (
    <div
      className={`images-overlay fixed inset-0 z-[100] m-auto hidden min-h-[100vh] items-center justify-center bg-black bg-opacity-75 md:flex ${galleryOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      ref={overlayRef}
      onClick={() => setGalleryOpen(false)}
    >
      {/* Wrapper for centering everything within overlay */}
      <div className="grid-wrapper relative m-auto flex h-full w-full items-center justify-center">
        <div
          className="images-grid relative max-w-[400px]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Close button */}
          <button
            className="group absolute right-[-0.5rem] top-[-3rem] bg-transparent p-3"
            onClick={() => setGalleryOpen(false)}
            aria-label="Close overlay"
          >
            {iconClose}
          </button>
          {/* Previous button */}
          <button
            className="rotation left group"
            onClick={handlePrevious}
            aria-label="Previous"
          >
            {iconPrevious}
          </button>

          <ImageGallery
            galleryOpen={galleryOpen}
            setGalleryOpen={setGalleryOpen}
            handlePrevious={handlePrevious}
            iconPrevious={iconPrevious}
            clickedImg={clickedImg}
            handleNext={handleNext}
            iconNext={iconNext}
          />
          {/* Next button */}
          <button
            className="rotation right group"
            onClick={handleNext}
            aria-label="Next"
          >
            {iconNext}
          </button>

          {/* Thumbnails */}
          <div className="px-6">
            <Thumbnails currentIndex={currentIndex} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
