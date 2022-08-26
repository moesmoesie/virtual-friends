import React from "react";
import { useState } from "react";
import StoryblokImage from "../StoryblokImage";
import { ProductPorps } from "./types";

const Product: React.FC<ProductPorps> = ({
  products,
  favoriteButton,
  addButton,
}) => {
  const [currentProductId, setCurrentProductId] = useState("1");

  const getProduct = () => {
    return products?.find((el) => el.id == currentProductId);
  };

  return (
    <div className="flex w-[241px] flex-col gap-4 rounded-lg bg-dark-purple-600 p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="inline-block rounded-md bg-dark-purple-500 py-1 px-3">
          <span className="body-1 font-bold text-teal-500">
            {getProduct()?.discountPercentage}%
          </span>
        </div>
        <div>{favoriteButton !== undefined ? favoriteButton : null}</div>
      </div>
      {/* END HEADER  */}

      {/* BODY */}
      <div className="flex flex-col items-center overflow-hidden">
        <div className="relative flex w-full">
          <div className="relative flex w-full flex-col items-center">
            <div className="flex w-full flex-col items-center">
              <div className="relative grid h-44 w-full place-items-center rounded-lg bg-dark-purple-500">
                <StoryblokImage
                  key={currentProductId}
                  className="absolute"
                  filename={getProduct()?.image ?? ""}
                  is_external_url={false}
                  size={300}
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
          <span className="body-1 text-grey-200">Colors</span>

          {products?.map((el) => {
            return (
              <button key={el.id} onClick={() => setCurrentProductId(el.id)}>
                <img
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
      <div className="flex justify-center">{addButton}</div>
    </div>
  );
};

export default Product;
