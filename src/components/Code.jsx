import ConditionalComponent from "./ConditionalComponent";
import Fruit from "./Fruit";
import Fruits from "./Fruits";

export default function Code() {
  const whether = false;
  let message = whether ? (
    <div>
      <ConditionalComponent />
    </div>
  ) : (
    <div>
      <Fruits />
    </div>
  );
  return message;
}
