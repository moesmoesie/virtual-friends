import React from "react";
import { Button } from "../button/button";
import { Image, ImageType } from "../image/image";
import { useState } from "react";

export interface ItemType {
  id: string;
  discountPercentage?: number;
  image?: ImageType;
  title: string;
  price: number;
  color: string;
}
export interface ProductType {
  products?: ItemType[];
  onBuy: (item: ItemType) => void;
}

export const Product: React.FC<ProductType> = (props) => {
  const [product, setProduct] = useState<ItemType>(props.products![0]);

  return (
    <div className="flex min-w-[241px] flex-col gap-5 rounded-lg bg-neutral-400 p-5 shadow-m">
      {/* Header */}
      <div
        className={`flex items-center ${
          product.discountPercentage ? "justify-between" : "justify-end"
        }`}
      >
        {product.discountPercentage && (
          <div className="rounded-lg bg-white px-3 py-1">
            <p className="body-3 font-bold text-primary-400">
              {product.discountPercentage}%
            </p>
          </div>
        )}

        <div className="text-primary-400"></div>
      </div>

      {/* Image */}
      <div className="h-[160px] w-full rounded-lg bg-white py-5 px-2">
        <Image {...product.image!} className="h-full w-full object-contain" />
      </div>

      {/* Body */}
      <div>
        <div className="mb-5 flex flex-col items-center gap-1 text-center">
          <p className="body-2 font-bold">{product.title}</p>
          <p className="subtitle-3">€ {product.price}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="body-3">Colour</p>
          <div className="flex gap-2">
            {props.products?.map((product, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setProduct(props.products![index])}
                  style={{ background: product.color }}
                  className="h-3 w-3 rounded-full bg-white"
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="flex w-full justify-center">
        <Button
          onClick={() => props.onBuy(product)}
          text="Add To Chart"
          type="default"
        />
      </div>
    </div>
  );
};

export default Product;
