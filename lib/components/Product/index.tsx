import React from "react";
import { useState } from "react";
import { Button } from "..";
import StoryblokImage from "../StoryblokImage";
import { ProductPorps } from "./types";

const Product: React.FC<ProductPorps> = ({ products }) => {
  const [currentProductId, setCurrentProductId] = useState("1");

  const getProduct = () => {
    return products?.find((el) => el.id == currentProductId);
  };

  return (
    <div className="flex w-[241px] shadow-card-m flex-col gap-4 rounded-lg bg-grey-p p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="inline-block rounded-md bg-white py-1 px-3">
          <span className="body-1 font-bold text-voilet-400">
            {getProduct()?.discountPercentage}%
          </span>
        </div>
        <button>
          <svg
            className="text-voilet-400"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5.96484V5.78906C0 3.32812 1.75781 1.21875 4.18359 0.832031C5.76562 0.550781 7.41797 1.07812 8.57812 2.23828L9 2.625L9.38672 2.23828C10.5469 1.07812 12.1992 0.550781 13.7812 0.832031C16.207 1.21875 18 3.32812 18 5.78906V5.96484C18 7.44141 17.3672 8.84766 16.3125 9.83203L9.94922 15.7734C9.70312 16.0195 9.35156 16.125 9 16.125C8.61328 16.125 8.26172 16.0195 8.01562 15.7734L1.65234 9.83203C0.597656 8.84766 0 7.44141 0 5.96484Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      {/* END HEADER  */}

      {/* BODY */}
      <div className="flex flex-col items-center overflow-hidden">
        <div className="relative flex w-full">
          <div className="relative flex w-full flex-col items-center">
            <div className="flex w-full flex-col items-center">
              <div className="relative grid h-44 w-full place-items-center rounded-lg bg-white">
                <StoryblokImage
                  key={currentProductId}
                  className="absolute h-[90%] object-contain"
                  filename={getProduct()?.image ?? ""}
                  is_external_url={false}
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </div>

              <div className="relative mt-5 h-[35px] w-full items-center">
                <span
                  key={currentProductId}
                  className="body-3 absolute w-full text-center text-[18px] font-bold "
                >
                  {getProduct()?.title}
                </span>
              </div>

              <div className="relative mb-5 h-[35px] w-full items-center">
                <span
                  key={currentProductId}
                  className="body-3 absolute w-full text-center text-[28px] font-bold "
                >
                  {getProduct()?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* END BODY */}

        {/* COLOR PICKER */}
        <div className="mb-2 flex items-center gap-2">
          <span className="body-1 text-grey-200">Colour</span>

          {products?.map((el) => {
            return (
              <button key={el.id} onClick={() => setCurrentProductId(el.id)}>
                <img
                  loading="lazy"
                  key={el.id}
                  src={el.color}
                  className={`${
                    currentProductId == el.id ? "scale-125" : "scale-90"
                  } h-4 w-4 rounded-full object-cover transition-all`}
                  alt=""
                />
              </button>
            );
          })}
        </div>
        {/* END ColorPicker */}
      </div>
      <div className="flex justify-center">
        <Button className="text-white">
          <div className="flex items-center gap-2">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6875 8.25C14.6875 8.88281 14.1602 9.41016 13.5625 9.41016H8.5V14.4727C8.5 15.0703 7.97266 15.5625 7.375 15.5625C6.74219 15.5625 6.25 15.0703 6.25 14.4727V9.41016H1.1875C0.554688 9.41016 0.0625 8.88281 0.0625 8.25C0.0625 7.65234 0.554688 7.16016 1.1875 7.16016H6.25V2.09766C6.25 1.46484 6.74219 0.9375 7.375 0.9375C7.97266 0.9375 8.5 1.46484 8.5 2.09766V7.16016H13.5625C14.1602 7.125 14.6875 7.65234 14.6875 8.25Z"
                fill="white"
              />
            </svg>
            Add to chart
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Product;
