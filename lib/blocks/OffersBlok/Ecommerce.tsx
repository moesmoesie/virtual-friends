import React, { useState } from "react";
import { Product, Button, Receipt, IconButton } from "../../components";
import FloatingContainer from "../../components/FloatingContainer";
const products = [
  {
    color: "/assets/productColor2.jpg",
    discountPercentage: 30,
    id: "1",
    price: "€ 89,95",
    title: "Virtual Boy",
    image: "https://a.storyblok.com/f/170199/165x160/86df839329/gameboy.png",
  },
  {
    color: "/assets/productColor3.jpg",
    discountPercentage: 30,
    id: "2",
    price: "€ 89,95",
    title: "Virtual Boy 3",
    image: "https://a.storyblok.com/f/170199/165x160/86df839329/gameboy.png",
  },
  {
    color: "/assets/productColor4.jpg",
    discountPercentage: 30,
    id: "3",
    price: "€ 89,95",
    title: "Virtual Boy",
    image: "https://a.storyblok.com/f/170199/165x160/86df839329/gameboy.png",
  },
  {
    color: "/assets/productColor1.jpg",
    discountPercentage: 30,
    id: "4",
    price: "€ 90,34",
    title: "Virtual Boy",
    image: "https://a.storyblok.com/f/170199/165x160/86df839329/gameboy.png",
  },
];

const Ecommerce: React.FC = () => {
  return (
    <div className="relative grid-cols-[min-content,min-content] gap-7 grid">
      <FloatingContainer delay={0.4} className="pt-3">
        <ProductCard />
      </FloatingContainer>
      <div className="relative">
        <div className="absolute z-50 right-10 top-0 -translate-y-1/2">
          <FloatingContainer delay={0.2} className="pt-3">
            <IconButton
              icon={
                <div className="relative">
                  {/* <FontAwesomeIcon
                    className="text-[20px] text-Teal/500"
                    icon={"shopping-cart"}
                  /> */}
                </div>
              }
            />
          </FloatingContainer>
        </div>
        <FloatingContainer className="relative">
          <div className="shadow-2xl">
            <Receipt products={products.slice(0, 3)} />
          </div>
        </FloatingContainer>
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
        favoriteButton={<div />}
        addButton={
          <Button type="accent">
            <span className="body-1 whitespace-nowrap flex items-center gap-2  px-6 py-2 font-bold">
              {/* <FontAwesomeIcon
                className="text-[20px] text-teal-500"
                icon="plus"
              /> */}
              Add to Chart
            </span>
          </Button>
        }
      />
    </div>
  );
};

export default Ecommerce;
