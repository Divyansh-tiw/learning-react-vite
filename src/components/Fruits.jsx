import Fruit from "./Fruit";

export default function Fruits() {
  //const Fruits = ["Apple", "Mango", "Banana", "Grape"];

  const fruits = [
    { name: "apple", price: 7, emoji: "🍎", soldout: false },
    { name: "mango", price: 8, emoji: "🥭", soldout: true },
    { name: "banana", price: 4, emoji: "🍌", soldout: false },
    { name: "grape", price: 2, emoji: "🍇", soldout: false },
    { name: "pineapple", price: 12, emoji: "🍍", soldout: false },
    { name: "orange", price: 7, emoji: "🍊", soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
