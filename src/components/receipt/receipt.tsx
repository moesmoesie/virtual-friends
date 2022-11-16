import React from "react";
import { ItemType } from "../product/product";
import Image from "next/image";
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

export interface ReceiptType {
  title: string;
  items: ItemType[];
}

interface ReceiptItem {
  count: number;
  item: ItemType;
}

export const Receipt: React.FC<ReceiptType> = (props) => {
  let subtotal = 0;
  const delivery = 4.95;
  const items: ReceiptItem[] = [];

  props.items.forEach((item) => {
    const index = items.findIndex((pred) => pred.item.id === item.id);
    if (index === -1) {
      items.push({
        item,
        count: 1,
      });
    } else {
      items[index].count += 1;
    }
  });

  items.forEach((item) => {
    subtotal += item.count * item.item.price;
  });
  const total = subtotal + delivery;

  return (
    <div className="w-[280px] rounded-lg bg-grey-p p-5 text-black shadow-card-m">
      <Header title={props.title} />

      <div className="h-[242px] overflow-auto">
        {items.map((el, index) => {
          return <ListItem key={index} {...el} />;
        })}
      </div>

      <Summary delivery={delivery} subtotal={subtotal} />

      <Total total={total} />
    </div>
  );
};

const Total: React.FC<{ total: number }> = (props) => {
  return (
    <div className="flex items-baseline justify-between pt-5">
      <p className="body-3">Total</p>
      <p className="body-2 spacing font-bold ">{formatter.format(props.total)}</p>
    </div>
  );
};

const ListItem: React.FC<{ item: ItemType; count: number }> = (props) => {
  const { item, count } = props;
  return (
    <div className="border-b-[1px] min-w-[280px] border-neutral-500 py-5 last:border-0 last:border-b-0 ">
      <div className="flex gap-5">
        <div className="h-[80px] w-[60px] rounded-lg bg-white">{props.item.image && <Image className="h-full w-full object-contain px-1 py-3" {...props.item.image} />}</div>
        <div className="mt-[5.5px] flex flex-col">
          <p className="body-2 font-bold">{item.title}</p>
          <div className="flex items-center gap-[7px]">
            <p className="body-3">Colour</p>
            <div
              style={{
                background: item.color,
              }}
              className="h-3 w-3 rounded-full"
            />
          </div>
          <div className="flex gap-4">
            <p className="body-1">{formatter.format(item.price)}</p>
            <div className="flex rounded-lg bg-white px-2">
              <p className="body-3">{count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Summary: React.FC<{ subtotal: number; delivery: number }> = (props) => {
  return (
    <div className="body-1 border-b-[1px] border-t-[1px] border-grey-100 py-5 pb-5">
      <div className="mb-1 flex justify-between">
        <p className="body-3">Subtotal</p>
        <p className="body-3">{formatter.format(props.subtotal)}</p>
      </div>

      <div className="flex justify-between">
        <p className="body-3">Delivery</p>
        <p className="body-3">{formatter.format(props.delivery)}</p>
      </div>
    </div>
  );
};

const Header: React.FC<{ title: string }> = (props) => {
  return (
    <div className="border-b-[1px] border-neutral-500 pb-5">
      <p className="subtitle-3 font-bold">{props.title}</p>
    </div>
  );
};
