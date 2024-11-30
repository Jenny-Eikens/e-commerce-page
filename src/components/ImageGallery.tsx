import { useState } from "react";
import images from "../data/images.json";

export default function ImageGallery() {
  const [clickedImg, setClickedImg] = useState(images.images[0].link);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(index: number) {
    setCurrentIndex(index);
    setClickedImg(images.images[index].link);
  }

  return (
    <>
      <div className="images-grid m-auto max-w-[350px]">
        <img src={clickedImg} className="main-image w-full rounded-md" />
        <div className="thumbnail-wrapper hidden grid-cols-4 gap-4 md:grid">
          {images.thumbnails.map((thumbnail, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`relative rounded-lg ${currentIndex === index ? "border-2 border-orange" : "border-none"}`}
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
                    className="thumbnail rounded-md object-cover"
                    onClick={() => handleClick(index)}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
