import React, { FC } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
interface ProductPorps {
  products?: {
    id: string;
    discountPercentage: number;
    image?: string;
    title: string;
    price: string;
    color: string;
  }[];
  currentProductId: string;
  setCurrentProductId: (value: string) => void;
  favoriteButton?: JSX.Element;
  addButton: JSX.Element;
}

const Product: React.FC<ProductPorps> = ({
  products,
  currentProductId,
  favoriteButton,
  addButton,
  setCurrentProductId,
}) => {
  const currentProduct = products?.find((el) => el.id == currentProductId);

  return (
    <div className="flex w-[241px] flex-col gap-4 rounded-lg bg-DarkPurple/600 p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="inline-block rounded-md bg-DarkPurple/500 py-1 px-3">
          <span className="body-1 font-bold text-Teal/500">
            {currentProduct?.discountPercentage}%
          </span>
        </div>
        <div>{favoriteButton !== undefined ? favoriteButton : null}</div>
      </div>

      {/* Body */}

      <div className="flex flex-col items-center overflow-hidden">
        <div className="relative flex w-full">
          <div className="relative flex w-full flex-col items-center">
            <motion.div
              transition={{
                ease: "easeIn",
                duration: 0.3,
              }}
              animate={{
                x: `-${
                  100 * products!.findIndex((el) => el.id === currentProductId)
                }%`,
              }}
              className="flex translate-x-[-100%]"
            >
              {products?.map((e, index) => {
                return (
                  <div className="flex w-full shrink-0 flex-col items-center">
                    <div className="grid h-44 w-full place-items-center rounded-lg bg-DarkPurple/500">
                      <img src={e?.image} />
                    </div>

                    <span className="body-3 pt-4 text-[18px] font-bold ">
                      {e?.title}
                    </span>
                    <span className="body-3 mb-4 text-[28px] font-bold">
                      {e?.price}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <span className="body-1 text-Grey/200">Colors</span>

          {products?.map((el, index) => {
            return (
              <button onClick={() => setCurrentProductId(el.id)}>
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
      </div>

      {/* Button */}
      <div className="flex justify-center">{addButton}</div>
    </div>
  );
};

export default Product;
