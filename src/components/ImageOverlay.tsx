import images from "../data/images.json";

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
  iconPrevious: any;
  iconNext: any;
  clickedImg: string;
  currentIndex: number;
  galleryOpen: boolean;
  setGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: any;
  handlePrevious: any;
  handleNext: any;
}

export default function ImageOverlay({
  iconPrevious,
  iconNext,
  clickedImg,
  currentIndex,
  galleryOpen,
  setGalleryOpen,
  handleClick,
  handlePrevious,
  handleNext,
}: ImageOverlayProps) {
  return (
    <div
      className={`images-overlay fixed inset-0 z-[100] m-auto hidden min-h-[100vh] items-center justify-center bg-black bg-opacity-75 md:flex ${galleryOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden="true"
    >
      {/* Wrapper for centering everything within overlay */}
      <div className="grid-wrapper relative m-auto flex h-full w-full items-center justify-center border-4 border-yellow-400">
        <div className="images-grid relative max-w-[400px] border border-green-500">
          {/* Close button */}
          <button
            className="group absolute right-0 top-[-2rem] bg-transparent"
            onClick={() => setGalleryOpen(false)}
          >
            {iconClose}
          </button>
          {/* Previous button */}
          <button className="rotation left group" onClick={handlePrevious}>
            {iconPrevious}
          </button>

          {/* Main image */}
          <img
            src={clickedImg}
            className="main-image rounded-xl object-contain hover:cursor-pointer"
            alt="image of shoe"
          />
          {/* Next button */}
          <button className="rotation right group" onClick={handleNext}>
            {iconNext}
          </button>

          {/* Thumbnails */}
          <div className="thumbnail-wrapper thumbnails mx-8 grid grid-cols-4 gap-5">
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
                      className="rounded-lg"
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
  );
}
