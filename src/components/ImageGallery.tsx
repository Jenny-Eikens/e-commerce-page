import { ReactNode } from "react";

interface ImageGalleryProps {
  galleryOpen: boolean;
  setGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handlePrevious: React.MouseEventHandler<HTMLButtonElement>;
  iconPrevious: ReactNode;
  clickedImg: string;
  handleNext: React.MouseEventHandler<HTMLButtonElement>;
  iconNext: ReactNode;
}

export default function ImageGallery({
  galleryOpen,
  setGalleryOpen,
  handlePrevious,
  iconPrevious,
  clickedImg,
  handleNext,
  iconNext,
}: ImageGalleryProps) {
  return (
    <>
      {/* Main content */}
      <section
        className="images-grid relative md:m-auto md:max-w-[400px]"
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
          alt="shoe"
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
      </section>
    </>
  );
}
