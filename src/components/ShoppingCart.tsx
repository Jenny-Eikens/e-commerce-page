import { useState } from "react";
import images from "../data/images.json";
import article from "../data/mainArticle.json";
import prices from "../data/prices.json";

interface shoppingCartProps {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

const iconDelete = (
  <svg
    width="14"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
        id="a"
      />
    </defs>
    <use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a" />
  </svg>
);

export default function ShoppingCart({
  itemCount,
  setItemCount,
}: shoppingCartProps) {
  return (
    <>
      <div className="shopping-cart absolute left-[100%] top-[-1.5rem] z-[20] m-auto mt-[4.5rem] flex h-[35vh] w-[95vw] max-w-[450px] -translate-x-[85%] transform flex-col rounded-lg border-none bg-white shadow-lg shadow-dark-gray-blue md:left-[50%] md:top-full md:mt-6 md:h-[32vh] md:w-[45vw] md:-translate-x-[70%] md:p-5 lg:w-[40vw] xl:left-[50%] xl:w-[25vw] xl:-translate-x-[50%]">
        <h1 className="border-b-2 border-black border-opacity-10 p-4 text-sm font-bold md:p-0 md:pb-4">
          Cart
        </h1>
        {itemCount === 0 ? (
          <>
            <div className="flex flex-grow items-center justify-center">
              <p className="text-center text-sm font-bold text-dark-gray-blue">
                Your cart is empty.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="mt-3 flex h-full flex-col items-center justify-between p-4 md:justify-around md:p-0">
              <div className="flex items-stretch">
                <img
                  src={images.thumbnails[0].link}
                  alt="Image of shoes"
                  className="mr-3 max-w-[15%] rounded-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-dark-gray-blue">{article.title}</h2>
                  <div className="text-dark-gray-blue">
                    <span>${prices.currentPrice.toFixed(2)} </span>
                    <span>x </span>
                    <span>{itemCount} </span>
                    <span className="ml-1 font-bold text-black">
                      ${(prices.currentPrice * itemCount).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  className="m-auto mr-0"
                  aria-label="Delete items in cart"
                  onClick={() => setItemCount(0)}
                >
                  <span>{iconDelete}</span>
                </button>
              </div>
              <button className="w-full rounded-lg bg-orange p-4 text-center font-bold text-v-dark-blue transition-opacity duration-200 hover:bg-opacity-70">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
