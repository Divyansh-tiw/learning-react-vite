export default function Message() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>This is a button</button>
    </div>
  );
}
