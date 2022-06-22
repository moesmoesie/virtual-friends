import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

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
  favoriteButton,
  addButton,
}) => {
  const [currentProductId, setCurrentProductId] = useState("1");

  const getProduct = () => {
    return products?.find((el) => el.id == currentProductId);
  };

  const variants: Variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0, x: 100 },
    exit: { opacity: 0, x: -100, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex w-[241px] flex-col gap-4 rounded-lg bg-DarkPurple/600 p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="inline-block rounded-md bg-DarkPurple/500 py-1 px-3">
          <span className="body-1 font-bold text-Teal/500">
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
              <div className="relative grid h-44 w-full place-items-center rounded-lg bg-DarkPurple/500">
                <AnimatePresence>
                  <motion.img
                    key={currentProductId}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="absolute"
                    src={getProduct()?.image}
                  />
                </AnimatePresence>
              </div>

              <div className="relative mt-5 h-[35px] w-full items-center">
                <AnimatePresence>
                  <motion.span
                    key={currentProductId}
                    exit="exit"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="body-3 absolute w-full text-center text-[18px] font-bold "
                  >
                    {getProduct()?.title}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="relative mb-5 h-[35px] w-full items-center">
                <AnimatePresence>
                  <motion.span
                    key={currentProductId}
                    variants={variants}
                    exit="exit"
                    initial="hidden"
                    animate="visible"
                    className="body-3 absolute w-full text-center text-[28px] font-bold "
                  >
                    {getProduct()?.price}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        {/* END BODY */}

        {/* COLOR PICKER */}
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
        {/* END ColorPicker */}
      </div>
      <div className="flex justify-center">{addButton}</div>
    </div>
  );
};

export default Product;
