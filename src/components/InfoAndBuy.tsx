import { useState } from "react";
import article from "../data/mainArticle.json";
import prices from "../data/prices.json";

const iconMinus = (
  <svg
    width="12"
    height="4"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="transition-opacity duration-150 hover:opacity-70"
  >
    <defs>
      <path
        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
        id="a"
      />
    </defs>
    <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a" />
  </svg>
);

const iconPlus = (
  <svg
    width="12"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="transition-opacity duration-150 hover:opacity-70"
  >
    <defs>
      <path
        d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
        id="b"
      />
    </defs>
    <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b" />
  </svg>
);

const iconCart = (
  <svg
    width="22"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    className="scale-75"
  >
    <path
      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
      fill="hsl(220, 13%, 13%)"
      fill-rule="nonzero"
    />
  </svg>
);

interface ItemCountProps {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function InfoAndBuy({
  itemCount,
  setItemCount,
}: ItemCountProps) {
  const [count, setCount] = useState(0);

  function handleClickMinus() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function handleClickPlus() {
    setCount(count + 1);
  }

  return (
    <div className="info-and-buy flex h-full flex-col items-start justify-center space-y-5 px-4 md:mx-4 md:px-0">
      {/* Company name */}
      <h2 className="text-xs font-bold uppercase tracking-wider text-dark-gray-blue">
        Sneaker Company
      </h2>

      {/* Article */}
      <h1 className="text-4xl font-bold leading-[2.5rem] text-v-dark-blue md:text-[2.5rem]">
        {article.title}
      </h1>
      <p className="text-sm leading-5 tracking-wide text-dark-gray-blue md:mr-2 md:pt-4 md:leading-6">
        {article.text}
      </p>

      {/* Pricing */}
      <div className="flex w-full flex-nowrap items-end pt-2 md:flex-wrap">
        <span className="text-2xl font-bold text-v-dark-blue">
          ${prices.currentPrice.toFixed(2)}
        </span>
        <span className="ml-4 flex items-center rounded-md bg-v-dark-blue px-3 py-1 text-sm font-bold text-white">
          {prices.discount}
        </span>
        <span className="ml-auto justify-end font-bold text-dark-gray-blue line-through md:mt-2 md:w-full md:text-left">
          ${prices.oldPrice.toFixed(2)}
        </span>
      </div>

      {/* Adding to cart */}
      <div className="grid w-full grid-cols-1 gap-4 pt-8 md:pt-0 lg:grid-cols-5">
        <div className="flex items-center justify-between rounded-lg bg-light-gray-blue lg:col-span-2">
          <button
            aria-label="Minus one"
            className="p-4"
            onClick={() => handleClickMinus()}
          >
            {iconMinus}
          </button>
          <span className="font-bold">{count}</span>
          <button
            aria-label="Plus one"
            className="p-4"
            onClick={() => handleClickPlus()}
          >
            {iconPlus}
          </button>
        </div>
        <button
          aria-label="Add to cart"
          className="flex items-center justify-center space-x-2 rounded-lg bg-orange p-4 transition-opacity duration-200 hover:bg-opacity-70 lg:col-span-3"
          onClick={() => setItemCount(itemCount + count)}
        >
          <span>{iconCart}</span>
          <p className="text-sm font-bold text-v-dark-blue">Add to cart</p>
        </button>
      </div>
    </div>
  );
}
