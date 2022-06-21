import React from "react";
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

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  const ColorPicker = () => {
    return (
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
    );
  };

  const Header = () => {
    return (
      <div className="flex items-center justify-between">
        <div className="inline-block rounded-md bg-DarkPurple/500 py-1 px-3">
          <span className="body-1 font-bold text-Teal/500">
            {currentProduct?.discountPercentage}%
          </span>
        </div>
        <div>{favoriteButton !== undefined ? favoriteButton : null}</div>
      </div>
    );
  };

  const Body = () => {
    return (
      <div className="relative flex w-full">
        <div className="relative flex w-full flex-col items-center">
          <div className="flex w-full flex-col items-center">
            <div className="relative grid h-44 w-full place-items-center rounded-lg bg-DarkPurple/500">
              {products?.map((el) => {
                if (el.id === currentProductId) {
                  return (
                    <motion.img
                      key={el.id}
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      className="absolute"
                      src={el?.image}
                    />
                  );
                }
              })}
            </div>

            <div className="relative mt-5 h-[35px] w-full items-center">
              {products?.map((el) => {
                if (el.id === currentProductId) {
                  return (
                    <motion.span
                      key={el.id}
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      className="body-3 absolute w-full text-center text-[18px] font-bold "
                    >
                      {el?.title}
                    </motion.span>
                  );
                }
              })}
            </div>

            <div className="relative mb-5 h-[35px] w-full items-center">
              {products?.map((el) => {
                if (el.id === currentProductId) {
                  return (
                    <motion.span
                      key={el.id}
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      className="body-3 absolute w-full text-center text-[28px] font-bold "
                    >
                      {el?.price}
                    </motion.span>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-[241px] flex-col gap-4 rounded-lg bg-DarkPurple/600 p-5">
      <Header />
      <div className="flex flex-col items-center overflow-hidden">
        <Body />
        <ColorPicker />
      </div>
      <div className="flex justify-center">{addButton}</div>
    </div>
  );
};

export default Product;
