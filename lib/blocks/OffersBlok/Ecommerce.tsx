import React, { useState } from "react";
import {
  Product,
  Button,
  Receipt,
  IconButton,
  GradientText,
} from "../../components";
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
                  <svg
                    className="text-voilet-400 w-7 h-7"
                    viewBox="0 0 21 19"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.875 0.75C4.26172 0.75 4.61328 1.06641 4.68359 1.45312L4.75391 1.875H19.5195C20.2578 1.875 20.8203 2.61328 20.6094 3.31641L18.7109 10.0664C18.5703 10.5586 18.1484 10.875 17.6211 10.875H6.47656L6.79297 12.5625H17.6562C18.1133 12.5625 18.5 12.9492 18.5 13.4062C18.5 13.8984 18.1133 14.25 17.6562 14.25H6.08984C5.70312 14.25 5.35156 13.9688 5.28125 13.582L3.17188 2.4375H1.34375C0.851562 2.4375 0.5 2.08594 0.5 1.59375C0.5 1.13672 0.851562 0.75 1.34375 0.75H3.875ZM5 17.0625C5 16.1484 5.73828 15.375 6.6875 15.375C7.60156 15.375 8.375 16.1484 8.375 17.0625C8.375 18.0117 7.60156 18.75 6.6875 18.75C5.73828 18.75 5 18.0117 5 17.0625ZM18.5 17.0625C18.5 18.0117 17.7266 18.75 16.8125 18.75C15.8633 18.75 15.125 18.0117 15.125 17.0625C15.125 16.1484 15.8633 15.375 16.8125 15.375C17.7266 15.375 18.5 16.1484 18.5 17.0625Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              }
            />
          </FloatingContainer>
        </div>
        <FloatingContainer className="relative">
          <Receipt products={products.slice(0, 3)} />
        </FloatingContainer>
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
    />
  );
};

export default Ecommerce;
