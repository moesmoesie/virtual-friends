import React, { useState } from "react";
import { Product, Button, Receipt, IconButton } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="relative grid-cols-[min-content,min-content] gap-7 grid">
      <div className="pt-3">
        <ProductCard />
      </div>
      <div className="relative">
        <div className="absolute right-10 top-0 -translate-y-1/2">
          <IconButton
            icon={
              <div className="relative">
                <FontAwesomeIcon
                  className="text-[20px] text-Teal/500"
                  icon={"shopping-cart"}
                />
              </div>
            }
          />
        </div>
        <div className="shadow-2xl">
          <Receipt products={products.slice(0, 3)} />
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC = () => {
  const [currentId, setId] = useState("1");
  return (
    <div className="shadow-2xl">
      <Product
        products={products}
        currentProductId={currentId}
        setCurrentProductId={(value) => setId(value)}
        favoriteButton={
          <FontAwesomeIcon icon="heart" className=" body-3 text-teal-500" />
        }
        addButton={
          <Button type="accent">
            <span className="body-1 whitespace-nowrap flex items-center gap-2  px-6 py-2 font-bold">
              <FontAwesomeIcon
                className="text-[20px] text-teal-500"
                icon="plus"
              />
              Add to Chart
            </span>
          </Button>
        }
      />
    </div>
  );
};

export default Ecommerce;
