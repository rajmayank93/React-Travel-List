import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [ele, setEle] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, ele, packed: false, id: Date.now() };

    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setEle(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need 😍 for trip</h3>
      <select
        value={ele}
        onChange={(e) => {
          console.log(e.target.value);
          setEle(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((ele) => (
          <option value={ele} key={ele}>
            {ele}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
