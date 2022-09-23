import { Receipt } from "components/ecommerce/receipt";
import { Product, ItemType } from "components/ecommerce/product";
import { useState } from "react";

interface ComponentCollectionType {
  initialsItems?: ItemType[];
  items: ItemType[];
  itemsInWagon: ItemType[];
}

export const ComponentCollection: React.FC<ComponentCollectionType> = (
  props
) => {
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
