import { useState } from "react";

import PriceComponent from "../../components/price";
import NumberInputComponent from "../../components/numberInput";

export interface ItemType {
  quantity: number;
  price: number;
}

function PriceContainer() {
  const [items, setItems] = useState<Array<ItemType>>([]);

  function quantityHandler(index: number, val: number) {
    if (val >= 0) {
      const newArr = items.map((item, i) =>
        index === i ? { ...item, quantity: val } : item
      );

      setItems(newArr);
    }
  }

  function amountHandler(index: number, val: number) {
    if (val >= 0) {
      const newArr = items.map((item, i) =>
        index === i ? { ...item, price: val } : item
      );

      setItems(newArr);
    }
  }

  function addNewItem() {
    const temp = [...items];

    temp.push({
      price: 0,
      quantity: 0,
    });

    setItems(temp);
  }

  return (
    <main>
      <h1>Price Calculator</h1>
      <div>
        {items.map((item, i) => (
          <PriceComponent>
            <NumberInputComponent
              value={item.quantity}
              changeHandler={quantityHandler}
              id={i}
            />
            <NumberInputComponent
              value={item.price}
              changeHandler={amountHandler}
              id={i}
            />
            <div>{item.price * item.quantity}</div>
          </PriceComponent>
        ))}
      </div>
      <div>
        Total :{" "}
        {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </div>
      <button onClick={addNewItem}>Add Item</button>
    </main>
  );
}

export default PriceContainer;
