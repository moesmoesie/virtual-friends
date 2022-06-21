import React, { useState } from "react";
import { Product, Button, Receipt, IconButton } from "ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlurredRadialGradient } from "ui";
const products = [
  {
    color: "/assets/productColor2.jpg",
    discountPercentage: 30,
    id: "1",
    price: "€ 89,95",
    title: "Virtual Boy",
    image: "/assets/gameboy.png",
  },
  {
    color: "/assets/productColor3.jpg",
    discountPercentage: 30,
    id: "2",
    price: "€ 89,95",
    title: "Virtual Boy 3",
    image: "/assets/gameboy.png",
  },
  {
    color: "/assets/productColor4.jpg",
    discountPercentage: 30,
    id: "3",
    price: "€ 89,95",
    title: "Virtual Boy",
    image: "/assets/gameboy.png",
  },
  {
    color: "/assets/productColor1.jpg",
    discountPercentage: 30,
    id: "4",
    price: "€ 90,34",
    title: "Virtual Boy",
    image: "/assets/gameboy.png",
  },
];

const Ecommerce: React.FC = () => {
  return (
    <div className="relative hidden flex-1 grid-cols-[min-content,min-content] gap-7 large:grid">
      <div className="absolute left-1/2 top-1/2 -z-50 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 text-PurpleNavy/500">
        <BlurredRadialGradient />
      </div>
      <div className="pt-3">
        <ProductCard />
      </div>
      <div className="relative">
        <div className="absolute right-10 top-0 -translate-y-1/2">
          <IconButton
            icon={
              <div className="relative">
                <div className="absolute -right-3 -top-2 grid h-5  min-w-[20px] place-items-center rounded-full bg-mint/500">
                  <span className="body-1 font-bold text-black">1</span>
                </div>
                <FontAwesomeIcon
                  className="text-[20px] text-Teal/500"
                  icon={"shopping-cart"}
                />
              </div>
            }
          />
        </div>
        <Receipt products={products.slice(0, 3)} />
      </div>
    </div>
  );
};

const ProductCard: React.FC = () => {
  const [currentId, setId] = useState("1");
  return (
    <Product
      products={products}
      currentProductId={currentId}
      setCurrentProductId={(value) => setId(value)}
      favoriteButton={
        <FontAwesomeIcon icon="heart" className=" body-3 text-Teal/500" />
      }
      addButton={
        <Button type="accent">
          <span className="body-1 flex items-center gap-2  px-6 py-2 font-bold">
            <FontAwesomeIcon
              className="text-[20px] text-Teal/500"
              icon="plus"
            />
            Add to Chart
          </span>
        </Button>
      }
    />
  );
};

export default Ecommerce;
