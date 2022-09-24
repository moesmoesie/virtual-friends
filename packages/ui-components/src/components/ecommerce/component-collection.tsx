import { Receipt } from "./receipt";
import { Product, ItemType } from "./product";
import { useState } from "react";

export interface EcommerceComponentCollectionType {
  initialsItems?: ItemType[];
  items: ItemType[];
  itemsInWagon: ItemType[];
}

export const EcommerceComponentCollection: React.FC<
  EcommerceComponentCollectionType
> = (props) => {
  const [items, setItems] = useState(
    props.initialsItems ? props.initialsItems : []
  );

  return (
    <div className="flex items-center gap-6">
      <Receipt title="Virtual Friends" items={items} />
      <div className="flex-1">
        <Product
          onBuy={(item) =>
            setItems((prev) => {
              return [...prev, item];
            })
          }
          products={props.items}
        />
      </div>
    </div>
  );
};
