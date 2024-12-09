import images from "../data/images.json";

interface ThumbnailProps {
  handleClick: any;
  currentIndex: number;
}

export default function Thumbnails({
  currentIndex,
  handleClick,
}: ThumbnailProps) {
  return (
    <>
      {/* Thumbnails, hidden on mobile screens */}
      <div className="thumbnails hidden grid-cols-4 gap-5 md:grid">
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
    </>
  );
}
